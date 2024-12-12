import mongoose from 'mongoose';export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://mugilvannan:mugilvannan@cluster0.so1vt9s.mongodb.net/'
    )
    .then(() => console.log('DB connected'));
};
