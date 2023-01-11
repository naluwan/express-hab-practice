const express = require("express");
const { engine } = require("express-handlebars");
const handlebarsHelpers = require("./helpers/handlebars-helpers");

const app = express();

// 設定express啟動port
const port = process.env.PORT || 3030;

// 設定hbs模板
app.engine("hbs", engine({ extname: ".hbs", helpers: handlebarsHelpers }));
app.set("view engine", "hbs");

// 設定express取用靜態檔案
app.use(express.static("public"));

// 監聽啟動的伺服器
app.listen(port, () => {
  console.info(`chatBot listening on port http://localhost:${port}`);
});

// 將app導出使用
module.exports = app;
