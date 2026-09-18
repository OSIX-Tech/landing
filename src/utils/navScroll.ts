// One place for "does this nav link scroll, or navigate?".
//
// The header, the mobile menu and the hero each carried their own copy of this
// decision plus a byte-identical scroll animation. That cost us the same bug
// twice: prevent the default so a menu can close or a scroll can animate, then
// find nothing to scroll to, and the click does nothing at all. Anything that
// intercepts a nav click should go through resolveNavTarget and navigate when it
// comes back null.

const HEADER_ID = 'main-header';

export const NAV_SCROLL_DURATION = 2000;

/**
 * The element a nav href points at on the current page, or null when the click
 * belongs to the browser: the href carries no hash (a plain page link such as
 * /casos/), or its section lives on another page.
 */
export function resolveNavTarget(href: string | null | undefined): HTMLElement | null {
  if (!href) return null;
  const hash = href.match(/#(.+)$/);
  if (!hash) return null;
  return document.getElementById(hash[1]);
}

/**
 * Scroll position that leaves the target clear of the fixed header. The hero
 * goes to the very top, since the header hides itself over it.
 */
export function navTargetTop(target: HTMLElement, adjust = 0): number {
  if (target.id === 'hero') return 0;
  const header = document.getElementById(HEADER_ID);
  const headerHeight = header ? header.offsetHeight : 0;
  return target.getBoundingClientRect().top + window.scrollY - headerHeight - adjust;
}

export function smoothScrollTo(targetPosition: number, duration: number = NAV_SCROLL_DURATION): void {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const easeInOutCubic = (t: number) =>
    (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const step = (now: number) => {
    if (startTime === null) startTime = now;
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
    if (elapsed < duration) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

/**
 * Scroll to the section a href points at.
 * Returns false when there is nothing to scroll to here, which means the caller
 * must let the link navigate instead.
 */
export function scrollToNavTarget(
  href: string | null | undefined,
  adjust = 0,
  duration: number = NAV_SCROLL_DURATION
): boolean {
  const target = resolveNavTarget(href);
  if (!target) return false;
  smoothScrollTo(navTargetTop(target, adjust), duration);
  return true;
}
