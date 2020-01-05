const fs = require('fs-extra');
const path = require('path')

module.exports.index = (req, res, next) => {
    res.render('index.ejs')
}

module.exports.uploadSingle = (req, res, next) => {
    return res.redirect('/uploadedFiles')
}

module.exports.uploadMultiple = (req, res, next) => {
    return res.redirect('/uploadedFiles')
}

module.exports.getFiles = (req, res, next) => {
    fs.readdir(path.join(__dirname, '..', 'uploads'), function(err, items) {
        let finItems = items;
        if(err)
            finItems = [];
        res.send(finItems)
    });
}

module.exports.uploadedFiles = (req, res, next) => {
    fs.readdir(path.join(__dirname, '..', 'uploads'), function(err, items) {
        
        let finItems = items;
        if(err)
            finItems = [];
        res.render('listFiles.ejs', { files: finItems })
    });
}