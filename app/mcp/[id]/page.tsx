export default function MCPDetails({ params }) {
  return (
    <div>
      <h2 className="text-xl font-bold">Module: {params.id}</h2>
      {/* Future: Load more info here */}
    </div>
  );
}