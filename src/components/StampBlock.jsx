import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import Cropper from "react-cropper";

export default function StampBlock({ stampImage, setStampImage }) {
  const [imageToEdit, setImageToEdit] = useState(null);
  const [stampAdjustments, setStampAdjustments] = useState({
    brightness: 115,
    contrast: 135,
    grayscale: 100,
    saturation: 100,
  });
  const [flipX, setFlipX] = useState(1);
  const [flipY, setFlipY] = useState(1);

  const cropperRef = useRef(null);
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    resetAdjustments();
    setFlipX(1);
    setFlipY(1);
    setImageToEdit(URL.createObjectURL(file));
    event.target.value = "";
  };

  const stampFilter = [
    `brightness(${stampAdjustments.brightness}%)`,
    `contrast(${stampAdjustments.contrast}%)`,
    `grayscale(${stampAdjustments.grayscale}%)`,
    `saturate(${stampAdjustments.saturation}%)`,
  ].join(" ");

  const updateAdjustment = (name, value) => {
    setStampAdjustments((currentAdjustments) => ({
      ...currentAdjustments,
      [name]: Number(value),
    }));
  };

  function resetAdjustments() {
    setStampAdjustments({
      brightness: 115,
      contrast: 135,
      grayscale: 100,
      saturation: 100,
    });
  }

  const processStampCanvas = (sourceCanvas) => {
    const canvas = document.createElement("canvas");
    canvas.width = sourceCanvas.width;
    canvas.height = sourceCanvas.height;

    const context = canvas.getContext("2d");
    context.filter = stampFilter;
    context.drawImage(sourceCanvas, 0, 0);
    return canvas;
  };

  const useCroppedImage = () => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;

    const canvas = cropper.getCroppedCanvas({
      width: 2400,
      height: 960,
      fillColor: "#fff",
      imageSmoothingEnabled: true,
      imageSmoothingQuality: "high",
    });

    setStampImage(processStampCanvas(canvas).toDataURL("image/png"));
    setImageToEdit(null);
  };

  const updateCropper = (action) => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;

    action(cropper);
  };

  const flipCropperX = () => {
    const nextFlipX = flipX * -1;
    setFlipX(nextFlipX);
    updateCropper((cropper) => cropper.scaleX(nextFlipX));
  };

  const flipCropperY = () => {
    const nextFlipY = flipY * -1;
    setFlipY(nextFlipY);
    updateCropper((cropper) => cropper.scaleY(nextFlipY));
  };

  const resetCropper = () => {
    setFlipX(1);
    setFlipY(1);
    updateCropper((cropper) => cropper.reset());
  };

  const openFilePicker = () => {
    fileInputRef.current.value = "";
    fileInputRef.current.click();
  };

  const openCamera = () => {
    cameraInputRef.current.value = "";
    cameraInputRef.current.click();
  };

  const removeImage = () => {
    setStampImage(null);
    setImageToEdit(null);
  };

  return (
    <div className="stamp-area">
      <div className="stamp-block">
        {stampImage ? (
          <>
            <img src={stampImage} alt="Stamp preview" />
            <button
              type="button"
              className="stamp-remove print-hide"
              onClick={removeImage}
              aria-label="Remove stamp image"
              title="Remove stamp image"
            >
              X
            </button>
          </>
        ) : (
          <span>STAMP HERE</span>
        )}
      </div>

      <div className="stamp-controls print-hide">
        <button type="button" onClick={openFilePicker}>
          Upload
        </button>

        <button type="button" onClick={openCamera}>
          Photo
        </button>

        {stampImage && (
          <button type="button" onClick={removeImage}>
            Remove
          </button>
        )}
      </div>

      {imageToEdit &&
        createPortal(
          <div className="stamp-editor-backdrop print-hide">
            <div className="stamp-editor-panel">
              <h3>Crop Stamp Image</h3>

              <div className="stamp-editor-tools">
                <button type="button" onClick={() => updateCropper((cropper) => cropper.zoom(0.1))}>
                  Zoom In
                </button>
                <button type="button" onClick={() => updateCropper((cropper) => cropper.zoom(-0.1))}>
                  Zoom Out
                </button>
                <button type="button" onClick={() => updateCropper((cropper) => cropper.rotate(-90))}>
                  Rotate Left
                </button>
                <button type="button" onClick={() => updateCropper((cropper) => cropper.rotate(90))}>
                  Rotate Right
                </button>
                <button type="button" onClick={flipCropperX}>
                  Flip X
                </button>
                <button type="button" onClick={flipCropperY}>
                  Flip Y
                </button>
                <button type="button" onClick={resetCropper}>
                  Reset
                </button>
              </div>

              <div
                className="cropper-wrapper"
                style={{ "--stamp-filter": stampFilter }}
              >
                <Cropper
                  src={imageToEdit}
                  style={{ height: "100%", width: "100%" }}
                  aspectRatio={NaN}
                  guides={true}
                  viewMode={1}
                  dragMode="move"
                  background={false}
                  responsive={true}
                  autoCropArea={0.8}
                  cropBoxMovable={true}
                  cropBoxResizable={true}
                  checkOrientation={false}
                  ref={cropperRef}
                />
              </div>

              <div className="stamp-processing-tools">
                <div className="stamp-processing-header">
                  <span>Live Processing</span>
                  <button type="button" onClick={resetAdjustments}>
                    Reset Processing
                  </button>
                </div>

                <label>
                  Brightness
                  <input
                    type="range"
                    min="0"
                    max="300"
                    value={stampAdjustments.brightness}
                    onChange={(event) =>
                      updateAdjustment("brightness", event.target.value)
                    }
                  />
                  <output>{stampAdjustments.brightness}%</output>
                </label>

                <label>
                  Contrast
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={stampAdjustments.contrast}
                    onChange={(event) =>
                      updateAdjustment("contrast", event.target.value)
                    }
                  />
                  <output>{stampAdjustments.contrast}%</output>
                </label>

                <label>
                  Grayscale
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={stampAdjustments.grayscale}
                    onChange={(event) =>
                      updateAdjustment("grayscale", event.target.value)
                    }
                  />
                  <output>{stampAdjustments.grayscale}%</output>
                </label>

                <label>
                  Saturation
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={stampAdjustments.saturation}
                    onChange={(event) =>
                      updateAdjustment("saturation", event.target.value)
                    }
                  />
                  <output>{stampAdjustments.saturation}%</output>
                </label>
              </div>

              <div className="cropper-actions">
                <button type="button" onClick={useCroppedImage}>
                  Use Image
                </button>

                <button type="button" onClick={() => setImageToEdit(null)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

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
    </div>
  );
}
