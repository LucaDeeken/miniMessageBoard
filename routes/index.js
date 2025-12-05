const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "You’re my favorite thought of the day.",
    user: "Amando",
    added: new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    text: "Everything feels lighter with you.",
    user: "Charles",
    added: new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.username,
    added: new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
  });
  res.redirect("/");
});

module.exports = router;
