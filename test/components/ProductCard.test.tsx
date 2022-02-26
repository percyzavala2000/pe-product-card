import  React, { Fragment } from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/productos';

describe('pruebas en <ProductCard/>', () => {

test('debe de mostrar el componente correctamente', () => {

    const wrapper=renderer.create(
        <ProductCard product={product1} >
            {
                ()=>(
                    <h1>Product card</h1>
                )
            }
        </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();


});
test('debe de incremetar el contador',()=>{
    const wrapper=renderer.create(
        <ProductCard product={product1} >
            {
                ({count,increaseBy})=>(
                    <Fragment>
                    <h1>Product card</h1>
                    <span>{count}</span>
                    <button onClick={()=>increaseBy(1)}>2+</button>
                    </Fragment>
                )
            }
        </ProductCard>
    );
    let tree:any = wrapper.toJSON();
  
    expect(wrapper.toJSON()).toMatchSnapshot();
    
    renderer.act(()=>{
        tree.children[2].props.onClick();

    })
    tree = wrapper.toJSON();
    expect(tree.children[1].children[0]).toBe('1');
    


});

});




