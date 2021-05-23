import React from 'react'
import { ProductForm } from '../../components/products/ProductForm'

export const ProductNew = ({form, onChange, onSubmit}) => {
    return (
        <div>
            <ProductForm
            onChange={onChange}
            onSubmit={onSubmit}
            form={form}
            />
        </div>
    )
}
