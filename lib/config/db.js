import mongoose from "mongoose";
 export const ConnectDB=async()=>{
    await mongoose.connect('mongodb+srv://riddhi:10032004@cluster0.y6kgiep.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("DB Connected")
}