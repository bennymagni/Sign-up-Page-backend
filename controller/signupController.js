const User = require('../model/Signup')

const signup = async (req, res) => {
    if (!req?.body.firstName || !req?.body.lastName || !req.body.emailAddress ) 
        {
            return res.status(400).json({'message': 'First name, last name and email address are required'})
        }
    try {
        const result = await User.create({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.emailAddress
        })
        console.log(result)
        res.status(201).json(result);
    } catch (error) {
        res.sendStatus(500);
        console.log(error.message);
    }
}

module.exports = { signup }