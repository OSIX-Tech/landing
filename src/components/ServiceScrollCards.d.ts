import type { ServiceData } from '../data/services-multilingual';
import type { CaseStudyData } from '../data/cases-multilingual';

interface ServiceScrollCardsProps {
  services: ServiceData[];
  casesByService: Record<string, CaseStudyData[]>;
  caseLogos: Record<string, string>;
  lang: string;
  ctaBadge: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaPills?: string[];
  ctaTrust: string;
  ctaButton: string;
  ctaSecondary: string;
  partnerLogos?: { src: string; alt: string }[];
}

export default function ServiceScrollCards(props: ServiceScrollCardsProps): JSX.Element;
