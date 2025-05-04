import MCPCard from '../components/MCPCard';
import FilterPanel from '../components/FilterPanel';
import { fetchRegistry } from '../lib/registry';
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchRegistry().then(setData);
  }, []);

  const filtered = data.filter((mcp) =>
    mcp.id.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">MCP Registry</h1>
      <FilterPanel filters={filter} onChange={setFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((mcp) => (
          <MCPCard key={mcp.id} mcp={mcp} />
        ))}
      </div>
    </div>
  );
}