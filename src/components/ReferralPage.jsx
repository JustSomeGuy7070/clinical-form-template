import Header from "./Header";
import PatientInfoSection from "./PatientInfoSection";
import SignatureCapture from "./SignatureCapture";

export default function ReferralPage({ stampImage, setStampImage }) {
  return (
    <div id="form-container" className="page-container">
      <Header />

      <h2 className="page-title">
        REFERRAL FOR INTRAOPERATIVE FLUOROSCOPY
      </h2>

      <PatientInfoSection stampImage={stampImage} setStampImage={setStampImage} />

      <div className="member-details-section">
        <div className="member-column">
          <div className="field-row">
            <label>RESIDENTIAL ADDRESS:</label>
            <input />
          </div>

          <div className="field-row">
            <label>MAIN MEMBER NAME:</label>
            <input />
          </div>

          <div className="field-row">
            <label>MEDICAL AID:</label>
            <input />
          </div>

          <div className="field-row">
            <label>NEXT OF KIN NAME:</label>
            <input />
          </div>
        </div>

        <div className="member-column">
          <div className="field-row">
            <label>POSTAL ADDRESS:</label>
            <input />
          </div>

          <div className="field-row">
            <label>MAIN MEMBER ID NO:</label>
            <input />
          </div>

          <div className="field-row">
            <label>MEMBERSHIP NUMBER:</label>
            <input />
          </div>

          <div className="field-row">
            <label>CONTACT NUMBER:</label>
            <input />
          </div>
        </div>
      </div>

      <div className="procedure-section">
        <label>PROCEDURE</label>
        <textarea rows="6" />
      </div>

      <div className="icd-section">
        <div className="field-row">
          <label>ICD10 CODES</label>
          <input />
        </div>

        <div className="field-row">
          <label>TIME C-ARM TAKEN INTO THEATRE:</label>
          <input />
        </div>

        <div className="field-row">
          <label>TIME C-ARM TAKEN OUT OF THEATRE:</label>
          <input />
        </div>

        <div className="field-row">
          <label>FLUOROSCOPY TIME:</label>
          <input />
        </div>
      </div>

      <div className="signature-section">
        <SignatureCapture
          label="REQUESTING DOCTOR'S SIGNATURE"
        />

      <div className="signature-wrapper">
        <div className="radiographer-signature">
          Radiographer Name
        </div>

        <div className="signature-box">
          RADIOGRAPHER SIGNATURE
        </div>
      </div>
      </div>
    </div>
  );
}
