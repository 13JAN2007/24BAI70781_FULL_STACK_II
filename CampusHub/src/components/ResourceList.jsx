import React from 'react';
import { ResourceCard } from './ResourceCard';

export const ResourceList = ({ resources, onDelete }) => {
  if (resources.length === 0) return <p>No resources available.</p>;

  return (
    <div className="grid">
      {resources.map((res) => (
        <ResourceCard key={res.id} resource={res} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ResourceList;