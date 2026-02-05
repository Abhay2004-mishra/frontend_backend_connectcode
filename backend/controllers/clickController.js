import Click from "../models/Click.js";
import Tool from "../models/Tool.js";

export const trackClick = async (req, res) => {
  const tool = await Tool.findById(req.params.id);
  if (!tool) {
    return res.status(404).json({ message: "Tool not found" });
  }

  await Click.create({
    toolId: tool._id,
    ipAddress: req.ip,
    userAgent: req.headers["user-agent"],
  });

  tool.totalClicks += 1;
  await tool.save();

  res.redirect(tool.websiteUrl);
};
