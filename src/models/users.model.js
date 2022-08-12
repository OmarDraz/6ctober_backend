var conn = require('../../config/db')

var User = function(user){
    this.first_name = user.first_name,
    this.last_name = user.last_name,
    this.password = user.password,
    this.role = user.role,
    this.phone = user.phone
}

User.getAllUsers = (result) => {
    conn.query('SELECT * FROM users', (err, res) => {
        if(err) {
            console.log('Error While Fetching Users', err);
            result(null, err)
        } else {
            console.log('Users Fetched')
            result(null, res)
        }
    })
}

User.addUser = (data, result) => {
    conn.query('SELECT * FROM users WHERE phone = ?', data.phone, (err, res) => {
        if(res.length === 0){
            conn.query("INSERT INTO users SET ?", data, (err, res) => {
                if(err){
                    console.log('Error While inserting', err)
                    result(null, err)
                } else {
                    console.log("Success")
                    result(null, res)
                }
            })
        } else {
            console.log("User Already Exist!")
            result({status: false, message: "المستخدم موجود بالفعل"}, null)
        }
    })
}

User.updateUser = (userId, data, result) => {
    conn.query('UPDATE users SET ? WHERE id = ?', [data, userId], (err, res) => {
        if(err){
            console.log('Error While Updating', err)
            result(null, err)
        } else {
            console.log('Updated Succuessfully !')
            result(null, res)
        }
    })
}

User.deleteUser = (userId, result) => {
    conn.query('DELETE FROM users WHERE id = ?', userId, (err, res) => {
        if(err){
            console.log('Error While Deleting User', err)
            result(null, err)
        } else {
            console.log('Deleted Successfully !')
            result(null, res)
        }
    })
}

User.login = (data, result) => {
    conn.query("SELECT * FROM users WHERE phone = ? AND password = ?", [data.phone, data.password], (err, res) => {
        if(res.length > 0){
            result(null, 200, res.pop())
            console.log('Logged In')
        } else {
            result({message: "تحقق من رقم الهاتف او كلمة المرور", status: false}, 401)
        }
    })
}

module.exports = User;