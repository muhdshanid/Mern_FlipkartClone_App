import mongoose from 'mongoose'

export const  Connection =async (Password) => {
    const URL = `mongodb+srv://admin:${Password}@cluster0.ezstnr2.mongodb.net/flipkart-clone?retryWrites=true&w=majority`

    try {
     await  mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
     console.log("Database connected successfully");
    } catch (error) {
        console.log("error while connecting to database",error.message);
    }
}