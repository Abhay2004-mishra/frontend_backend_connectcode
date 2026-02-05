import mongoose from "mongoose";

const clickSchema = new mongoose.Schema(
  {
    toolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tool",
    },
    ipAddress: String,
    userAgent: String,
  },
  { timestamps: true }
);

export default mongoose.model("Click", clickSchema);
