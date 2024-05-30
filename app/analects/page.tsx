"use client";
import { useEffect, useRef, useState } from "react";
import { Document, getDocuments } from "./documents";
import ListDrawer from "./ListDrawer";
import { metadata } from "./documents";

export default function AnalectsPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [activeDocument, setActiveDocument] = useState<Document | null>();
  const [currentLanguage, setCurrentLanguage] = useState<string | null>();
  const [showDocuments, setShowDocuments] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  useEffect(() => {
    getDocuments().then((docs) => {
      console.log(docs);
      setDocuments(docs);
    });
  }, []);

  const handleDocumentClick = (documentTitle: string) => {
    const document = documents.find(doc => doc.English.title === documentTitle);
    setActiveDocument(document);
    setCurrentLanguage("English");
    setShowDocuments(false);
  };

  const handleLanguageClick = (language: string) => {
    setCurrentLanguage(language);
    setShowLanguages(false);
  };

  return (
    <div className="flex h-screen">
      <button
          className={`absolute hover:bg-gray-200 w-12 bottom-8 left-8 z-50 bg-white border-none rounded-full h-12 shadow-lg flex items-center justify-center cursor-pointer`}
          onClick={() => history.back()}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: "24px", height: "24px" }}
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </button>
      <ListDrawer
        items={documents.map((doc) => doc["English"].title)}
        isOpen={showDocuments}
        onClose={() => setShowDocuments(false)}
        onItemClick={handleDocumentClick}
        selectedItem={activeDocument?.English.title}
        title="Analects"
        side="left"
      />
      <div className="w-full py-16 px-8 md:py-8 flex flex-col overflow-scroll">
        {!activeDocument && <p className="w-full h-full flex items-center justify-center text-gray-700 italic">Select an analect</p>}
        <h1 className="text-center text-lg mt-8 font-bold">{(activeDocument && currentLanguage) ? activeDocument[currentLanguage]?.title : ""}</h1>
        {activeDocument && (
          <div className="text-center mb-8 mt-2">
            {metadata[activeDocument.English.title as keyof typeof metadata]?.source ? (
              <a
                href={metadata[activeDocument.English.title as keyof typeof metadata]?.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                {metadata[activeDocument.English.title as keyof typeof metadata]?.author}
              </a>
            ) : (
              <span className="text-gray-600">
                {metadata[activeDocument.English.title as keyof typeof metadata]?.author}
              </span>
            )}
          </div>
        )}
        <p style={{ whiteSpace: "pre-line" }} className="text-center">{(activeDocument && currentLanguage) ? activeDocument[currentLanguage]?.text : ""}</p>
      </div>
      <ListDrawer
        items={activeDocument ? Object.keys(activeDocument) : []}
        isOpen={showLanguages}
        onClose={() => setShowLanguages(false)}
        onItemClick={handleLanguageClick}
        selectedItem={currentLanguage}
        title="Languages"
        side="right" // Drawer on the right
      />
      <button
        className="rounded-full bg-gray-100 m-4 p-4 top-0 left-0 absolute md:hidden"
        onClick={() => setShowDocuments(!showDocuments)}
      >
        Analects
      </button>
      <button
        className="rounded-full md:hidden bg-gray-100 m-4 fixed top-0 right-0 p-4"
        onClick={() => setShowLanguages(!showLanguages)}
      >
        Languages
      </button>
    </div>
  );
}
