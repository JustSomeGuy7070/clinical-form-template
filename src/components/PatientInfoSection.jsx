import { useEffect, useState } from "react";
import StampBlock from "./StampBlock";

const initialFormData = {
  date: "",
  patientName: "",
  idNumber: "",
  authNo: "",
  dependantCode: "",
  contactNumber: "",
  email: "",
};

export default function PatientInfoSection({ stampImage, setStampImage }) {
  const [formData, setFormData] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("referralForm")) ||
      initialFormData
    );
  });

  useEffect(() => {
    localStorage.setItem(
      "referralForm",
      JSON.stringify(formData)
    );
  }, [formData]);

  useEffect(() => {
    const resetForm = () => {
      setFormData(initialFormData);
    };

    window.addEventListener("storageReset", resetForm);

    return () => {
      window.removeEventListener(
        "storageReset",
        resetForm
      );
    };
  }, []);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="patient-section">
      <div className="patient-fields">
        <div className="field-row date-row">
          <label>DATE:</label>
          <input
            value={formData.date}
            onChange={(e) =>
              handleChange("date", e.target.value)
            }
          />

          <button
            type="button"
            className="today-button"
            onClick={() => {
              const today = new Date();
              const day = String(today.getDate()).padStart(2, "0");
              const month = String(today.getMonth() + 1).padStart(2, "0");
              const year = today.getFullYear();

              handleChange("date", `${day}- ${month}- ${year}`);
            }}
          >
            Today
          </button>
        </div>

        <div className="field-row">
          <label>PATIENT NAME:</label>
          <input
            value={formData.patientName}
            onChange={(e) =>
              handleChange(
                "patientName",
                e.target.value
              )
            }
          />
        </div>

        <div className="field-row">
          <label>ID NUMBER:</label>
          <input
            value={formData.idNumber}
            onChange={(e) =>
              handleChange("idNumber", e.target.value)
            }
          />
        </div>

        <div className="field-row">
          <label>AUTHORISATION NO.:</label>
          <input
            value={formData.authNo}
            onChange={(e) =>
              handleChange("authNo", e.target.value)
            }
          />
        </div>

        <div className="field-row">
          <label>DEPENDANT CODE:</label>
          <input
            value={formData.dependantCode}
            onChange={(e) =>
              handleChange(
                "dependantCode",
                e.target.value
              )
            }
          />
        </div>

        <div className="field-row">
          <label>CELL/CONTACT NUMBER:</label>
          <input
            value={formData.contactNumber}
            onChange={(e) =>
              handleChange(
                "contactNumber",
                e.target.value
              )
            }
          />
        </div>

        <div className="field-row">
          <label>E-MAIL ADDRESS:</label>
          <input
            value={formData.email}
            onChange={(e) =>
              handleChange("email", e.target.value)
            }
          />
        </div>
      </div>

      <StampBlock stampImage={stampImage} setStampImage={setStampImage} />
    </div>
  );
}
