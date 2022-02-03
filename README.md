# PE-PRODUCT-CART

Esta es una aplicación para la gestión de un carrito de compras.

### Instalación

### Ejemplo
```
import ProductCard,{ProductImage,ProdcutTitle,ProductButtons} from 'pe-product-cart';
```
```
<ProductCard
                key={product.id}
                product={product}
                initialValues={{
                count: 4,
                maxCount: 10
            }}>
                {({reset,count,increaseBy,isMaxCountReached}) => {
                    return (
                        <Fragment>
                            <ProductImage />
                            <ProdcutTitle />
                            <ProductButtons/>
                        </Fragment>
                      )

                      }
              }
</ProductCard>
```