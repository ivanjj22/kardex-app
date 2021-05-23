import React from "react";
import { Link } from 'react-router-dom'
import useFetch from 'use-http'
import url from '../../config'
import { ProductRow } from "../../components/products/ProductRow";
import { Loading } from "../../components/ui/Loading";


export const ProductsList = () => {

  const { loading, data: {data} = [] } = useFetch(`${url}/products`, {
    cachePolicy: 'no-cache'
  }, [])

  if (!data) return null;

  if(loading) return <Loading/>

  return (
    <div className="overflow-x-auto">

      <Link to="/products/new" className="btn btn-success mt-2 mb-2 text-white">
          New
      </Link>

      <table className="shadow-lg bg-white w-full">
        <thead>
          <tr>
            <th className="bg-blue-100 border text-left px-8 py-4"></th>
            <th className="bg-blue-100 border text-left px-8 py-4">Product</th>
            <th className="bg-blue-100 border text-left px-8 py-4">Description</th>
            <th className="bg-blue-100 border text-left px-8 py-4">
              Price
            </th>
            <th className="bg-blue-100 border text-left px-8 py-4">
              
            </th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((product, index) => (
              <ProductRow key={product.id} index={index+1} product={product}/>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
