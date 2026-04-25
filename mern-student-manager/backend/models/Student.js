const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [16, "Age must be at least 16"],
      max: [60, "Age must be under 60"],
    },
    // TODO (Task 2): Add your new fields here
    // course: { ... }
    // isActive: { ... }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
