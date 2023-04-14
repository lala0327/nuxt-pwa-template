import PlanModel from "~/server/dbModels/Plan.modal"

export default defineEventHandler(async(e)=>{

    try{
        const plan =  await PlanModel.find({})
        return {
            status:200,
            statusMessage: plan
           }
    }catch(err){
        console.log(err)
    }
})