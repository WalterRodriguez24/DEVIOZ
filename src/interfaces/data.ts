export interface DataI {
  navbar: Navbar;
  heros: Hero[];
  pages: Pages;
  footer: Footer[];

  // sections: Sections;
}

export interface Sections {
  navbar: Navbar;
  heros: Hero[];
  characteristics: Characteristics;
  pages: Pages;
  optimized: Optimized[];
  footer: Footer[];
}

export interface Characteristics {
  after_text: string;
  content: CharacteristicsContent[];
}

export interface CharacteristicsContent {
  icon_1?: string;
  quantity: string;
  text: string;
  icon_2?: string;
}

export interface Footer {
  title_1?: string;
  text?: string;
  title_2?: string;
  links?: Link[];
  title_3?: string;
  text_2?: string;
  title_4?: string;
}

export interface Link {
  name: string;
  link: string;
}

export interface Hero {
  hero_id: number;
  texts: Texts;
  image: string;
  video?: string;
}

export interface Texts {
  text_1: string;
  text_2?: string;
  text_3?: string;
  text_button: string;
}

export interface Navbar {
  logo: string;
  links: Link[];
}

export interface Optimized {
  title_1?: string;
  content: string;
  title_2?: string;
}

export interface Pages {
  sublinks: Sublink[];
  content: PagesContent[];
}

export interface PagesContent {
  image: string;
  title: string;
}

export interface Sublink {
  name: string;
  section: number;
}
