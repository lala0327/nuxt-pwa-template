import mongoose from 'mongoose';
// User schema
const schema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
    detail: {
      type: String,
    },
  },
);
export default mongoose.model('Place', schema, "place");