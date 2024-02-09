import mongoose from "mongoose"

const animalSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    class:{
        type: String,
        requiered: true
    },
    race:{
        type: String,
        requires: true
    },
    keeper:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    gender:{
        type: String,
        required: true
    }
})

export default mongoose.model('animal', animalSchema)