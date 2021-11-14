var config = require("../config");
const { Storage } = require('@google-cloud/storage');
const multer = require('multer');

const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    keyFilename: process.env.STORAGE_BUCKET,
  });


  const bucket = storage.bucket(process.env.STORAGE_BUCKET);

  const uploader = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // limiting files size to 5 MB
    },
  });