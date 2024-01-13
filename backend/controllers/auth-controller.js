const User = require('../models/user-model')
const bcrypt = require('bcryptjs')

const home = async (req, res) => {
    try {
        res.status(200).send("welcome from controllers")
    } catch (error) {
        console.log(error)
    }
}

// Registration logic

const register = async (req, res) => {

    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "email already exists " })
        }

        //hash the password
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound)

        const userCreated = await User.create({ username, email, phone, password: hash_password })

        res.status(200).json({
            message: "registration successful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        })

    } catch (error) {
        res.status(400).json({ msg: "page not found" })
    }
}

module.exports = { home, register }