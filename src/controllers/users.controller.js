const UserModel = require('../models/users.model')


exports.getAllUsers = (req, res) => {
    UserModel.getAllUsers((err, users) => {
        console.log('Usersss')
        if(err)
        res.send(err)
        console.log('Users', users);
        res.send(users)
    })
}

exports.addUser = (req, res) => {
    const userReqData = new UserModel(req.body);
    UserModel.addUser(userReqData, (err, user) => {
        if(err){
            res.json(err)
        } else {
            res.json({status: true, message: "Created Successfully"})
        }
    })
}

exports.updateUser = (req, res) => {
    const userReqData = new UserModel(req.body);
    UserModel.updateUser( req.params.id, userReqData, (err, user) => {
        if(err){
            res.send(err)
        }
        res.json({status: true, message: "Updated Successfully", id: user.insertId})
    })
}

exports.deleteUser = (req, res) => {
    UserModel.deleteUser(req.params.id, (err, user) => {
        if(err){
            res.send(err)
        }
        res.json({status: true, message: "Deleted Successfully", id: user.insertId})
    })
}

exports.login = (req, res) => {
    const userReqData = new UserModel(req.body);
    UserModel.login(userReqData, (err, code, user) => {
        if(err){
            res.json(err)
        } else {
            res.json({status: true, message: "Logged In Successfully", data: user})
        }
    })
}