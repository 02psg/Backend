import {asyncHandler} from "../utils/asyncHandler.js"


const registerUser = asyncHandler(async(re,res)=>{
    res.status(200).json({
        message: "ok"
    })
})

export {registerUser}