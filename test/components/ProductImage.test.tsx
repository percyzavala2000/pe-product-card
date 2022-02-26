
import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';
import { product1, product2 } from '../data/productos';

describe('Pruebas en <ProductImage/>', () => {

    test('Debe de mostrar la imagen personalizada del producto', () => {

        const wrapper = renderer.create(
          <ProductCard product={product1} >
              {
                    () => (
                        <ProductImage img={'hola'} />
                        )
                }
          </ProductCard> );
                    
       // console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen del producto', () => {

    const wrapper=renderer.create(
    <ProductCard product={product2} >
            {
                () => (
                    <ProductImage img={product2.img} />
            )  
           }
    </ProductCard>);

    expect(wrapper.toJSON()).toMatchSnapshot();

    });

});
