import mongoose from "mongoose";

const toolSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true },
    shortDescription: String,
    fullDescription: String,
    category: String,
    tags: [String],
    pricing: String,
    websiteUrl: String,
    isFeatured: { type: Boolean, default: false },
    isTrending: { type: Boolean, default: false },
    totalClicks: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Tool", toolSchema);
