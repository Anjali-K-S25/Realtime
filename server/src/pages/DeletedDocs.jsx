import React, { useEffect, useState } from 'react';
import { getDeletedDocs, restoreDoc, deleteDocPermanently } from '../services/docService';

const DeletedDocs = () => {
  const [deletedDocs, setDeletedDocs] = useState([]);

  useEffect(() => {
    document.title = 'Deleted Documents | Astique';
    fetchDeleted();
  }, []);

  const fetchDeleted = async () => {
    const docs = await getDeletedDocs();
    setDeletedDocs(docs);
  };

  const handleRestore = async (id) => {
    await restoreDoc(id);
    fetchDeleted();
  };

  const handlePermanentDelete = async (id) => {
    await deleteDocPermanently(id);
    fetchDeleted();
  };

  return (
    <div className="min-h-screen bg-red-50 p-6">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Deleted Documents</h2>

      {deletedDocs.length === 0 ? (
        <p className="text-gray-600">No deleted documents found.</p>
      ) : (
        <ul className="space-y-4">
          {deletedDocs.map(doc => (
            <li key={doc._id} className="bg-white p-4 rounded shadow flex justify-between items-center">
              <span className="font-medium">{doc.title}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleRestore(doc._id)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Restore
                </button>
                <button
                  onClick={() => handlePermanentDelete(doc._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete Permanently
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeletedDocs;
