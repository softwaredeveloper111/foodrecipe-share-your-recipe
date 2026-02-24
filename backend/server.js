require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database.connection")





const PORT = process.env.PORT || 7000
connectToDB()







app.listen(3000,()=>{
  console.log(`server is running at ${PORT}`)
})