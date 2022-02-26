
import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from '../data/productos';





describe('Pruebas en el <ProductTitle/>', () => {
    test('Debe de mostrar el titulo del producto', () => {
        const wrapper = renderer.create(<ProductTitle title="Producto 1" />);
        //console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();

});

test('Debe de mostrar el titulo del producto', () => {

    const wrapper = renderer.create(
    <ProductCard product={product1} >
        {
            () => (
                <ProductTitle  />
            )
        }
    </ProductCard>);
    //console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();



});




});
