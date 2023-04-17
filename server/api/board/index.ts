import BoardModel from "~/server/dbModels/Board.modal"

export default defineEventHandler(async(e)=>{

    try{
        const board =  await BoardModel.find({})
        return {
            status:200,
            statusMessage: board
           }
    }catch(err){
        console.log(err)
    }
})