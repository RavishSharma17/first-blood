const express = require('express')
const router = express.Router();

const controller = require('./../controller');
const uploader = require('./../uploader');

router.post('/upload/single', uploader.single('file'), controller.uploadSingle)

router.post('/upload/multiple', uploader.array('file'), controller.uploadMultiple)

router.get('/uploadedFiles', controller.uploadedFiles)

router.get('/getFiles', controller.getFiles);

router.get('/', controller.index )

module.exports = router