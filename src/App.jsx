import { useEffect, useState } from "react";
import TopToolbar from "./components/TopToolbar";
import ReferralPage from "./components/ReferralPage";
import InvoicePage from "./components/InvoicePage";
import "./styles/app.css";

function App() {
  const [activeTemplate, setActiveTemplate] = useState("referral");
  const [stampImage, setStampImage] = useState(() => {
    return localStorage.getItem("stampImage");
  });

  useEffect(() => {
    if (stampImage) {
      localStorage.setItem("stampImage", stampImage);
      return;
    }

    localStorage.removeItem("stampImage");
  }, [stampImage]);

  return (
    <div className="app-wrapper">
      <TopToolbar
        activeTemplate={activeTemplate}
        setActiveTemplate={setActiveTemplate}
        onClear={() => setStampImage(null)}
      />

      <div className="document-pages">
        <div
          className={`page-wrapper ${
            activeTemplate === "referral" ? "visible" : "hidden"
          }`}
        >
          <ReferralPage stampImage={stampImage} setStampImage={setStampImage} />
        </div>

        <div
          className={`page-wrapper ${
            activeTemplate === "invoice" ? "visible" : "hidden"
          }`}
        >
          <InvoicePage stampImage={stampImage} setStampImage={setStampImage} />
        </div>
      </div>
    </div>
  );
}

export default App;
