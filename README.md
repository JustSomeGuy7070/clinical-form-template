# 🏥 Clinical Forms Template Demo

A frontend medical document template app built with React, Vite, and Cropper.js.

The project lets users fill out printable clinical referral and invoice forms, upload stamp/signature images, crop stamp images, and calculate invoice totals.

This is a sanitized portfolio demo. All client names, contact details, registration numbers, tariff codes, and signatures have been replaced with sample data.

---

## 🚀 Live Demo

Coming soon.

---

## 📌 Features

- Switch between referral and invoice templates
- Fill in patient and medical aid information
- Save referral form data locally using localStorage
- Upload stamp images from file or camera
- Crop, rotate, flip, and process stamp images before use
- Upload signature images from file or camera
- Add invoice quantities and amounts
- Automatically calculate the invoice total
- Clear all saved form data
- Print-ready A4 document layout
- Demo practice profile stored in a reusable data file

---

## 🛠️ Tech Stack

- React
- Vite
- Cropper.js
- React Cropper
- HTML5
- CSS3
- JavaScript
- localStorage

---

## ⚙️ How It Works

- The app uses React components to render a referral form and invoice template
- The toolbar switches between the two document templates
- Referral form data is saved in localStorage so it stays available after refresh
- Stamp and signature uploads use file inputs with optional camera capture
- Cropper.js lets users crop and adjust stamp images before placing them on the form
- Invoice rows are loaded from sample data and amounts are added together for the total
- CSS print rules hide editing controls and format the document for printing
- Practice details are stored in `src/data/practiceProfile.js` so the header can be reused or customized

---

## 🧰 Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local app in your browser:

```text
http://localhost:5173
```

4. Build for production:

```bash
npm run build
```

5. Preview the production build:

```bash
npm run preview
```

---

## 💡 What I Learned

- Creating printable document layouts with CSS
- Managing form state with React and localStorage
- Handling image uploads in the browser
- Integrating Cropper.js into a React workflow
- Building reusable data-driven components
- Separating client-specific details from reusable template data
- Preparing a real-world client app as a safe portfolio demo

---

## 👨‍💻 Author

Built as part of my self-taught full-stack development journey.
