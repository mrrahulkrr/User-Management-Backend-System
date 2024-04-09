const User = require('../models/userModel')

//function to create a new user
exports.createUser = async(req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save()
        res.status(201).json(newUser)

    } catch(err){
        res.status(400).json({
            msg : "Error while creating the user!!"
        })
    }
}

// function to get a user by ID
exports.getUserById = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user){
            return res.status(404).json({message: "User not found"})
        }
        res.json(user)

    } catch(err){
        res.status(500).json({
            msg : err.message
        })
    }
}

// function to update user details
exports.updateUser = async(req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!updateUser){
            res.status(400).json({message:"User not found"})
        }
        res.json(updateUser)

    } catch(err){
        res.status(400).json({
            msg : err.message
        })
    }
}

// function to delete a user
exports.deleteUser = async(req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if (!deleteUser){
            res.status(404).json({message:"Error while deleting the user"})
        }
        res.json({msg : "User deleted successfully"})

    } catch(err){
        res.status(500).json({
            msg : err.message
        })
    }
}