// The interactive 3D OSIX mark on the home hero. Loaded on intent (see Hero.astro):
// the hero first paints a poster rendered from this exact scene, then this module
// fades the live canvas in over it. Click toggles the "explode" effect; drag rotates.
import {
  ACESFilmicToneMapping,
  AmbientLight,
  BackSide,
  Color,
  DirectionalLight,
  DoubleSide,
  ExtrudeGeometry,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PMREMGenerator,
  Scene,
  ShaderMaterial,
  Shape,
  SphereGeometry,
  Vector3,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

type Pt = [number, number];

const LEFT: Pt[] = [
  [53.7168, 177.064],
  [39.4381, 185.189],
  [39.1495, 185.021],
  [39.1495, 180.983],
  [39.1495, 177.232],
  [39.4371, 176.734],
  [46.3435, 172.747],
  [46.6308, 172.67],
  [46.9176, 172.749],
  [53.7189, 176.732],
];
const RIGHT: Pt[] = [
  [49.2004, 180.63],
  [63.4791, 172.505],
  [63.763, 172.673],
  [63.7186, 175.831],
  [63.7139, 176.495],
  [63.7139, 180.555],
  [63.4253, 181.051],
  [56.5746, 184.949],
  [56.2865, 185.024],
  [55.9995, 184.945],
  [49.1983, 180.961],
];

function shapeFrom(points: Pt[], cx: number, cy: number) {
  const s = 0.14;
  const shape = new Shape();
  points.forEach(([x, y], i) => {
    const px = (x - cx) * s;
    const py = (cy - y) * s;
    if (i === 0) shape.moveTo(px, py);
    else shape.lineTo(px, py);
  });
  shape.closePath();
  return shape;
}

/** Camera distance per container width — mirrored by the poster's CSS scale. */
export const cameraDistance = (width: number) => (width < 640 ? 7.5 : width < 1024 ? 6.25 : 5);

export interface LogoOptions {
  /** Render a single still frame (used to produce the poster). */
  still?: boolean;
  /** The explode effect is driven from outside (scroll) instead of toggled by a click. */
  driven?: boolean;
}

export function mountLogo(container: HTMLElement, options: LogoOptions = {}) {
  const width = () => container.clientWidth || window.innerWidth;
  const height = () => container.clientHeight || window.innerHeight;

  const scene = new Scene();
  const camera = new PerspectiveCamera(50, width() / height(), 0.1, 1000);
  camera.position.set(0, 0, cameraDistance(width()));

  const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: options.still });
  renderer.setSize(width(), height());
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.domElement.classList.add('logo-canvas');
  container.appendChild(renderer.domElement);

  const material = new MeshStandardMaterial({
    color: 0x000000,
    metalness: 0.95,
    roughness: 0.1,
    envMapIntensity: 1.5,
    side: DoubleSide,
  });

  // Gradient environment for the metallic reflections.
  const pmrem = new PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  const envScene = new Scene();
  const envGeometry = new SphereGeometry(100, 32, 32);
  envScene.add(
    new Mesh(
      envGeometry,
      new ShaderMaterial({
        side: BackSide,
        uniforms: { topColor: { value: new Color(0xffffff) }, bottomColor: { value: new Color(0x333333) } },
        vertexShader: `varying vec3 vWorldPosition;
          void main() {
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,
        fragmentShader: `uniform vec3 topColor; uniform vec3 bottomColor; varying vec3 vWorldPosition;
          void main() {
            float h = normalize(vWorldPosition).y;
            gl_FragColor = vec4(mix(bottomColor, topColor, max(h, 0.0)), 1.0);
          }`,
      }),
    ),
  );
  const envMap = pmrem.fromScene(envScene).texture;
  scene.environment = envMap;
  material.envMap = envMap;

  const extrude = { depth: 0.4, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelOffset: 0, bevelSegments: 4 };
  const leftGeometry = new ExtrudeGeometry(shapeFrom(LEFT, 46.5, 178.9), extrude);
  const rightGeometry = new ExtrudeGeometry(shapeFrom(RIGHT, 56.5, 178.75), extrude);
  const leftMesh = new Mesh(leftGeometry, material);
  const rightMesh = new Mesh(rightGeometry, material);
  const leftBase = new Vector3(-0.7, 0.25, 0);
  const rightBase = new Vector3(0.7, -0.25, 0);
  leftMesh.position.copy(leftBase);
  rightMesh.position.copy(rightBase);

  const logo = new Group();
  logo.add(leftMesh, rightMesh);
  logo.scale.setScalar(0.7);
  scene.add(logo);

  scene.add(new AmbientLight(0xffffff, 0.5));
  const key = new DirectionalLight(0xffffff, 1);
  key.position.set(5, 5, 5);
  const fill = new DirectionalLight(0xffffff, 0.5);
  fill.position.set(-5, -5, 5);
  const rim = new DirectionalLight(0xffffff, 0.3);
  rim.position.set(0, 0, -5);
  scene.add(key, fill, rim);

  if (options.still) {
    renderer.render(scene, camera);
    return { canvas: renderer.domElement, explode: () => {}, destroy: () => renderer.dispose() };
  }

  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.minPolarAngle = Math.PI / 4;
  controls.maxPolarAngle = (Math.PI * 3) / 4;
  if (coarse) {
    // Touch: keep page scrolling; a tap still toggles the effect.
    controls.enabled = false;
    renderer.domElement.style.touchAction = 'auto';
  }

  const explodeDistance = () => (width() < 640 ? 1.2 : width() < 1024 ? 1.6 : 2);
  const leftDir = new Vector3(-1, 0.6, 0).normalize();
  const rightDir = new Vector3(1, -0.6, 0).normalize();
  const leftOut = new Vector3();
  const rightOut = new Vector3();
  let distance = explodeDistance();
  let exploded = false;
  let progress = 0;
  // Scroll-driven mode: `target` is set from outside and the meshes ease towards it.
  let target = 0;
  let floatTime = 0;
  let dragging = false;
  let downAt = 0;

  let last = 0;
  let frame = 0;
  let running = false;

  const tick = () => {
    frame = requestAnimationFrame(tick);
    const now = performance.now();
    const delta = Math.min((now - last) / 1000, 0.1);
    last = now;
    floatTime += delta * 1.5;
    if (options.driven) progress += (target - progress) * Math.min(1, delta * 10);
    else progress = exploded ? Math.min(progress + delta * 0.4, 1) : Math.max(progress - delta * 0.4, 0);
    const separation = 1 - Math.pow(1 - progress, 2);
    const spin = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    leftMesh.position.lerpVectors(leftBase, leftOut.copy(leftBase).addScaledVector(leftDir, distance), separation);
    rightMesh.position.lerpVectors(rightBase, rightOut.copy(rightBase).addScaledVector(rightDir, distance), separation);
    leftMesh.rotation.set(0, spin * Math.PI * 2, 0);
    rightMesh.rotation.set(0, -spin * Math.PI * 2, 0);
    logo.position.y = Math.sin(floatTime) * 0.12;
    if (!dragging) logo.rotation.y += delta * 0.2;
    controls.update();
    renderer.render(scene, camera);
  };
  const start = () => {
    if (running) return;
    running = true;
    last = performance.now();
    tick();
  };
  const stop = () => {
    running = false;
    cancelAnimationFrame(frame);
  };

  const onDown = () => {
    dragging = false;
    downAt = performance.now();
  };
  const onMove = () => {
    if (downAt && performance.now() - downAt > 100) dragging = true;
  };
  const onUp = () => {
    if (!options.driven && performance.now() - downAt < 200) exploded = !exploded;
    dragging = false;
    downAt = 0;
  };
  renderer.domElement.addEventListener('pointerdown', onDown);
  renderer.domElement.addEventListener('pointermove', onMove);
  renderer.domElement.addEventListener('pointerup', onUp);

  const onResize = () => {
    camera.aspect = width() / height();
    camera.position.setLength(cameraDistance(width()));
    camera.updateProjectionMatrix();
    renderer.setSize(width(), height());
    distance = explodeDistance();
  };
  const resizeObserver = new ResizeObserver(onResize);
  resizeObserver.observe(container);

  // Pause when off-screen or in a background tab.
  let visible = true;
  const sync = () => (visible && !document.hidden ? start() : stop());
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  });
  io.observe(container);
  document.addEventListener('visibilitychange', sync);

  start();

  return {
    canvas: renderer.domElement,
    /** 0 = assembled, 1 = fully apart. Only meaningful with `driven`. */
    explode(value: number) {
      target = Math.min(1, Math.max(0, value));
    },
    destroy() {
      stop();
      io.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', sync);
      controls.dispose();
      leftGeometry.dispose();
      rightGeometry.dispose();
      envGeometry.dispose();
      material.dispose();
      envMap.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
