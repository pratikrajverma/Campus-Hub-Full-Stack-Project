const cloudinary = require('cloudinary').v2

require('dotenv').config()

const cloudinaryConfig = ()=>{
 try{
    cloudinary.config({
        API_KEY :process.env.API_KEY,
        CLOUD_NAME : process.env.CLOUD_NAME,
        API_SECRET : process.env.API_SECRET
    })
 }catch(err){
    console.log(err)
 }
}

module.exports = cloudinaryConfig