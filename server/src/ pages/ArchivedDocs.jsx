import React, { useEffect, useState, useContext } from 'react';
import { getArchivedDocs } from '../services/docService';
import { AuthContext } from '../context/AuthContext';

const ArchivedDocs = () => {
  const [docs, setDocs] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchArchived = async () => {
      try {
        const data = await getArchivedDocs(user._id);
        setDocs(data);
      } catch (err) {
        console.error('Failed to fetch archived documents:', err);
      }
    };

    if (user) fetchArchived();
  }, [user]);

  return (
    <div className="p-8 bg-gradient-to-br from-purple-100 to-purple-300 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Archived Documents</h1>

      {docs.length > 0 ? (
        <ul className="space-y-4">
          {docs.map((doc) => (
            <li key={doc._id} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">{doc.title || 'Untitled Document'}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Last updated: {new Date(doc.updatedAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 dark:text-gray-300">No archived documents found.</p>
      )}
    </div>
  );
};

export default ArchivedDocs;
