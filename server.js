const express= require("express");
require("dotenv").config();
const app=express();
const connectDB = require('./config/connectDB');

//DB Connexion
connectDB();
//create new route
// middleware routing body parser 
app.use(express.json());
app.use("/api/demande",require("./routes/Demande"));
app.use("/api/professeur",require("./routes/Professeur"));

const PORT=process.env.PORT;



app.listen(PORT,
    (err)=>err?console.error(err):console.log("server is running correctly !")
);