export default function TopToolbar({
  activeTemplate,
  setActiveTemplate,
  onClear,
}) {
  const handlePrint = () => {
    const restorePrintState = () => {
      document.body.classList.remove("is-printing");
    };

    document.body.classList.add("is-printing");
    window.addEventListener("afterprint", restorePrintState, { once: true });
    window.print();
  };

  const handleClear = () => {
    localStorage.removeItem("referralForm");
    localStorage.removeItem("invoiceRows");
    localStorage.removeItem("stampImage");
    onClear();

    window.dispatchEvent(new Event("storageReset"));

    document.querySelectorAll("input, textarea").forEach((field) => {
      field.value = "";
    });
  };

  return (
    <div className="top-toolbar">
      <div className="demo-banner">
        Portfolio Demo - sample medical form template
      </div>

      <div className="template-buttons">
        <button
          className={
            activeTemplate === "referral" ? "active" : ""
          }
          onClick={() => setActiveTemplate("referral")}
        >
          Referral Template
        </button>

        <button
          className={
            activeTemplate === "invoice" ? "active" : ""
          }
          onClick={() => setActiveTemplate("invoice")}
        >
          Invoice Template
        </button>
      </div>

      <div className="action-buttons">
        <button onClick={handlePrint}>Print</button>
        <button onClick={handleClear}>Clear All</button>
      </div>
    </div>
  );
}
