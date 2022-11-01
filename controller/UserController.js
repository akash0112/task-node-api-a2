import { User } from "../model/User.js"

export const add = async (req, res) => {
    const { task, status } = req.body
    const user = await new User({ task: task, status: status }).save()
    res.status(200).send(user)

}
export const deletetask = async (req, res) => {
    const user = await User.findById(req.params.id);
    const newuser=await user.remove().save
    res.status(200).send(newuser)
}
export const gettask = async (req, res) => {
    const user = await User.findById(req.body._id)
    res.status(200).send(user)
}
export const getall = async (req, res) => {
    const user = await User.find()
    res.status(200).send(user);
    
}
export const findbystatus = async (req, res) => {
    const user = await User.findOne({ status: req.body.status })
    res.status(200).send(user)
}
export const findandupdate = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.body._id, { status: req.body.status })
    res.status(200).send(user)
}