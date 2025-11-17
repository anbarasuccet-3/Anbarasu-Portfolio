import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.js';

const PdfViewer = ({ pdfUrl }) => {
  const [error, setError] = useState(false);

  const handleClick = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', maxHeight: '400px', overflow: 'hidden', cursor: 'pointer' }} onClick={handleClick}>
      {error ? (
        <div>Failed to load PDF</div>
      ) : (
        <Document file={pdfUrl} onLoadError={() => setError(true)}>
          <Page pageNumber={1} scale={0.5} />
        </Document>
      )}
    </div>
  );
};

export default PdfViewer;
