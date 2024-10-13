import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('Подключение к БД установлено');
  } catch (error) {
    console.error('Ошибка подключения к БД');
    process.exit(1);
  }
};

export default connectDB;