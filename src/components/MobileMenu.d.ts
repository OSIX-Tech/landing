interface MobileMenuItem {
  label: string;
  link: string;
  children?: { label: string; link: string }[];
}

interface MobileMenuProps {
  lang: string;
  items?: MobileMenuItem[];
  socialItems?: { label: string; link: string }[];
  langOptions?: { code: string; label: string; href: string }[];
}

export default function MobileMenu(props: MobileMenuProps): JSX.Element;
