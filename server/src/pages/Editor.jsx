import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocById, updateDoc } from '../services/docService';

const EditorPage = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    document.title = 'Editor | Astique';
    fetchDocument();
  }, []);

  const fetchDocument = async () => {
    const doc = await getDocById(id);
    if (doc) {
      setTitle(doc.title);
      setContent(doc.content);
    }
  };

  const handleSave = async () => {
    await updateDoc(id, { title, content });
    alert('Document saved');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-6">
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-2xl font-semibold p-2 border-b border-gray-300 focus:outline-none"
          placeholder="Document Title"
        />
      </div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full h-[70vh] p-4 border border-gray-300 rounded-md focus:outline-none resize-none"
        placeholder="Start typing your content here..."
      />
      <button
        onClick={handleSave}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Save
      </button>
    </div>
  );
};

export default EditorPage;
