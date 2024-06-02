// const mongoose = require('mongoose')

// const historySchema = new mongoose.Schema({
//     userId:{
//         type:String,
//         require:true
//     },
//     searchKeyword:{
//         type:String,
//         require:true
//     }
    

// },{timestamps:true})

// const history = mongoose.model("history" , historySchema)

// //export
// module.exports = history

const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    searchKeyword: {
        type: String,
        required: true
    }
}, { timestamps: true });

const history = mongoose.model("History", historySchema);

module.exports = history;
