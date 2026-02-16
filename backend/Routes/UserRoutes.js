const router = require('express').Router()
const { fetchUsers, createUser, deleteUser, updateUser, fetchUserById} = require('../Controllers/userControllers.js')

router.get('/', fetchUsers)

router.get('/:id', fetchUserById)

router.post('/create', createUser)

router.put('/update/:id', updateUser)


router.delete('/delete/:id', deleteUser)

module.exports = router