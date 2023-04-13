import PlaceModel from "~/server/dbModels/Place.modal"

export default defineEventHandler(async(e)=>{

    try{
        const user =  await PlaceModel.find({})
        return {
            status:200,
            statusMessage: user
           }
    }catch(err){
        console.log(err)
    }
})