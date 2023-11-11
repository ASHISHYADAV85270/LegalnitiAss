import mongoose from 'mongoose';
mongoose.set('strictQuery', true);
async function connectMongoDB(dblink: string) {
    await mongoose.connect(dblink, { dbName: 'legalniti' }).then(() => {
        console.log('MongoDB connected Successfully')
    });
}
export { connectMongoDB };