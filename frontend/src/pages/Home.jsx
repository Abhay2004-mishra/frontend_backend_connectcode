import { useEffect, useState } from "react";
import API from "../services/api";
import ToolCard from "../components/ToolCard";

export default function Home() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    API.get("/tools").then((res) => setTools(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Discover AI Tools
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool._id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
