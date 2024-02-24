import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const vedioSchema = (
    {
      vedioFile:{
        type:String,
        required:true,

      },
      thumbnail : {
        type:String,
        required:true,

      },
      title : {
        type:String,
        required:true,

      },
      description : {
        type:String,
        required:true,

      },
      duration: {
        type:Number,
        required:true
      },
      veiws :{
        type:Number,
        default : 0
      },
      isPublished :{
        type:Boolean,
        default:true
      },
      owner:{
        typr: Schema.Types.ObjectId,
        ref:"User"
      }
      
    },
    {
    timeStamps:true
    }
)

vedioSchema.plugin(mongooseAggregatePaginate);

export const Vedio = mongoose.model("Vedio",vedioSchema)