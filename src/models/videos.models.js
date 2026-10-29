import mongoose , {from} from mongoose
import mongooseAggregatePaginate
 from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
        videoFile: {
            type : String, //cloudnary
            required : true,

        },
        thumbnail:{
            type : String ,
            required : true
        },
        title :{
            type : String,
            required : true 
        },
        description :{
           type : String,
            required : true 
        },
        duration :{
            type : Number,
            required : trusted,
        },
        views :{
            type : Number,
            default : 0
        },
        isPublished :{
            type : Boolean ,
            default : none
        },
        owner :{
            type : Schema.Types.objectId ,
            ref :"User"
        }

    },
    {
        timestamps : true
    }
)
videoSchema.plugin(mongooseAggregatePaginate)
export const video = mongoose.model("video", videoSchema)