const express = require("express");
const { engine } = require("express-handlebars");
const handlebarsHelpers = require("./helpers/handlebars-helpers");

const app = express();

// 設定express啟動port
const port = process.env.PORT || 3030;

// 設定hbs模板
app.engine("hbs", engine({ extname: ".hbs", helpers: handlebarsHelpers }));
app.set("view engine", "hbs");

// 設定express取用靜態檔案(js, css)
app.use(express.static("public"));

// 首頁 router
app.get("/", (req, res) => {
  res.render("index", { currentPage: "首頁" });
});

// about頁 router
app.get("/about", (req, res) => {
  res.render("index", { currentPage: "About" });
});

// profileInfo頁 router
app.get("/profileInfo", (req, res) => {
  res.render("index", { currentPage: "ProfileInfo" });
});

// contact頁 router
app.get("/contact", (req, res) => {
  res.render("index", { currentPage: "Contact" });
});

// 監聽啟動的伺服器
app.listen(port, () => {
  console.info(`chatBot listening on port http://localhost:${port}`);
});

// 將app導出使用
module.exports = app;
