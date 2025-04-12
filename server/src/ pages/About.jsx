import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const About = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-8 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-4">About Astique</h1>
      <p className="mb-6 max-w-3xl leading-relaxed">
        Astique is a real-time document collaboration tool built with the MERN stack.
        It allows users to create, edit, save, archive, and delete documents seamlessly,
        with a beautiful UI powered by Tailwind CSS.
      </p>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-xl">
        <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
        {user ? (
          <ul className="space-y-2">
            <li><strong>Name:</strong> {user.name}</li>
            <li><strong>Email:</strong> {user.email}</li>
            <li><strong>User ID:</strong> {user._id}</li>
          </ul>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">You are not logged in.</p>
        )}
      </div>
    </div>
  );
};

export default About;
