import { useRef, useState } from "react";

export default function SignatureCapture({ label }) {
  const [image, setImage] = useState(null);

  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);

    // Allows selecting the same file again later
    event.target.value = "";
  };

  const openFilePicker = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      fileInputRef.current.click();
    }
  };

  const openCamera = () => {
    if (cameraInputRef.current) {
      cameraInputRef.current.value = "";
      cameraInputRef.current.click();
    }
  };

  const removeImage = () => {
    setImage(null);

    if (fileInputRef.current) fileInputRef.current.value = "";
    if (cameraInputRef.current) cameraInputRef.current.value = "";
  };

  return (
    <div className="signature-wrapper">
      <div className="signature-image-area">
        {image && (
          <img
            src={image}
            alt="Signature"
            className="signature-image"
          />
        )}
      </div>

      <div className="signature-controls print-hide">
        <button type="button" onClick={openFilePicker}>
          Upload
        </button>

        <button type="button" onClick={openCamera}>
          Photo
        </button>

        {image && (
          <button type="button" onClick={removeImage}>
            Remove
          </button>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleImageChange}
      />

      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        hidden
        onChange={handleImageChange}
      />

      <div className="signature-box">{label}</div>
    </div>
  );
}