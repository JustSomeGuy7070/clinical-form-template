import Header from "./Header";
import InvoiceTable from "./InvoiceTable";
import StampBlock from "./StampBlock";

export default function InvoicePage({ stampImage, setStampImage }) {
  return (
    <div id="invoice-container" className="page-container">
      <Header />

      <h2 className="page-title">INVOICE TEMPLATE</h2>

      <div className="invoice-top-section">
        <div className="invoice-patient-fields">
          <div className="field-row date-row">
            <label>DATE:</label>

            <input id="invoice-date" />

            <button
              type="button"
              className="today-button"
              onClick={() => {
                const today = new Date();

                const day = String(today.getDate()).padStart(2, "0");
                const month = String(today.getMonth() + 1).padStart(2, "0");
                const year = today.getFullYear();

                document.getElementById(
                  "invoice-date"
                ).value = `${day}- ${month}- ${year}`;
              }}
            >
              Today
            </button>
          </div>

          <div className="field-row">
            <label>PATIENT NAME:</label>
            <input />
          </div>

          <div className="field-row">
            <label>ACCOUNT NUMBER:</label>
            <input />
          </div>

          <div className="field-row">
            <label>AUTHORISATION:</label>
            <input />
          </div>

          <div className="field-row">
            <label>TIME:</label>
            <input />
          </div>

          <div className="field-row">
            <label>ICD 10 CODES:</label>
            <input />
          </div>
        </div>

        <StampBlock stampImage={stampImage} setStampImage={setStampImage} />
      </div>

      <div className="invoice-procedure-section">
        <label>PROCEDURE:</label>
        <textarea rows="4" />
      </div>

      <InvoiceTable />
    </div>
  );
} 
