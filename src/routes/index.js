const express = require('express');
const getItems = require('./getItems');
// const { getAllItems, createItem, getItemById, updateItem, deleteItem } = require('../controllers/index.js');

const router = express.Router();
router.use('/items',getItems);

// router.get('/items', getAllItems);
// router.post('/items', createItem);
// router.get('/items/:id', getItemById);
// router.put('/items/:id', updateItem);
// router.delete('/items/:id', deleteItem);

module.exports = router;