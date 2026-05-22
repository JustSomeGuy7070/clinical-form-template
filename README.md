# Clinical Forms Template Demo

A portfolio-ready React demo for printable clinical document templates. The app includes a referral form and invoice template with local form persistence, stamp/signature image upload, image cropping, print styling, and demo-only practice details.

This project is a sanitized template version of a real-world workflow app. All business identity, contact details, registration numbers, tariff codes, and signature content have been replaced with sample data.

## Features

- Switch between referral and invoice templates
- Print-ready A4 document layouts
- Local form persistence with `localStorage`
- Stamp and signature upload from file or camera
- Stamp crop/edit workflow using Cropper.js
- Invoice line items with editable quantities and amounts
- Automatic invoice total calculation
- Clear-all action for saved form data
- Demo practice profile stored in a reusable data file

## Tech Stack

- React
- Vite
- Cropper.js / React Cropper
- CSS print media rules
- localStorage

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
src/
  components/        React components for the toolbar, forms, invoice, stamp, and signatures
  data/              Demo practice profile and sample invoice rows
  styles/            App and print styling
  utils/             Small localStorage helpers
```

## Portfolio Notes

This demo is intended to show practical frontend work for business document workflows: print layout, image handling, persistent form state, and reusable data-driven UI. It is not connected to a backend and does not store or transmit medical data.
