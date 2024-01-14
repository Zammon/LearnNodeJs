const blogModel = require("../models/blogModel");
const slugigy = require("slugify");

exports.create = (req, res)=> {
    const {title, content, author} = req.body;
    const slug = slugigy(title);

    blogModel.create({title, content, author, slug}, (err, blog)=>{
        if(err) {
             res.status(400).json({error: err})
            return;
        }
        res.status(200).json(blog);
    })

}