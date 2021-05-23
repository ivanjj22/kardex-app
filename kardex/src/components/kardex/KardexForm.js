import React from "react";
import { useForm } from "../../hooks/useForm";
import url from "../../config";
import { useParams } from "react-router-dom";

export const KardexForm = ({ onInsertKardex}) => {
  let { id } = useParams();

  const [form, onChange, resetForm] = useForm({
    date: "",
    type: "",
    units: "",
    units_price: "",
    product_id: id,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!form.date || !form.type || !form.units || !form.units_price) {
      return false;
    }
    
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      };
      await fetch(`${url}/movements`, config);
      onInsertKardex();
      resetForm();
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <form className="w-full mt-5 mb-5" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="date"
          >
            Fecha
          </label>
          <input
            className="dateInput appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="date"
            type="date"
            placeholder="Date"
            onChange={onChange}
            value={form.date}
          />
        </div>
        <div className="w-full md:w-1/5 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="type"
          >
            Tipo
          </label>
          <select
            className="typeInput appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="type"
            type="text"
            placeholder="Tipo"
            onChange={onChange}
            value={form.type}
          >
            <option value="">Seleccione</option>
            <option value="init">Inventario inicial</option>
            <option value="purchase">Compra</option>
            <option value="selling">Venta</option>
          </select>
        </div>
        <div className="w-full md:w-1/5 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="units"
          >
            Cantidad
          </label>
          <input
            className="unitsInput appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="units"
            type="number"
            placeholder="Cantidad"
            onChange={onChange}
            value={form.units}
            min="1"
          />
        </div>
        <div className="w-full md:w-1/5 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="units_price"
          >
            Valor unitario
          </label>
          <input
            className="UnitsPriceInput appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="units_price"
            type="number"
            placeholder="Valor unitario"
            onChange={onChange}
            value={form.units_price}
            min="1"
          />
        </div>
        <div className="w-full md:w-1/5 px-3 my-auto">
          <button className="btn btn-sm btn-success text-white">Guardar</button>
          <button className="btn btn-sm btn-error mx-2 text-white">
            Limpiar
          </button>
        </div>
      </div>
    </form>
  );
};
