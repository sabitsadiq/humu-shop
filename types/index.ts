import { MouseEventHandler } from "react";
export interface customButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  //   handleClick(): void;
}
export interface allCategoriesProps {
  id?: number;
  img?: string;
  title?: string;
  desc?: string;
  formerCost?: string;
  currentCost?: string;
  btnText?: string;
}
export interface ourShopCategoriesProps {
  id: number;
  img: string;
  desc: string;
}
