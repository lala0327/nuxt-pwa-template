import mongoose from 'mongoose';
// User schema
const schema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
);
export default mongoose.model('Board', schema, "board");