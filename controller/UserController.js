import { User } from "../model/User.js"

export const add = async (req, res) => {
    const { task, status } = req.body
    const user = await new User({ task: task, status: status }).save().then((res) => res.status(200).send(user)).catch((err) => console.log(err))

}
export const deletetask = async (req, res) => {
    const user = await User.findOneAndRemove(req.body._id)
    console.log(user);
    res.status(200).send(user)
}
export const gettask = async (req, res) => {
    const user = await User.findById(req.body._id)
    res.status(200).send(user)
}
export const getall = async (req, res) => {
    const user = await User.find().then((res)=>res.status(200).send(user)).catch((err)=>console.log(err))
    
}
export const findbystatus = async (req, res) => {
    const user = await User.findOne({ status: req.body.status })
    res.status(200).send(user)
}
export const findandupdate = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.body._id, { status: req.body.status })
    res.status(200).send(user)
}