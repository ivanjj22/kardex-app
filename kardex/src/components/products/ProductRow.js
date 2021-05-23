import React from 'react'

import {
    Link
} from "react-router-dom";

export const ProductRow = ({product, index}) => {
    return (
        <tr key={product.id}>
            <th className="border px-8 py-4">{index}</th>
            <td className="border px-8 py-4">

                <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                    <img src={product.img} alt="Avatar Tailwind CSS Component"/>
                    </div>
                </div> 
                <div>
                    <div className="font-bold">
                        {product.name}
                        </div> 
                    <div className="text-sm opacity-50">
                        
                    </div>
                </div>
                </div>

            </td>
            <td className="border px-8 py-4">{product.description}</td>
            <td className="border px-8 py-4">{product.price}</td>
            <td className="border px-8 py-4 ">
                <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-center cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </Link>
            </td>
        </tr>
    )
}
