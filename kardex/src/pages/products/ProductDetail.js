import React, {useState} from "react";
import { Link } from 'react-router-dom'
import { useParams, Redirect } from "react-router-dom";
import useFetch from 'use-http'
import url from '../../config'
import {KardexForm} from '../../components/kardex/KardexForm'
import { KardexTable } from "../../components/kardex/KardexTable";
import { Loading } from "../../components/ui/Loading";


export const ProductDetail = () => {
  let { id } = useParams();

  const { data: { data:product } = {}, loading } = useFetch(`${url}/products/${id}`, {
    cachePolicy: 'no-cache'
  }, []);

  const [current, setCurrent] = useState(0);

  const onInsertKardex = () => {
    setCurrent(current+1);
  }

  if(loading) return <Loading/>

  if ( !product ) {
    return <Redirect to="/" />;
  }

  return (
    <>
        <div className="flex product-detail">
            <div className="flex-1 ">
                <div className="card text-center shadow-2xl">
                    <figure className="max-w-screen-lg mx-auto pb-3">
                        <img alt="Producto" style={{width: 50 + '%'}} src={product.img} className="w-12 rounded-xl mx-auto"/>
                    </figure> 
                    <div className="card-body">
                        <h2 className="card-title">{product.name}</h2> 
                        <p>{product.description}</p> 
                        <div className="justify-center card-actions">
                        <Link to={`/products/${id}/edit`} className="btn btn-outline btn-accent">Edit</Link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>

        <div className="flex mt-5 ">
            <div className="flex-1">
                <h3 className="text-center text-3xl">Kardex</h3>

                <KardexForm onInsertKardex={onInsertKardex}/>
                
                

            </div>
        </div>

        <div className="flex mb-5">
            <div className="flex-1">
                
                <KardexTable current={current}/>

            </div>
        </div>

    </>
  );


};
