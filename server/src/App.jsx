import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import EditorPage from './pages/EditorPage';
import SavedDocs from './pages/SavedDocs';
import DeletedDocs from './pages/DeletedDocs';
import About from './pages/About';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/editor/:id" element={
        <ProtectedRoute>
          <EditorPage />
        </ProtectedRoute>
      } />
      <Route path="/saved" element={
        <ProtectedRoute>
          <SavedDocs />
        </ProtectedRoute>
      } />
      <Route path="/deleted" element={
        <ProtectedRoute>
          <DeletedDocs />
        </ProtectedRoute>
      } />
      <Route path="/about" element={
        <ProtectedRoute>
          <About />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default App;
