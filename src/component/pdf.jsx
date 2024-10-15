import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';  // For rendering PDF
import { pdfjs } from 'react-pdf';
import { PDFDocument, rgb } from 'pdf-lib';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Pdf = () => {
  const [pdfData, setPdfData] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  // Handling file upload
  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const arrayBuffer = reader.result;
      setPdfData(arrayBuffer);
      setPdfUrl(URL.createObjectURL(file));  // Creating a URL to display the uploaded PDF
    };
    reader.readAsArrayBuffer(file);
  };

  // Adding text to the PDF
  const addTextToPdf = async () => {
    if (!pdfData) return;
    
    const pdfDoc = await PDFDocument.load(pdfData);  // Load the uploaded PDF
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Adding text to the first page of the PDF
    firstPage.drawText('Hello World!', {
      x: 50,
      y: 700,
      size: 30,
      color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();  // Save the edited PDF
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    setPdfUrl(pdfUrl);  // Set the new URL for the edited PDF
  };

  return (
    <div>
      <input type="file" onChange={handlePdfUpload} />
      {pdfUrl && (
        <div style={{ height: '600px', width: '100%' }}>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
            <Viewer fileUrl={pdfUrl} />
          </Worker>
        </div>
      )}
      {pdfData && (
        <button onClick={addTextToPdf} style={{ marginTop: '10px' }}>
          Add Text to PDF
        </button>
      )}
    </div>
  );
};

export default Pdf;
