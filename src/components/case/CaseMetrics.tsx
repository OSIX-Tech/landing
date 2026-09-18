import { useEffect, useRef, useState } from 'react';

interface Metric {
  label: string;
  value: string;
  /** Where the figure comes from — rendered small, under the label. */
  note?: string;
}

interface CaseMetricsProps {
  stats: Metric[];
  /** Section eyebrow rendered above the metric row. */
  label?: string;
  /** Muted variant for the secondary figures on a light background. */
  variant?: 'primary' | 'secondary';
}

interface ParsedMetric {
  prefix: string;
  suffix: string;
  target: number;
  decimals: number;
  groupSep: string;
  decSep: string;
}

const DURATION = 1400;

/**
 * Case stats are hand-written strings, not numbers: "95%+", "+2.500", "~10 h/sem",
 * "45,000+", but also "Google y Apple" or "2D + 3D". Pull the first numeric run out
 * so it can be counted up, keep whatever wraps it verbatim, and return null for the
 * values that are pure text — those just fade in.
 */
function parseMetric(value: string): ParsedMetric | null {
  const match = value.match(/\d[\d.,]*\d|\d/);
  if (!match || match.index === undefined) return null;

  const raw = match[0];
  const prefix = value.slice(0, match.index);
  const suffix = value.slice(match.index + raw.length);

  // "45.000" / "45,000" — thousands grouping, not a decimal point.
  if (/^\d{1,3}([.,]\d{3})+$/.test(raw)) {
    const groupSep = raw.includes('.') ? '.' : ',';
    return {
      prefix,
      suffix,
      target: parseInt(raw.replace(/[.,]/g, ''), 10),
      decimals: 0,
      groupSep,
      decSep: groupSep === '.' ? ',' : '.',
    };
  }

  // "1.5" / "1,5" — a genuine decimal.
  const decimal = raw.match(/^(\d+)([.,])(\d{1,2})$/);
  if (decimal) {
    return {
      prefix,
      suffix,
      target: parseFloat(`${decimal[1]}.${decimal[3]}`),
      decimals: decimal[3].length,
      groupSep: '',
      decSep: decimal[2],
    };
  }

  return {
    prefix,
    suffix,
    target: parseInt(raw.replace(/[.,]/g, ''), 10),
    decimals: 0,
    groupSep: '',
    decSep: '.',
  };
}

function format(n: number, p: ParsedMetric): string {
  const fixed = p.decimals > 0 ? n.toFixed(p.decimals) : String(Math.round(n));
  const [intPart, decPart] = fixed.split('.');
  const grouped = p.groupSep
    ? intPart.replace(/\B(?=(\d{3})+(?!\d))/g, p.groupSep)
    : intPart;
  return decPart ? `${grouped}${p.decSep}${decPart}` : grouped;
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function CaseMetrics({ stats, label, variant = 'primary' }: CaseMetricsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const parsed = useRef(stats.map(s => parseMetric(s.value)));
  const [display, setDisplay] = useState<string[]>(() =>
    stats.map((s, i) => {
      const p = parsed.current[i];
      return p ? `${p.prefix}${format(0, p)}${p.suffix}` : s.value;
    })
  );
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const settle = () => {
      setRevealed(true);
      setDisplay(stats.map(s => s.value));
    };

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;

    const run = () => {
      setRevealed(true);
      if (reduceMotion) {
        settle();
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / DURATION, 1);
        const eased = easeOutExpo(t);
        setDisplay(
          stats.map((s, i) => {
            const p = parsed.current[i];
            if (!p) return s.value;
            return `${p.prefix}${format(p.target * eased, p)}${p.suffix}`;
          })
        );
        if (t < 1) frame = requestAnimationFrame(tick);
        else settle();
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [stats]);

  return (
    <div
      className={`case-metrics case-metrics-${variant} ${revealed ? 'is-revealed' : ''}`}
      ref={containerRef}
    >
      {label && <span className="case-metrics-label">{label}</span>}
      {/* Within a <dl>, <dt> must precede its <dd>; CSS order puts the value on top. */}
      <dl className="case-metrics-row">
        {stats.map((stat, i) => (
          <div className="case-metric" key={`${stat.label}-${i}`} style={{ '--i': i } as React.CSSProperties}>
            <dt className="case-metric-label">{stat.label}</dt>
            <dd className="case-metric-value">{display[i]}</dd>
            {stat.note && variant === 'secondary' && (
              <span className="case-metric-note">{stat.note}</span>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}

export default CaseMetrics;
