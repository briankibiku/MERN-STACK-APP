// @desc Get all goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' })
}

// @desc Set all goals
// @route POST /api/goals
// @access Private
const setGoals = (req, res) => {
    res.status(200).json({ message: 'Set goals' })
}

// @desc put all goals
// @route UPDATE /api/goals
// @access Private
const putGoals = (req, res) => {
    res.status(200).json({ name: `Put goal ${req.params.id}` })
}

module.exports = {
    getGoals,
    setGoals,
    putGoals
}