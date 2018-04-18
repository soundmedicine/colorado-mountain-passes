const database = require('./database-connection')

module.exports = {
    list() {
        return database('pass').select()
    },
    read(id) {
        return database('pass').where('id', id).first()
    }, 
    create(pass) {
        return database('pass').insert(pass).returning('*').then(record => record[0])
    },
    update(id, pass) {
        return database('pass').update(pass).where('id', id).returning('*').then(record => record[0])
    },
    delete(id) {
        return database('pass').where('id', id).del()
    }
}