import React, { CSSProperties, HTMLAttributes, useContext } from "react";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export interface TitleProps {title?: string,className?:string,style?: HTMLAttributes<HTMLElement>| CSSProperties}


export const ProdcutTitle = ({title,className,style}:TitleProps ) => {

    const {product} = useContext(ProductContext);
    
    
    
    let titleToShow:string;
    if (title) {
        titleToShow = title;
    } else if (product.title) {
        titleToShow = product.title;
    } else {
        titleToShow = 'No Title';
    }

    return (
        <span className={`${styles.productDescription} ${className}`} style={style} >{titleToShow}</span>
    )

};