export interface NavItem {
  path: string;
  element: React.ReactNode;
}

export interface NavProps {
  navItems: NavItem[];
}
