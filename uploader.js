const Multer = require('multer');
const path = require('path');
const fs = require('fs-extra');

const uploadDir = path.join('uploads', (process.env.UPLOAD_DIRECTORY || ''))
fs.ensureDirSync(uploadDir);
var storage = Multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(uploadDir));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.fieldname + '-' + file.originalname)
    }
})
const uploader = Multer({
    storage: storage
});
module.exports = uploader;