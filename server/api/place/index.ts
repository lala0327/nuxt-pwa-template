import PlaceModel from "~/server/dbModels/Place.modal"

export default defineEventHandler(async(e)=>{

    try{
        const place =  await PlaceModel.find({})
        return {
            status:200,
            statusMessage: place
           }
    }catch(err){
        console.log(err)
    }
})