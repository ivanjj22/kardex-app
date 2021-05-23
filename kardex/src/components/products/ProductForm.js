import React from "react";

export const ProductForm = ({ onChange, onSubmit, form }) => {

  return (
    <form className="w-full" onSubmit={onSubmit}>

      <div className="flex flex-wrap -mx-3 ">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            className="nameInput appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="name"
            type="text"
            placeholder="Name"
            onChange={onChange}
            value={form.name}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="imageInput block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="img"
          >
            Imagen url
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="img"
            type="text"
            placeholder="Url"
            onChange={onChange}
            value={form.img}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full  px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="price"
          >
            Precio unitario
          </label>
          <input
            className="priceInput appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="price"
            type="number"
            placeholder="Precio"
            onChange={onChange}
            value={form.price}
          />
        </div>

        
        {form.id ? <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="price"
          >
            Stock
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="stock"
            type="number"
            placeholder="stock"
            onChange={onChange}
            value={form.stock}
            disabled={form.id}
          />
        </div>
        : null 
        }

      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="descriptionInput block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="description"
          >
            Descripcion
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="description"
            rows="5"
            placeholder="Type a description"
            onChange={onChange}
            value={form.description}
          ></textarea>
        </div>
      </div>
      

      <div className="text-center mt-4">
        <button type="submit" className="btn btn-success text-white">
          Save
        </button>
      </div>
    </form>
  );
};
