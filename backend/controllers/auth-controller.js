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
            return res.status(400).json({ message: "email already exists " })
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

// login logic

const login = async (req,res) => {
    try {
        const {email, password} = req.body

        const userExit = await User.findOne({email})

        if(!userExit) {
            return res.status(400).json({ message: "Invalid Credentials"});
        }

        const user = await bcrypt.compare(password, userExit.password)

        if(user) {
            res.status(200).json({
                msg: "Login successful",
                token: await userExit.generateToken(),
                userId: userExit._id.toString()
            })
        } else {
            res.status(401).json({message: "Invalid email or password"})
        }

    } catch (error) {
        res.status(500).json('internal server error')
    }
}


// User Logic -- to send user data
const user = async (req,res) => {
    try {
        const userData =  req.user;
        console.log(userData)
        
        return res.status(200).json({msg: userData})
    } catch (error) {
        console.log(` error from user route ${error}`);
    }
}


module.exports = { home, register, login , user}