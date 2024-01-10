import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    name: { type: String },
    description: { type: String },
    phone: { type: Number },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    role: {
      type: String,
      default: "user",
    },
    profileType: [
      {
        type: String,
        default: "Seller",
      },
    ],
    profileImage: { url: String },
    skillset: [{ skill: String, experienceLevel: String }],
    facebookLink: { url: String },
    googleLink: { url: String },
    xLink: { url: String },
    discordLink: { url: String },
    country: { type: String },
    timeZone: { type: String },
    languages: [{ language: String, languageLevel: String }],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
