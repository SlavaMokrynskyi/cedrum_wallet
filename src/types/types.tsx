export type MyButtonProps = {
  href: string;
  children: React.ReactNode;
  className: string; 
};
export interface CurrencyOption {
  code: string;
  name: string;
}
export interface LanguageOption {
  code: string;
  name: string;
  
}
export type Balance = {
  amount: number;
  currency: string;
};
export interface InputWithStateProps {
  placeholder?: string;
}
