export default function ToolCard({ tool }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg">
      <h3 className="text-xl font-bold">{tool.name}</h3>
      <p className="text-sm text-gray-600">
        {tool.shortDescription}
      </p>

      <a
        href={`http://localhost:5000/api/click/${tool._id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 bg-black text-white px-4 py-2 rounded"
      >
        Visit Tool
      </a>
    </div>
  );
}
