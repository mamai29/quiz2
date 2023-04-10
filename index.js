
const express = require('express')
const app = express()
const port = 3000
var jwt = require('jsonwebtoken')


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

app.get('/hello',verifyToken, (req, res) => {
    console.log(req.user)
    res.send('Hello Wordl!')})

//create a POST route for user to login
//app.post('/login,(req,res')

//app.post('/bye', (req, res)=>{
  //  res.send('Bye Bye World!')})


  


app.post('/login', (req, res) => { 
    let data = req.body 
    /*res.send(
       login( data.username, data.password));*/

       const user = login (data.username, data.password)
        res.send(generateToken(user))
    });

    //post route for user to register
app.post('/register', (req, res) => { 
        let data = req.body 
        res.send(
           register( data.username, data.password, data.name, data.email));
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

//json web token
function generateToken(userProfile)
{
    return jwt.sign({userProfile},'s7r0ng_p@5w0rd', {expiresIn: 60 * 60});
}

//to verify JWT token
function verifyToken(req, res, next)
{
    let header = req.headers.authorization
    console.log(header)

    let token = header.split(' ')[1]

    jwt.verify(token, 's7r0ng_p@5w0rd', function(err, decoded) {
        

    if (err) 
        {   
            res.send("Invalid Token") 
        } 
    
        req.user = decoded
        next()
    })
}
    

        //npm install express-jwt
        //npm install bcryptjs




        