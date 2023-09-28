"use client";
import Card from "@/components/Card";
import { homeData } from "@/constant/data";
import { allCategoriesProps } from "@/types";
import {
  ReactNode,
  ChangeEvent,
  createContext,
  useContext,
  useState,
} from "react";

interface contextProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleReset: (event: any) => void;
  FilteredData: (homeData: string, selected: any) => void;
  handleClick: (event: ChangeEvent<HTMLInputElement>) => void;
  cartItem: Record<string, number>;
  addToCart: (itemId: any) => void;
  removeFromCart?: (itemId: any) => void;
  itemId?: string | null;
  openFilter: boolean;
  setOpenFilter: any;
  cart: allCategoriesProps[];
  homeData: any;
  result: allCategoriesProps[];
  handleAddToCart: (id: allCategoriesProps) => void;
}
// let filteredProducts = homeData;

const getCart = () => {
  let cart: Record<string, number> = {};
  for (let i = 0; i < homeData.length + 1; i++) {
    cart[i.toString()] = 0;
  }
  return cart;
};
const appDefaultValue: contextProps = {
  handleReset: () => {},
  handleClick: (event: ChangeEvent<HTMLInputElement>) => {},
  cartItem: getCart(),
  openFilter: true || false,
  addToCart: () => {},
  removeFromCart: () => {},
  FilteredData: () => {},
  handleChange: (event: ChangeEvent<HTMLInputElement>) => {},
  setOpenFilter: true || false,
  result: [],
  itemId: null,
  cart: [],
  handleAddToCart: () => {},
  homeData: [],
};
export const GlobalContext = createContext<contextProps>(appDefaultValue);

export const GlobalState = ({ children }: { children: ReactNode }) => {
  const [cartItem, setCartItem] = useState<Record<string, number>>(getCart());
  const [cart, setCart] = useState<any>([]);

  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<any>(null);
  //  const [cartItem, setCartItem] = useState<any>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategories(event.target.value);
    setOpenFilter(false);
  };
  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategories(event.target.value);
    setOpenFilter(false);
  };

  const handleReset = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategories(null); // Clear the filter by setting selectedCategories to null
  };
  const FilteredData = (homeData: any, selected: any) => {
    let filteredProducts = homeData.slice();
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color }: allCategoriesProps) => {
          return category === selected || color === selected;
        }
      );
    }
    return filteredProducts;
  };

  const result = FilteredData(homeData, selectedCategories);

  const handleAddToCart = (result: any) => {
    const productExit = cart.find((item: any) => item.id === result.id);
    if (productExit) {
      setCart(
        cart.map((item: any) =>
          item.id === result.id
            ? { ...productExit, quantity: productExit.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...result, quantity: 1 }]);
    }
  };

  // cart logic
  const addToCart = (itemId: string) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId: any) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  // console.log(cartItem);
  // filtering logic
  // console.log(handleAddToCart);
  const value = {
    removeFromCart,
    cartItem,
    addToCart,
    result,
    handleChange,
    handleClick,
    handleReset,
    openFilter,
    FilteredData,
    setOpenFilter,
    cart,
    handleAddToCart,
    homeData,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
