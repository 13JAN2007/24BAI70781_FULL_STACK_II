import React, { useState } from 'react';
import { ResourceList } from '../components/ResourceList';

export const Resources = ({ resources, setResources }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState('');
  
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title || !url) return;
    const newRes = { id: Date.now(), title, category: category || 'General', url };
    setResources([...resources, newRes]);
    setTitle(''); setCategory(''); setUrl('');
  };

  const handleDelete = (id) => {
    setResources(resources.filter((r) => r.id !== id));
  };

  const filteredResources = resources.filter((r) => {
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === 'ALL' || r.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div>
      <h2>Resource Library</h2>

      <div className="card">
        <h3>Add Resource</h3>
        <form onSubmit={handleAdd}>
          <input className="input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <input className="input" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
          <input className="input" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
          <button className="btn btn-success" type="submit">Add Resource</button>
        </form>
      </div>

      <div className="card" style={{ display: 'flex', gap: '10px' }}>
        <input className="input" placeholder="Search resources..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <input className="input" placeholder="Filter by category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} />
      </div>

      <ResourceList resources={filteredResources} onDelete={handleDelete} />
    </div>
  );
};