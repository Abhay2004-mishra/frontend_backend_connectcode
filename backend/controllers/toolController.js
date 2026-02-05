import Tool from "../models/Tool.js";

export const getTools = async (req, res) => {
  const tools = await Tool.find().sort({ createdAt: -1 });
  res.json(tools);
};

export const getToolBySlug = async (req, res) => {
  const tool = await Tool.findOne({ slug: req.params.slug });
  if (!tool) {
    return res.status(404).json({ message: "Tool not found" });
  }
  res.json(tool);
};

export const createTool = async (req, res) => {
  const tool = await Tool.create(req.body);
  res.status(201).json(tool);
};
