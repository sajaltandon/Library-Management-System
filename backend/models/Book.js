import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
      unique: true,  // Make bookName unique to avoid duplicates
    },
    alternateTitle: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: "",
    },
    publisher: {
      type: String,
      default: "",
    },
    bookCountAvailable: {
      type: Number,
      required: true,
      min: 0,  // Ensure the book count is never negative
    },
    bookStatus: {
      type: String,
      default: "Available",
      enum: ["Available", "Checked Out", "Reserved"], // Restrict status to predefined options
    },
    categories: [
      {
        type: mongoose.Types.ObjectId,
        ref: "BookCategory",
      },
    ],
    transactions: [
      {
        type: mongoose.Types.ObjectId,
        ref: "BookTransaction",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Book", BookSchema);
