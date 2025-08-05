export type MyButtonProps = {
  href: string;
  children: React.ReactNode;
  className: string; 
};
export type UserMenuProps = {
  options: DropdownProps[];
  selected: string;
  onSelect: (value: string) => void;
}