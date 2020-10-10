import express from 'express'
import User from '../model/User'
import jwt from 'jsonwebtoken'
import key from '../key'
import {verifyToken} from '../libs/verifyToken'

const router = express.Router();

function getToken(user){
  return jwt.sign({id:user._id},key.SECRET,{expiresIn:60*60})
}

router.get('/',(req,res)=>{
  res.json('hello')
})

router.post('/signup', async (req,res)=>{
  const {email, password} = req.body
  const userFound = await User.findOne({email:email})
  if(userFound) return res.status(400).json({message:'user existe'})

  const user = new User({email, password})
  user.password= await user.encriptPassword(password)
  await user.save()
  res.json({token:getToken(user)})
})


router.post('/signin',async (req,res)=>{
  const {email, password} = req.body
  const user = await User.findOne({email})
  if(!user)return res.status(400).json({message:'user no register db'})

  const verifyPassword = await user.comparePassword(password)
  if(!verifyPassword) return res.status(400).json({message:'password wrong'})
  res.json({token:getToken(user)})
  
})

router.get('/private-tasks', verifyToken, async (req,res)=>{
   res.json([
      {name:"task one private", description:"description one private"},
      {name:"task two private", description:"description two private"},
      {name:"task three private", description:"description three private"},
      {name:"task four private", description:"description four private"}
   ])
})

router.get('/tasks', async (req,res)=>{
  res.json([
     {name:"task one", description:"description one"},
     {name:"task two", description:"description two"},
     {name:"task three", description:"description three"},
     {name:"task four", description:"description four"}
  ])
})

router.get('/profile', verifyToken,async (req,res)=>{
  const user = await User.findById(req.userId,{password:0})
  res.json(user)
})

export default router