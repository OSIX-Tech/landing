// Inline Markdown for short frontmatter strings (FAQ answers, notes): **bold** and
// [links](url) only. Everything else is escaped.
const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function inlineMd(text: string): string {
  return escape(text)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label: string, href: string) => {
      const external = /^https?:\/\//.test(href) && !href.startsWith('https://osix.tech');
      return `<a href="${href}"${external ? ' rel="noopener"' : ''}>${label}</a>`;
    });
}

/** Paragraphs separated by blank lines → <p> elements. */
export const blockMd = (text: string) =>
  text
    .split(/\n\s*\n/)
    .map((p) => `<p>${inlineMd(p.trim())}</p>`)
    .join('');
