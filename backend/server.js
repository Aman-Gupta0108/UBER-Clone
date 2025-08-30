const http = require("http")
const app = require('./app')
const port = process.env.PORT||3000

const server = http.createServer(app);
try{
    server.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
    })

}catch(err){
console.log(err)
}
