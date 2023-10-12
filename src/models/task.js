

// const TaskSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true, trim: true },
//     description: { type: String, required: true },
//     done: {
//       type: Boolean,
//       default: false,
//     },
//     tags: [{ type: String, trim: true }],
//     date: { type: Date },
//   },
//   {
//     timestamps: true,
//   }
// );

const mongoose = require('mongoose')
const {Schema}= mongoose;


const TaskSchema = new Schema ({
  title:{type: String , required: true},
  description:{type: String , required: true}
});

module.exports = mongoose.model('Task', TaskSchema);
