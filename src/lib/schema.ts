// schema.org JSON-LD. The Organization and WebSite nodes are emitted once per page by
// BaseLayout; page builders reference them by @id instead of repeating them.
import { org, ORG_ID, WEBSITE_ID, SITE_URL, absolute } from '../site';
import type { Faq } from './content';
import { plain } from './content';

export type JsonLd = Record<string, unknown>;

export function siteGraph(): JsonLd[] {
  return [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': ORG_ID,
      name: org.name,
      legalName: org.legalName,
      url: `${SITE_URL}/`,
      logo: absolute('/logo_w.png'),
      image: absolute('/og-image.png'),
      description: org.description,
      email: org.email,
      telephone: org.phone,
      foundingDate: org.foundingDate,
      address: {
        '@type': 'PostalAddress',
        streetAddress: org.address.street,
        addressLocality: org.address.locality,
        addressRegion: org.address.region,
        postalCode: org.address.postalCode,
        addressCountry: org.address.country,
      },
      geo: { '@type': 'GeoCoordinates', ...org.geo },
      areaServed: [
        { '@type': 'Country', name: 'España' },
        { '@type': 'AdministrativeArea', name: 'Galicia' },
      ],
      knowsAbout: org.knowsAbout,
      sameAs: org.sameAs,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: org.email,
        telephone: org.phone,
        availableLanguage: ['es', 'gl'],
        url: absolute('/contacto/'),
      },
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: org.name,
      url: `${SITE_URL}/`,
      inLanguage: 'es',
      publisher: { '@id': ORG_ID },
    },
  ];
}

export function breadcrumbs(items: { name: string; path: string }[]): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function faqPage(path: string, faqs: Faq[]): JsonLd | null {
  if (!faqs.length) return null;
  return {
    '@type': 'FAQPage',
    '@id': `${absolute(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: plain(f.question),
      acceptedAnswer: { '@type': 'Answer', text: plain(f.answer) },
    })),
  };
}

export const personId = (memberId: string) => `${absolute('/nosotros/')}#${memberId}`;

export function article(opts: {
  path: string;
  headline: string;
  description: string;
  published: string;
  modified: string;
  section?: string;
  authorId?: string;
  image?: string;
}): JsonLd {
  const url = absolute(opts.path);
  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: opts.headline,
    description: opts.description,
    url,
    mainEntityOfPage: url,
    inLanguage: 'es',
    datePublished: opts.published,
    dateModified: opts.modified,
    articleSection: opts.section,
    image: opts.image ?? absolute('/og-image.png'),
    author: opts.authorId ? { '@id': opts.authorId } : { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

export function webPage(opts: { path: string; name: string; description: string; type?: string; modified?: string }): JsonLd {
  const url = absolute(opts.path);
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    inLanguage: 'es',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    ...(opts.modified ? { dateModified: opts.modified } : {}),
  };
}
