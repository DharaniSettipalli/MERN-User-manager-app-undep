const UserModel = require('../Models/UserModel')

//Fetch user data
const fetchUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find({})
        res.status(200).json({ message: "Users retrieved", success: true, data: allUsers })
    } catch (error) {
        return res.status(400).json({ message: `Failed to fetch users:  ${error}`, success: false })
    }
}

//create a new user
const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber } = req.body;
        
        if (!firstName || !lastName || !email || !phoneNumber) {
            return res.status(400).json({ message: "Please enter all the required fields (first name, last name, email, phone)", success: false })
        }
        const existUser = await UserModel.findOne({ email })
        
        if (existUser) {
            return res.status(400).json({ message: "User with this mail id already exists", success: false })
        }

        await UserModel.create(req.body)
        res.status(201).json({message:"User created", success:true})
    } catch (error) {
        return res.status(400).json({ message: `Failed to create user:  ${error}`, success: false })
    } 
}

//delete existing user
const deleteUser = async (req,res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id)
        if (user) {
            res.status(200).json({ message: "User deleted", success: true })
        }
        } catch (error) {
        return res.status(400).json({ message: `Failed to delete user:  ${error}`, success: false })
    }
}

//update existing user
const updateUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body)
        
        if (user) {
            res.status(200).json({ message: "User updated", success: true })
        }
    } catch (error) {
        return res.status(400).json({ message: `Failed to update user:  ${error}`, success: false })
    }
}

//fetchUserById
const fetchUserById = async (req, res) => {
    try {
        const fetchedUser = await UserModel.findById(req.params.id)
        res.status(200).json({ message: "User retrieved", success: true, data: fetchedUser })
    } catch (error) {
        return res.status(400).json({ message: `Failed to fetch user:  ${error}`, success: false })
    }
}

module.exports = {
    fetchUsers,
    createUser,
    deleteUser,
    updateUser,
    fetchUserById
}
