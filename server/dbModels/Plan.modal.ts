import mongoose from 'mongoose';
// User schema
const schema: mongoose.Schema = new mongoose.Schema(
  {
    planArr: {
      type: Array,
      required: true,
    },
    day: {
      type: Number,
      required: true,
    },
  },
);
export default mongoose.model('Plan', schema, "plan");