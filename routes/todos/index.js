const express = require("express");
const router = express.Router();

router.get('/', require("./controller").getAll)
router.post('/', require("./controller").addTodo)
router.put('/:userid', require("./controller").editTodo)
router.get('/:userid', require("./controller").findByID)
router.delete('/:userid', require("./controller").deleteByID)
router.delete('/', require("./controller").deleteAll)
module.exports = router;
