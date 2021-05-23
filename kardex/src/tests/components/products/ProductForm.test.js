import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { ProductForm } from '../../../components/products/ProductForm';

describe('Pruebas en <ProductForm />', () => {

    test('debe de mostrarse correctamente', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/products/new']}>
                <Route 
                    path="/products/new" 
                    component={ () => <ProductForm form={{}} /> } 
                />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();

    })

    test('debe de hacer submit', () => {

        const history = {
            push: jest.fn()
        };
        const onChange = jest.fn();
        const onSubmit = jest.fn();

        const wrapper = mount(
            <MemoryRouter initialEntries={['/products/new']}>
                <Route 
                    path="/products/new" 
                    component={ () => <ProductForm history={ history } onSubmit={onSubmit} onChange={onChange} form={{}} /> } 
                />
            </MemoryRouter>
        );
        
        wrapper.find('.nameInput').simulate('change', {
            target: {
                name: 'name',
                value: 'Product test'
            }
        });

        wrapper.find('.imageInput').simulate('change', {
            target: {
                name: 'img',
                value: 'example.com'
            }
        });

        wrapper.find('.priceInput').simulate('change', {
            target: {
                name: 'price',
                value: '1000'
            }
        });

        wrapper.find('.descriptionInput').simulate('change', {
            target: {
                name: 'description',
                value: 'Description'
            }
        });
        

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });
        

        expect(onSubmit).toHaveBeenCalledTimes(1);
    })
    

    

    
})
