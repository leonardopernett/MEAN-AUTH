import jwt from 'jsonwebtoken'
import key from '../key'

export const verifyToken = (req,res, next)=>{
    
       if(!req.headers['authorization']){
           res.status(401).json("not authorization")
       }
      const token = req.headers['authorization'].split(" " ,2)[1]

      if(!token) return  res.status(401).json("not authorization")

      const payload =  jwt.verify(token,key.SECRET )

      if(!payload) return res.status(401).json("not authorization")

      req.userId = payload.id

      next()
}
