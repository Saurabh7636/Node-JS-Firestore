const express = require('express');

const {addStudent, 
       getAllStudents, 
       getStudent,
       updateStudent,
       deleteStudent
      } = require('../controllers/studentController');

const {uploadImage} = require('../controllers/imageController');

const router = express.Router();

// let prefix = '/student';
router.post(`/`, addStudent);
router.get(`/`, getAllStudents);
router.get(`/:id`, getStudent);
router.put(`/:id`, updateStudent);
router.delete(`/:id`, deleteStudent);


router.post(`/imageUpload`, uploadImage);


module.exports = router