

const home = async (req,res) => {
    try {
        res.status(200).send("welcome from controllers")
    } catch (error) {
        console.log(error)
    }
} 

// Registration logic

const register = async (req,res) => {

    try {
        res.status(200).send('welcome to registration page')
    } catch (error) {
        res.status(400).send({ msg: "page not found"})
    }
}

module.exports = {home, register}