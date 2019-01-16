const express = require("express");
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(require("./routes/commentSubmit"));
app.use(require("./routes/articleSubmit"));
// app.use(require("./routes/form"));
// app.use(require("./routes/form"));

app.get('/', (req, res) => {
    res.send(
        "Homepage"
    )
});

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})