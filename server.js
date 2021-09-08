const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 600
const articlesRoute = require("./routes/articles");
const Article = require("./models/article");
const methodOverride = require('method-override')

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser:true, 
useUnifiedTopology: true})

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false}));

app.use(methodOverride('_method'))


app.get("/", async (req, res) => {
    const articles = await Article.find().sort({
        createAt: 'desc'
    })
    res.render("./articles/index", {articles:articles})
});

app.use("/articles", articlesRoute);
app.listen(port, () => {
    console.log(`iniciando o servidor exoress na porta ${port}`);
})
