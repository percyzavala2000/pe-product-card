import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard,ProdcutTitle,ProductImage,ProductButtons } from '../.';


const product={
    id:'1',
    title:'Product Title',
}
const App = () => {
  return (
   <ProductCard
                product={product}
                initialValues={{
                count: 4,
                maxCount: 10
            }}>
                {({reset,count,increaseBy,isMaxCountReached}) => {
                    return (
                        <>
                            <ProductImage />
                            <ProdcutTitle />
                            <ProductButtons/>
                        </>
                      )

                      }
              }
</ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
