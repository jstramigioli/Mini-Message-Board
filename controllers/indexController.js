const db = require('../db/queries')

exports.messageListGet = async (req, res) => {
    const messages = await db.getAllMessages()
    res.render('index', { title: 'Mini Messageboard', messages: messages})
}

exports.newMessageGet = (req, res) => {
    res.render('form')
}

exports.newMessagePost = async (req, res) => {
    const messageText = req.body.message
    const messageUser = req.body.author
    await db.insertMessage(messageText, messageUser)
    res.redirect('/')
}