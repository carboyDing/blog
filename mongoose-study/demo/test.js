let User = require('./user.js')
let mongoose = require('./db.js')
/**
 * 插入数据
 */
function insert() {
    let user = new User({
        username: 'yaoding',
        userpwd: '123',
        userage: 24,
        logindate: new Date()
    })

    user.save(function (err, res) {
        if (err) {
            throw err
        } else {
            console.log('Res:' + res)
        }
        mongoose.disconnect()
    })
}

/**
 * 更新数据
 */
function update() {
    let where = {
        username: 'yaoding'
    },
        updatestr = {
            'userpwd': '345'
        };
    User.update(where, updatestr, function(err, res) {
        if(err) {
            throw err
        } else {
            console.log('Res:' + JSON.stringify(res))
        }
        mongoose.disconnect()
    })
}

/**
 * 根据ID更新
 */
function findByIdAndUpdate() {
    User.findByIdAndUpdate('5b4715b9241454056bc888eb', {
        userpwd: 123
    }, function(err, res) {
        if(err) {
            throw err
        } else {
            console.log('Res:' + JSON.stringify(res))
        }
        mongoose.disconnect()
    })
}

/**
 * 条件删除
 */
function remove() {
    User.remove({
        username: 'yaoding'
    }, function(err, res) {
        if(err) {
            throw err
        } else {
            console.log('Res:' + JSON.stringify(res))
        }
        mongoose.disconnect()
    })
}

/**
 * 计算总记录数
 */
function total() {
    User.count({}, function(err, res) {
        if(err) {
            throw err
        } else {
            console.log('Res:' + res)
        }
        mongoose.disconnect()
    })
}

function getByPager() {
    let pageSize = 10,
        currentPage = 2,
        where = {},
        skip = (currentPage - 1) * pageSize;
    User.find(where).skip(skip).limit(pageSize).exec(function(err, res) {
        if(err) {
            throw err
        } else {
            console.log('Res:' + res)
        }
        mongoose.disconnect()
    })
}



// insert() 
// update()
// findByIdAndUpdate()
// remove()
// total()

getByPager()