import React, { CSSProperties, HTMLAttributes, useCallback, useContext } from "react";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export interface ButtonProps{
    className?:string;
    style?: HTMLAttributes<HTMLElement>| CSSProperties,
   
}
export const ProductButtons = ({className,style}:ButtonProps) => {
    
    const {counter,increaseBy,maxCount}=useContext(ProductContext);

   const isMaxReaChed = useCallback(() => {
        return  !!maxCount && counter===maxCount;
        
      },[counter,maxCount]);
  
      console.log(isMaxReaChed());
      

 
  // true si el count===maxCount
  // false si no lo es
    return (

        <div className={`${styles.buttonsContainer} ${className}`} style={style} >
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)} >-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={`${styles.buttonAdd} ${ isMaxReaChed()&&styles.disabled}`} onClick={() => increaseBy(+ 1)}>
                +
            </button>
        </div>

    )
}