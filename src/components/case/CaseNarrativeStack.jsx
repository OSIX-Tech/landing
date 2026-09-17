import { useEffect, useState } from 'react';
import ScrollStack, { ScrollStackItem } from '../ScrollStack.jsx';

/**
 * The narrative of a case study, stacked on scroll.
 *
 * Reuses the same ScrollStack engine as the home page service cards, so the
 * motion matches the rest of the site. ScrollStack pins every card except the
 * last, which scrolls up over the stack — so the closing CTA is always rendered
 * last and is never one of the narrative sections.
 */
export default function CaseNarrativeStack({
  sections = [],
  ctaTitle,
  ctaBody = [],
  ctaLabel,
  ctaHref,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <ScrollStack
      stackOffset={isMobile ? 8 : 12}
      scaleFactor={0.04}
      stackPosition={isMobile ? '12%' : '20%'}
      itemDistance={isMobile ? 40 : 80}
    >
      {sections.map((section, i) => (
        <ScrollStackItem key={section.title}>
          <article className="cns-card">
            <div className="cns-head">
              <span className="cns-index">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="cns-title">{section.title}</h2>
            </div>
            <div className="cns-body">
              {section.body.map((paragraph, p) => (
                <p key={p} className="cns-text">{paragraph}</p>
              ))}
            </div>
          </article>
        </ScrollStackItem>
      ))}

      <ScrollStackItem key="__cta">
        <div className="cns-cta">
          <div className="cns-cta-inner">
            <h2 className="cns-cta-title">{ctaTitle}</h2>
            {ctaBody.map((paragraph, p) => (
              <p key={p} className="cns-cta-text">{paragraph}</p>
            ))}
            <a href={ctaHref} className="btn-secondary btn-arrow">
              {ctaLabel}
              <svg className="btn-arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </ScrollStackItem>
    </ScrollStack>
  );
}
