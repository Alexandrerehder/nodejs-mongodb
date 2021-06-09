import mongoose from 'mongoose'
//import crypto from 'crypto'

const schema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true, //Obrigatório
    },

    email: {
      type: String,
      required: true,
      unique: true,  
      lowercase: true, 
      trim: true,
    },

    idade: {
      type: Number,
      required: true,      
    },

    camisa: {
      type: Number,
      required: true,      
    },

    time: {
      type: String,
      required: true,      
    },

  },
  {
    timestamps: true,
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
  }
)
export const UserModel = mongoose.model('User', schema)

const user = mongoose.model('User')

  new user({
    nome: "Chico",
    email: "chico@gmail.com",
    idade: 25,
    camisa: 10,
    time: "Boa Esperança"

}).save().then(() => {
    console.log("User created")
}).catch((err)=>{
    console.log("unexpected error")
})

    