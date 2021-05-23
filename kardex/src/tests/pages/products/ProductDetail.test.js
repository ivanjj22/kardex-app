import React from 'react';
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom';
import { ProductDetail } from '../../../pages/products/ProductDetail';

describe('Pruebas en <ProductDetail />', () => {

    const history = {
        length: 10,
        push: jest.fn(),
    }


    test('debe de llamar el redirect si el producto no existe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/products/nothing']}>
                <Route 
                    path="/products/:id" 
                    component={ () => <ProductDetail history={ history } /> }
                />
            </MemoryRouter>
        );
        
        expect( wrapper.text() ).toBe('');
    })
    

    
})
