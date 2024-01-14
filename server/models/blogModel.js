const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    content: {
        type: {},
        required: true
    },
    author: {
        type: String,
        default: "admin",
        required: true
    },
    slug: {
        type: String,
        lowercase: true, // กำหนดให้ตัว url เป็นตัวพิมพ์เล็กทั้งหมด
        unique: true // กำหนดให้ไม่มีตัว slug ที่ซ้ำกัน
    }
},{
    timestamps: true // ส่งเวลาไปด้วย
})

module.exports = mongoose.model("Blogs", blogSchema);