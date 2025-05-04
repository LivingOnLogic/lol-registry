import React from 'react';

export default function MCPCard({ mcp }) {
  return (
    <div className="border p-4 rounded bg-white shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{mcp.id}</h3>
      <p className="text-sm text-gray-500">Chain: {mcp.chain}</p>
      <p className="text-sm text-gray-500">Tags: {mcp.tags.join(', ')}</p>
      <p className="text-sm text-gray-500">Score: {mcp.score}</p>
      <a href={mcp.docs} className="text-blue-600 underline mt-2 block">Docs</a>
    </div>
  );
}