import { CSSProperties, HTMLAttributes, ReactElement } from "react";
import { TitleProps } from '../components/ProductTitle';
import { ImageProps } from '../components/ProductImage';
import { ButtonProps } from '../components/ProductButtons';

export interface ProductCardProps {
    product : Product,
    //children?: ReactElement | ReactElement[],
    children:(args:ProductCardHandlers) => ReactElement | ReactElement[]|JSX.Element,
    className?: string,
    style?: HTMLAttributes<HTMLElement>| CSSProperties,
    onChange?: (args:onChangeArgs) => void;
    value?: number;
    initialValues?:InitialValueProps;

}

export interface InitialValueProps  {
        count?: number,
        maxCount?:number
    };

export interface onChangeArgs {
    product:Product,
    count:number

}

export interface Product {
    id : string;
    title : string;
    img?: string;
}

/* interface ProductButtonProps {
    counter : number;
    increaseBy : (amount : number) => void;

} */
export interface  ProductContextProps {
    counter:number;
    increaseBy: (amount : number) => void;
    product:Product;
    maxCount?:number;
}

export interface ProductCardHOCProps {
    ({children,product}:ProductCardProps) : JSX.Element;
     Title: ({ title,className }:TitleProps) => JSX.Element;
    Image: ({ img,className }:ImageProps) => JSX.Element;
    Buttons: ({className}:ButtonProps) => JSX.Element;
    

}

export interface ProductInCard extends Product {
    count : number;
}

export interface ProductCardHandlers {
    count:number;
    isMaxCountReached:boolean;
    maxCount?:number;
    product:Product;
    increaseBy: (amount : number) => void;
    reset:() => void;


}
