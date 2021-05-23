import React from "react";

export const KardexRow = ({ id, date, detail, data_in, data_out, balance }) => {
  return (
    <tr key={id}>
      <th className="border px-8 py-4">{date}</th>
      <td className="border px-8 py-4">{detail}</td>
      <td className="border px-8 py-4">
        <table style={{ textAlign: "center" }} width="100%">
          <tbody>
            <tr>
              <td>{data_in.units}</td>
              <td>{data_in.units_price}</td>
              <td>{data_in.total}</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td className="border px-8 py-4">
        <table style={{ textAlign: "center" }} width="100%">
          <tbody>
            <tr>
              <td>{data_out.units}</td>
              <td>{data_out.units_price}</td>
              <td>{data_out.total}</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td className="border px-8 py-4 ">
        <table style={{ textAlign: "center" }} width="100%">
          <tbody>
            <tr>
              <td>{balance.units}</td>
              <td>{balance.units_price}</td>
              <td>{balance.total}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
};
