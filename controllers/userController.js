const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

async function sendMessage(req, res) {
  await db.insertMessage(req.body.username, req.body.messageText);
  res.redirect("/");
}

module.exports = {
  getMessages,
  sendMessage,
};
