const express = require('express');
const router = express.Router();
const product_controller = require('../controllers/product.controller');

router.get('/', product_controller.findAll);
router.post('/create', product_controller.itemCreate);
router.delete('/:id/delete', product_controller.itemDelete);
router.delete('/deleteAllDone', product_controller.itemDeleteAllDone);
router.put('/:id/done', product_controller.itemDone);
router.put('/:id/update', product_controller.itemUpdate);
router.put('/change', product_controller.statusChangeAll);

module.exports = router;
