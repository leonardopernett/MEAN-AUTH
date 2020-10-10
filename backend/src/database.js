import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/jwt-auth',{
  useNewUrlParser: true,
  useUnifiedTopology: true

})
  .then(db => console.log('db is coonectes'))
  .catch(err=>console.log(err))