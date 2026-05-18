import exp from 'express'
import { userModel } from '../models/UserModel.js'

export const userRoute = exp.Router()

userRoute.post('/users', async(req,res) => {
    //get user details from body
    let userDetails = req.body

    const userDoc = new userModel(userDetails)

    await userDoc.validate()

    await userDoc.save({ validateBeforeSave:false })

    res.status(201).json({message:"user created",payload:userDoc})


})


userRoute.get('/users',async(req,res) => {

    let users = await userModel.find()

    res.status(200).json({message:"users are",users})

})

//read a user by id
userRoute.get('/user/:id', async(req,res) => {

    //get user id from params
    let userId = req.params.id;

    let dbUser = await userModel.findById(userId)

    if(dbUser)
        res.status(404).json({message:"user does not exist"})
})

//delete a user by id
userRoute.delete('/delete/:id', async(req,res) =>{
    
    //get userid from params
    let userId = req.params.id


    let deletedUser = await userModel.findByIdAndUpdate(userId,{
        $set:{isActive:false}
    })

    if(!deletedUser)
        res.status(404).json({message:"user not found"})

    res.status(200).json({message:"user deleted"})
})

//update a user by id
