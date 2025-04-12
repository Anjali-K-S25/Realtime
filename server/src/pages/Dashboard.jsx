import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Dashboard | Astique';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-semibold mb-4">Welcome, {user?.name || 'User'}</h1>
      <p className="mb-6 text-gray-700">Start collaborating or manage your documents.</p>

      <div className="flex gap-4 flex-wrap">
        <button
          onClick={() => navigate('/editor/new')}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded"
        >
          Create New Document
        </button>
        <button
          onClick={() => navigate('/saved')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          View Saved Documents
        </button>
        <button
          onClick={() => navigate('/deleted')}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          View Deleted Documents
        </button>
        <button
          onClick={() => navigate('/about')}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          About
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
