export interface HeaderLink {
  key: string;
  label: string;
  href: string;
}

export const headerLinksConfig: HeaderLink[] = [
  {
    key: "shop",
    label: "Shop",
    href: "/shop",
  },
  {
    key: "papers",
    label: "Papers",
    href: "/papers",
  },
  {
    key: "about",
    label: "About",
    href: "/about",
  },
  {
    key: "blog",
    label: "Blog",
    href: "/blog",
  },
  {
    key: "contact",
    label: "Contact",
    href: "/contact",
  },
];
