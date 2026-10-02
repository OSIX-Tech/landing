// Facts about OSIX that more than one page repeats: header, footer, contact page,
// structured data and llms.txt all read from here, so a change happens once.

export const SITE_URL = 'https://osix.tech';

export const org = {
  name: 'OSIX Tech',
  legalName: 'OSIX Tech Development SL',
  description:
    'Consultoría de IA y desarrollo de software a medida para pymes de Galicia y España: automatización, agentes de IA y software integrado con las herramientas que ya usa cada empresa.',
  email: 'info@osix.tech',
  phone: '+34 648 935 068',
  phoneHref: 'tel:+34648935068',
  whatsapp: 'https://wa.me/34648935068?text=Hola,%20me%20interesa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios',
  foundingDate: '2024',
  address: {
    street: 'Santiago del Estero, 2-4 1G',
    locality: 'Santiago de Compostela',
    region: 'Galicia',
    postalCode: '15702',
    country: 'ES',
  },
  geo: { latitude: 42.8782, longitude: -8.5448 },
  /** Google Maps: the Business Profile card (embed) and directions. */
  mapEmbed: 'https://maps.google.com/maps?q=OSIX+Tech%2C+Santiago+del+Estero+2-4%2C+15702+Santiago+de+Compostela&z=16&hl=es&output=embed',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=OSIX+Tech%2C+Santiago+del+Estero+2-4%2C+15702+Santiago+de+Compostela',
  sameAs: ['https://es.linkedin.com/company/osix-tech', 'https://github.com/OSIX-Tech'],
  linkedin: 'https://www.linkedin.com/company/osix-tech',
  github: 'https://github.com/OSIX-Tech',
  knowsAbout: [
    'Inteligencia artificial',
    'Consultoría de IA',
    'Consultoría de IA en Galicia',
    'Agentes de IA',
    'Automatización de procesos',
    'Automatización documental',
    'Transformación digital',
    'Desarrollo de software a medida',
  ],
} as const;

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Absolute URL for a site path. */
export const absolute = (path: string) => new URL(path, SITE_URL).toString();
