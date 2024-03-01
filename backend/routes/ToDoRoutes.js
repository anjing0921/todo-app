const {Router}  = require("express")

const router = Router()

router.get('/', getToDo)
router.post('/save', saveToDo)

module.exports = router;