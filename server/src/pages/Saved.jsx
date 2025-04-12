import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSavedDocs, deleteDoc, archiveDoc } from '../services/docService';

const SavedDocs = () => {
  const [savedDocs, setSavedDocs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Saved Documents | Astique';
    fetchSavedDocs();
  }, []);

  const fetchSavedDocs = async () => {
    const docs = await getSavedDocs();
    setSavedDocs(docs);
  };

  const handleDelete = async (id) => {
    await deleteDoc(id);
    fetchSavedDocs();
  };

  const handleArchive = async (id) => {
    await archiveDoc(id);
    fetchSavedDocs();
  };

  const handleOpen = (id) => {
    navigate(`/editor/${id}`);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Saved Documents</h2>

      {savedDocs.length === 0 ? (
        <p className="text-gray-600">No saved documents found.</p>
      ) : (
        <ul className="space-y-4">
          {savedDocs.map(doc => (
            <li
              key={doc._id}
              className="bg-white p-4 rounded shadow flex justify-between items-center"
            >
              <span className="font-medium cursor-pointer hover:underline" onClick={() => handleOpen(doc._id)}>
                {doc.title}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleArchive(doc._id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Archive
                </button>
                <button
                  onClick={() => handleDelete(doc._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedDocs;
