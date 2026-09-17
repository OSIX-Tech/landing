import type { CaseSection } from '../../data/case-studies';

interface CaseNarrativeStackProps {
  sections: CaseSection[];
  ctaTitle: string;
  ctaBody: string[];
  ctaLabel: string;
  ctaHref: string;
}

export default function CaseNarrativeStack(props: CaseNarrativeStackProps): any;
