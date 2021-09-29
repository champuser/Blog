const mongoose = require('mongoose')

const blogSchema = mongoose.Schema('Blog',{
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    }
})


const Blog = mongoose.model('Blog', blogSchema);

module.exports  = blogSchema;
