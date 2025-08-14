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

export type Token = {
  id : number;
  token_name : string;
  token_price : number;
  token_daily_growth: number;
  token_amount : number;
}

export interface TokenItemProps{
  token : Token
}

export type CheckButtonProps = {};