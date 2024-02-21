const express =  require("express");
const app = express;
const userRoutes = require('./routes/userRoutes2');
const PORT= 3000; 

app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'))
app.use('/subscribers',userRoutes ); 

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`);
})