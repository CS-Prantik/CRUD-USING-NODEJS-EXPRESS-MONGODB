const mongoose=require("mongoose");
const connectDB=async()=>{
    try{
         const con= await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            
        });
        console.log("Succesfully Connected:${con.connection.host}");
    }catch(err){
         console.log(err);
         console.exit(1);
    }
}
module.exports=connectDB;