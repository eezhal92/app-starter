import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
});

export default mongoose.model('Post', PostSchema);
