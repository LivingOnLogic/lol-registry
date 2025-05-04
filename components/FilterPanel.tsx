import React from 'react';

export default function FilterPanel({ filters, onChange }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search MCP..."
        className="border p-2 w-full"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}