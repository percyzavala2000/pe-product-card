import React, {createContext} from 'react';
import {useProduct} from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/product.interfaces';
import styles from '../styles/styles.module.css';
/* import { ProductImage } from './ProductImage';
import { ProdcutTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons'; */


export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;


export const ProductCard = ({children, product,className,style,onChange,value,initialValues} : ProductCardProps) => {
    const {counter, increaseBy,maxCount,isMaxCountReached,reset} = useProduct({onChange, product,value,initialValues});
   
    return (
        <Provider
            value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div className={`${styles.productCard} ${className}`} style={style} >
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount:initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset

                })}  

                {/* <ProductImage img={product.img} />
            <ProdcutTitle title={product.title} />
        <ProductButtons counter={counter} increaseBy={increaseBy} /> */}

            </div>
        </Provider>
    )
}

/* ProductCard.Title = ProdcutTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons; */
