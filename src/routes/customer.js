const express = require('express');
const { list } = require('../controllers/customerContollers');
const router = express.Router();

const customerController = require('../controllers/customerContollers');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.delete);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.newData);

 


module.exports = router;