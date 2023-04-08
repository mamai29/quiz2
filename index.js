
const express = require('express')
const app = express()
const port = 3000

let dbUsers=
[
{
    username: "Mai",
    password: "mystery",
    name : " Maisarah Hassan",
    email : " mai@utem.edu.my"

},
{
    username: "Fatin",
    password: "Apiqoh",
    name : " Fatin Afiqah",
    email : " fatin@utem.edu.my"

},

]
//enable json body parsing
app.use(express.json());

app.post('/login', (req, res) => { 
    let data = req.body 
    res.send(
       login( data.username, data.password)
    );

    });

    //post route for user to register
app.post('/register', (req, res) => { 
        let data = req.body 
        res.send(
           register( data.username, data.password, data.name, data.email)
        );
    
        });


//start the server
app.listen(port, () => {    
    console.log(`Example app listening at http://localhost:${port}`)
})

function login (username, password) {
    console.log ("someone try to login with",  username, password)
    
    let matched = dbUsers.find (element => element.username == username)

if (matched)
    {
        if (matched.password == password)
        {
            return matched
        }
        else 
        {
            return "password is incorrect"
        }   
    }
    else 
    { return "username cannot be found"}

}

function register (newusername, newpassword, newname, newemail) 
{
   // TO DO : Check if username exist 
   
dbUsers.find (element => {console.log (element)})

dbUsers.push
        ({  username: newusername,
            password: newpassword,
            name : newname,
            email : newemail
         })
        
        return "success"

        }
//app.get('/', (req, res) => {res.send('Hello Wordl!')})

//create a POST route for user to login
//app.post('/login,(req,res')




//app.post('/bye', (req, res)=>{
  //  res.send('Bye Bye World!')})


//app.listen(port, () => {
  //console.log(`Example app listening on port ${port}`)
        