import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema(
  {
    audioURL: { type: String, required: true },
    transcript: { type: String, required: true },
    summary: { type: String, required: true },
    actionItems: { type: [String], required: true },
    meetingDate: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model("Meeting", meetingSchema);