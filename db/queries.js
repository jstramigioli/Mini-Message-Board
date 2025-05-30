const pool = require("./pool");

exports.getAllMessages = async () => {
    const { rows } = await pool.query('SELECT * FROM msg_practice ORDER BY added DESC')
    return rows
}

exports.insertMessage = async (text, user) => {
    await pool.query(
        'INSERT INTO msg_practice (text, username) VALUES ($1, $2)',
        [text, user]
    )
}