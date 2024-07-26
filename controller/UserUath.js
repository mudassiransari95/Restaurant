let User = require('../models/UserSchema')
const bcrypt = require('bcryptjs');

//  User Register
const registerUser = async (req, res) => {
    let { username, password, email } = req.body

    try {
        let userDetails = await User.findOne({ email: email })

        if (!userDetails) {
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password, salt);

            let details = await User.create({
                username: username,
                email,
                password: hashPassword
            })
            return res.status(200).json({ success: true, msg: "user created successfully", details })

        }
        else {
            return res.status(200).json({ success: false, msg: "user already exists!" })
        }
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message })
    }


}


const loginUser = async (req, res) => {
    let { name, password, _id } = req.body;

    try {
        let userDetails = await User.findOne({ _id: _id })
        console.log(userDetails)
        if (userDetails) {
            let comparePassword = bcrypt.compareSync(password, userDetails.password);
            if (comparePassword) {
                return res.status(200).json({ success: true, msg: "user logged in successfully", userDetails })
            }
            else {
                return res.status(200).json({ success: false, msg: "Wrong password" })
            }
        }
        else {
            return res.json({ success: false, msg: "user not found" })
        }
    } catch (error) {
        return res.status(500).json({ success: false, msg: "error in log in user", error: error.message })
    }

}
module.exports = {
    registerUser,
    loginUser

}