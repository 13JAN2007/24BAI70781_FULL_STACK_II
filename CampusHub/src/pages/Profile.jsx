import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { POSTS_URL } from '../services/api';

export const Profile = ({ user }) => {
  const { data: posts, loading, error } = useFetch(POSTS_URL);

  return (
    <div>
      <h2>User Profile</h2>
      <div className="card">
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>

      <h3>Fetched Activity (External Posts using useFetch)</h3>
      {loading && <p>Loading posts...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <div className="grid">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};