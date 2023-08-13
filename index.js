const express = require('express')

const app = express()

const questions = [
    {
        question:"how to install java",
        slug:"how-to-install-java",
        votes:3,
        views:10,
        tags:"java,query"
    },
    {
        question:"how to install c",
        slug:"how-to-install-c",
        votes:3,
        views:10,
        tags:"c,query"
    },
    {
        question:"how to install node",
        slug:"how-to-install-node",
        votes:3,
        views:10,
        tags:"node,query"
    }
]

const users = [
    {
        name:"VB",
        followers:100,
        location:"HYD"
    },
    {
        name:"VB1",
        followers:1001,
        location:"HYD1"
    },
    {
        name:"VB2",
        followers:1002,
        location:"HYD2"
    }
]

app.get('/',(req,res)=>{
   res.send("Home")
})
app.get('/questions',(req,res)=>{
    res.send(questions)
})
app.get('/questions/:slug',(req,res)=>{
    console.log(req.params.slug)

    const slug = req.params.slug
    questions.map(obj=>{
        if (obj.slug === slug){
            res.send(obj)
        }
    })
    res.send("Question not found")
})
app.get('/users',(req,res)=>{
    res.send(users)
 })
 app.get('/tags',(req,res)=>{
    res.send("Tags")
 })
 app.get('/jobs/companies',(req,res)=>{
    res.send("Companies")
 })



app.listen(3000,()=>{
    console.log("Listening...")
})