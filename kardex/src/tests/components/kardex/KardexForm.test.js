import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { KardexForm } from '../../../components/kardex/KardexForm';
import { act} from '@testing-library/react'

describe('Pruebas en <KardexForm />', () => {

    test('debe de mostrarse correctamente', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/products/a775c47c-9961-41db-8275-3ae9dfbg0e04']}>
                <Route 
                    path="/products/:id" 
                    component={ () => <KardexForm form={{}} /> } 
                />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();

    })

    test('debe de hacer submit al formulario', async () => {

        const onInsertKardex = jest.fn();

        const wrapper = mount(
            <MemoryRouter initialEntries={['/products/a775c47c-9961-41db-8275-3ae9dfbg0e04']}>
                <Route 
                    path="/products/:id" 
                    component={ () => <KardexForm onInsertKardex={onInsertKardex} /> } 
                />
            </MemoryRouter>
        );
        
        wrapper.find('.dateInput').simulate('change', {
            target: {
                name: 'date',
                value: '2021/05/23'
            }
        });

        wrapper.find('.typeInput').simulate('change', {
            target: {
                name: 'type',
                value: 'init'
            }
        });

        wrapper.find('.unitsInput').simulate('change', {
            target: {
                name: 'units',
                value: '1000'
            }
        });

        wrapper.find('.UnitsPriceInput').simulate('change', {
            target: {
                name: 'units_price',
                value: '8000'
            }
        });

        await act(async () => {
            await wrapper.find('form').props().onSubmit({ preventDefault: () => {} });
        });

        expect(onInsertKardex).toHaveBeenCalled();
    
    })

    
})
