//import express modules
import express from 'express'

//import database connection
import DB from'./config/database.js' 

//create express app
const app = express()

//set port to 3000 if not specified
const PORT = process.env.PORT || 3000;

//default route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))


//connect to database
try{
    DB()
}catch(err){
    console.log(err);
}