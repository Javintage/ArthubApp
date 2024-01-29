const dotenv=require('dotenv')
dotenv.config()
const{MongoClient}=require('mongodb')
const client = new MongoClient(process.env.CONNECTIONSTRING)
async function start(){
    await client.connect()
    module.exports=client
    const App=require('./App')
    App.listen(process.env.PORT)

}
start()