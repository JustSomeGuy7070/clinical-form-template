import { useEffect, useState } from "react";
import invoiceRows from "../data/InvoiceRows";

export default function InvoiceTable() {
  const [rows, setRows] = useState(() => {
    const saved = localStorage.getItem("invoiceRows");
    return saved
      ? JSON.parse(saved)
      : invoiceRows.map((row) => ({
          ...row,
          quantity: "",
          amount: "",
        }));
  });

  useEffect(() => {
  const resetRows = () => {
    setRows(
      invoiceRows.map((row) => ({
        ...row,
        quantity: "",
        amount: "",
      }))
    );
  };

  window.addEventListener("storageReset", resetRows);

  return () =>
    window.removeEventListener(
      "storageReset",
      resetRows
    );
  }, []);

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const totalAmount = rows.reduce(
    (sum, row) => sum + Number(row.amount || 0),
    0
  );

  return (
    <>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>TRANSACTION DESCRIPTION</th>
            <th>TARIFF</th>
            <th>%</th>
            <th>QUANTITY</th>
            <th>AMOUNT</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.description}</td>
              <td>{row.tariff}</td>
              <td>100 75 50 25</td>

              <td>
                <input
                  value={row.quantity}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "quantity",
                      e.target.value
                    )
                  }
                />
              </td>

              <td>
                <input
                  value={row.amount}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "amount",
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-section">
        <span>TOTAL AMOUNT:</span>
        <strong>{totalAmount.toFixed(2)}</strong>
      </div>
    </>
  );
}
