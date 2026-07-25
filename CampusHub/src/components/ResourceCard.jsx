import React from 'react';

export const ResourceCard = ({ resource, onDelete }) => {
  return (
    <div className="card">
      <h3>{resource.title}</h3>
      <p>Category: <strong>{resource.category}</strong></p>
      <a href={resource.url} target="_blank" rel="noreferrer" style={{ color: '#3498db' }}>Open Resource</a>
      <br /><br />
      <button className="btn btn-danger" onClick={() => onDelete(resource.id)}>Remove</button>
    </div>
  );
};