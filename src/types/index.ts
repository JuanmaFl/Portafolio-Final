export interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image?: string;
  github?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
