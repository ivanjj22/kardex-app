import React, { useState, useEffect } from "react";
import { KardexRow } from "./KardexRow";
import url from "../../config";
import { useParams } from "react-router-dom";

export const KardexTable = ({ current }) => {
  const [data, setData] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    loadInitial();
  }, [current]);

  async function loadInitial() {
    fetch(`${url}/movements?product_id=${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data.data);
      })
      .catch(() => {});
  }

  if (!data) return null;

  return (
    <table className="shadow-lg bg-white w-full">
      <thead>
        <tr>
          <th className="bg-blue-100 border text-left px-8 py-4">Fecha</th>
          <th className="bg-blue-100 border text-left px-8 py-4">Detalle</th>
          <th className="bg-blue-100 border text-left px-8 py-4">
            <table style={{ textAlign: "center" }} width="100%">
              <tbody>
                <tr>
                  <td colSpan="3" className="titles">
                    Entradas
                  </td>
                </tr>
                <tr>
                  <td>Canti</td>
                  <td>Unit</td>
                  <td>Total</td>
                </tr>
              </tbody>
            </table>
          </th>
          <th className="bg-blue-100 border text-left px-8 py-4">
            <table style={{ textAlign: "center" }} width="100%">
              <tbody>
                <tr>
                  <td colSpan="3" className="titles">
                    Salidas
                  </td>
                </tr>
                <tr>
                  <td>Canti</td>
                  <td>Unit</td>
                  <td>Total</td>
                </tr>
              </tbody>
            </table>
          </th>
          <th className="bg-blue-100 border text-left px-8 py-4">
            <table style={{ textAlign: "center" }} width="100%">
              <tbody>
                <tr>
                  <td colSpan="3" className="titles">
                    Saldos
                  </td>
                </tr>
                <tr>
                  <td>Canti</td>
                  <td>Unit</td>
                  <td>Total</td>
                </tr>
              </tbody>
            </table>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((movement) => (
          <KardexRow key={movement.id} {...movement} />
        ))}
      </tbody>
    </table>
  );
};
