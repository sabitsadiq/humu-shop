import { MouseEventHandler, ReactNode } from "react";
export interface customButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface allCategoriesProps {
  id: any;
  img?: string | any;
  title?: string | any;
  desc?: string;
  formerCost?: string;
  currentCost?: string;
  btnText?: string;
  color?: string | any;
  onAddToCart?: any;
  category?: string;
}
export interface ourShopCategoriesProps {
  id: number;
  img: string;
  desc: string;
}
export interface contextProps {
  children: ReactNode;
}
