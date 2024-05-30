export interface Document {
   "English": { title: string; text: string },
  [language: string]: { title: string; text: string }
}

export const getDocuments = async (): Promise<Document[]> => {
  return fetch('/api/documents').then(res => res.json());
};
