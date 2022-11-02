import { User } from "../model/User.js"

export const add = async (req, res) => {
    const user = await new User(req.body).save()
    res.status(200).send(user)

}
export const deletetask = async (req, res) => {
    const user = await User.findById(req.params.id);
    const newuser = await user.remove().save
    res.status(200).send(newuser)
}
export const getall = async (req, res) => {
    const user = await User.find()
    res.status(200).send(user);

}
export const updatebyid = async (req, res) => {
    const updateduser=await User.findByIdAndUpdate(req.params.id,req.body,{new: true})
    await res.status(200).send(updateduser)
}
// export const gettask = async (req, res) => {
//     const user = await User.findById(req.body._id)
//     res.status(200).send(user)
// }
// export const findbystatus = async (req, res) => {
//     const user = await User.findOne({ status: req.body.status })
//     res.status(200).send(user)
// }
// export const findandupdate = async (req, res) => {
//     const user = await User.findByIdAndUpdate(req.body._id, { status: req.body.status })
//     res.status(200).send(user)
// }