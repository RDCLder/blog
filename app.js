const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static("public"));
app.use(require("./routes/index"));
// app.use(require("./routes/commentSubmit"));
app.use(require("./routes/articleSubmit"));
app.use(require("./routes/articles"));

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})