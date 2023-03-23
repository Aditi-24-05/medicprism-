const { User, validate } = require('../models/user')
const bcrypt = require('bcrypt')
const Joi = require('joi')

const createUser = async (req,res) => {
    try {
        const {error} = validate(req.body)
        if(error)
          return res.status(400).json({msg: error.message})

         const user = await User.findOne({ email: req.body.email }) 
         if(user)
          return res.status(409).json({msg: "User with given email already exists"})

          const salt = await bcrypt.genSalt(Number(process.env.SALT))
          const hashPassword = await bcrypt.hash(req.body.password, salt)

          await new User({...req.body, password: hashPassword}).save()
          res.status(201).json({msg:'User created'})

       
    } catch (error) {
        res.status(500).json({msg:'Internal server error'})
    } 
}

const checkUser = async (req, res)  => {
    try {
        const {error} = validatea(req.body)
        if(error)
        return res.status(400).json({msg:error.message})

        const user = await User.findOne({email: req.body.email})
        if(!user)
        return res.status(401).json({message: 'Invalid email or password'})
        
        const validPassword = await bcrypt.compare(
            req.body.password, user.password
            )
            if(!validPassword)
            return res.status(401).json({message: 'Invalid email or password'})

        const token = user.generateAuthToken()
        res.status(201).json({data: token, message:'Logged in successfully'})

    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

const validatea = (data) => {
    const schema  = Joi.object({
        email:Joi.string().email().required().label('Email'),
        password:Joi.string().required().label('Password')
    })
    return schema.validate(data)
}

module.exports = {
    createUser,
    checkUser,
}





