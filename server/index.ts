import mongoose from 'mongoose'
export default async() =>{
   const config = useRuntimeConfig()
        try{
             await mongoose.connect(config.mongoUrl)
            console.log(`mongo database is connected!!!  `)
        }catch(error){
            console.error(`Error: ${error} `)
            process.exit(1) //passing 1 - will exit the proccess with error
        }
}