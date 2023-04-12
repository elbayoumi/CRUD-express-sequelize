module.exports = (db, type) => {
    return db.define('messages', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: type.STRING,
            allowNull: false
        }
    })
}