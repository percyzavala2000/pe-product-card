
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProdcutTitle } from './ProductTitle';
import { ProductCardHOCProps } from '../interfaces/product.interfaces';

export { ProductButtons } from './ProductButtons';
export { ProdcutTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';


export const ProductCard:ProductCardHOCProps=Object.assign(ProductCardHOC,{
    Title:ProdcutTitle,
    Image:ProductImage,
    Buttons:ProductButtons,

});


export default ProductCard;