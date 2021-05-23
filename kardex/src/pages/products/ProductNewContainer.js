import React, { useState, useEffect } from "react";
import { ProductNew }  from "./ProductNew";
import url from "../../config";
import { useForm } from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import useFetch from "use-http";

const ProductNewContainer = ({ history }) => {

  let { id } = useParams();

  const { get, post, put } = useFetch(`${url}`, {
    cachePolicy: 'no-cache'
  }, []);
  
  const [initialData, setInitialData] = useState({
    name: "",
    description: "",
    img: "",
    price: "",
    stock: 0
  });

  const [form, handleInputChange] = useForm(initialData, initialData);

  useEffect(() => {
    if (id) {
      loadItem();
    }
  }, [id]);

  const loadItem = async () => {
    const item = await get(`/products/${id}`);
    if (item.data) setInitialData(item.data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!form.name || form.description || form.img) {
      return false;
    }
    try {
      if (id) {
        await put(`/products/${id}`, form);
      } else {
        await post(`/products`, form);
      }
      history.push("/products");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductNew form={form} onChange={handleInputChange} onSubmit={handleSubmit} />
  );
};

export default ProductNewContainer;
