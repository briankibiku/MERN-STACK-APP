const express = require('express')
const { getGoals } = require('../controllers/goalController')
const { setGoals } = require('../controllers/goalController')
const { putGoals } = require('../controllers/goalController')


const router = express.Router()
router.get('/', getGoals)

router.post('/', setGoals)

router.put('/:id', putGoals)

router.delete('/:id', (req, res) => {
    res.status(200).json({ name: `Put goal ${req.params.id}` })
})
module.exports = router