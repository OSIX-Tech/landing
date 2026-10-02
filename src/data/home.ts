// Home-page copy that is not a content collection. Guides, cases, services and the team
// on the home are read from src/content, so they update themselves.
import type { ImageMetadata } from 'astro';
import avte from '../assets/logos/avte.png';
import iciga from '../assets/logos/iciga.svg';
import igape from '../assets/logos/igape.png';
import ir from '../assets/logos/IR.png';
import shearn from '../assets/logos/shearn.webp';
import take from '../assets/logos/take.png';
import testsOposiciones from '../assets/logos/testsoposiciones.svg';
import proxectonos from '../assets/logos/proxectonos.png';
import roydisa from '../assets/logos/roydisa.png';
import academianos from '../assets/logos/academianos.png';
import indrops from '../assets/logos/indrops.png';

export const hero = {
  lines: ['Consultoría de IA', 'para pymes'],
  subtitle: 'Automatización y software a medida en Galicia.',
};

export const clients: { name: string; logo: ImageMetadata }[] = [
  { name: 'Roydisa', logo: roydisa },
  { name: 'ICIGA', logo: iciga },
  { name: 'IGAPE', logo: igape },
  { name: 'TAKE', logo: take },
  { name: 'Shearn', logo: shearn },
  { name: 'AVTE', logo: avte },
  { name: 'IR', logo: ir },
  { name: 'TestOposiciones', logo: testsOposiciones },
  { name: 'Proxectonos', logo: proxectonos },
  { name: 'Academianos', logo: academianos },
  { name: 'Indrops', logo: indrops },
];

export const faqs = [
  {
    question: '¿Qué hace OSIX Tech?',
    answer:
      'OSIX Tech es una consultoría de inteligencia artificial y desarrollo de software a medida con sede en Santiago de Compostela, Galicia. Construimos agentes inteligentes, automatizaciones con IA y soluciones digitales personalizadas para empresas.',
  },
  {
    question: '¿Qué servicios de IA ofrece OSIX Tech en Galicia?',
    answer:
      'Ofrecemos consultoría de IA, desarrollo de agentes inteligentes, automatización de procesos con inteligencia artificial, consultoría de transformación digital y apoyo con ayudas públicas cuando existe una convocatoria vigente que encaja.',
  },
  {
    question: '¿Cuánto cuesta una consultoría de IA?',
    answer:
      'La consulta inicial es gratuita. Visitamos tu empresa, analizamos tu operativa y te entregamos un informe con oportunidades concretas y estimación de ahorro en menos de una semana. La financiación pública depende de que haya una convocatoria abierta y de que el proyecto cumpla sus bases.',
  },
  {
    question: '¿Qué subvenciones hay para proyectos de IA en Galicia?',
    answer:
      'Antes de planificar una ayuda, comprueba el estado en la ficha oficial. La convocatoria IGAPE IA360 2026/2027 cerró el 17 de marzo de 2026; Red.es sitúa el fin del proyecto inicial KTED en marzo de 2026 y la ficha consultada no confirma una sucesora abierta. No presentamos esos programas como disponibles para nuevas solicitudes. Lo explicamos con detalle en la [guía de ayudas para implantar IA en Galicia](/guias/subvenciones-ia-pymes-galicia-2026/).',
  },
  {
    question: '¿En cuánto tiempo se entrega un proyecto de IA?',
    answer:
      'En proyectos de desarrollo a medida, entregamos una demo funcional en 2 semanas. El plazo total depende del alcance, las integraciones y las pruebas necesarias.',
  },
  {
    question: '¿Dónde está OSIX Tech?',
    answer:
      'Nuestra sede está en Santiago de Compostela, Galicia. Trabajamos con empresas de toda Galicia y España, combinando visitas presenciales con trabajo en remoto.',
  },
];
