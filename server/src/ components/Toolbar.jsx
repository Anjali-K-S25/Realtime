import React from 'react';

const EditorToolbar = ({ onSave, onArchive, onDelete }) => {
  return (
    <div className="w-full flex justify-end gap-4 p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <button
        onClick={onSave}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
      >
        Save
      </button>
      <button
        onClick={onArchive}
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
      >
        Archive
      </button>
      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
};

export default EditorToolbar;
