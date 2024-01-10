import mongoose, { Schema } from "mongoose";

const automationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
    skills: [
      {
        skill: {
          type: String,
        },
        skillLevel: {
          type: String,
        },
      },
    ],
    tags: [{ type: String, default: "All" }],
    categories: [{ type: String, default: "All" }],
    feeType: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    tools: [
      {
        type: {
          id: Schema.ObjectId,
          name: String,
          image: {
            url: String,
          },
        },
      },
    ],
    deliveryTime: {
      type: String,
      required: true,
    },
    maxRevisions: {
      type: String,
      required: true,
    },
    servicesIncluded: [
      {
        type: String,
      },
    ],
    featuredImage: {
      url: String,
    },
    images: [{ url: String }],
    video: [{ url: String }],
    reviews: [{ body: String, date: Date }],
    user: {
      type: {
        id: Schema.ObjectId,
        name: String,
        email: String,
        username: String,
        profileImage: { url: String },
      },
      ref: "User",
      required: true,
    },
    buyers: [
      {
        type: {
          id: Schema.ObjectId,
          name: String,
          username: String,
          profileImage: { url: String },
        },
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export const Automation = mongoose.model("Automation", automationSchema);
