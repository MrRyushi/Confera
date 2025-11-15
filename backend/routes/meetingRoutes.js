import express from "express";
import Meeting from "../models/Meetings.js";

const router = express.Router();

// Create meeting
router.post("/", async (req, res) => {
    try {
        const meeting = await Meeting.create(req.body);
        res.json(meeting);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all meetings
router.get("/", async (req, res) => {
    const meetings = await Meeting.find();
    res.json(meetings);
});

// Get a single meeting
router.get("/:id", async (req, res) => {
    try {
        const meeting = await Meeting.findById(req.params.id);
        if (!meeting) return res.status(404).json({ error: "Not found" });
        res.json(meeting);
    } catch {
        res.status(400).json({ error: "Invalid ID" });
    }      
});

// Update meeting
router.put("/:id", async (req, res) => {
    try {
        const meeting = await Meeting.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(meeting);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete meeting
router.delete("/:id", async (req, res) => {
    try {
        await Meeting.findByIdAndDelete(req.params.id);
        res.json({ message: "Meeting deleted" });
    }
    catch {
        res.status(400).json({ error: "Invalid ID" });
    }   
});

export default router;