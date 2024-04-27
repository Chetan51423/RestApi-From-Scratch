const express = require('express')
const users = require('./MOCK_DATA.json');
const { urlencoded, json } = require('body-parser');
const fs = require('fs')

const PORT = 8000;

const app = express();

app.use(express.urlencoded({extended:false}))

app.get('/users',(req, res)=> {
    const html = `<ul >${users.map((user)=> `<li>${user.first_name}</li>`).join('')}</ul>`
    return res.send(html)

})
app.get('/api/users',(req, res)=> {
    return res.json(users)
})
app.get('/api/users/:id', (req, res)=> {
   const id = Number(req.params.id);
   const user = users.find((user) => user.id === id);

    return res.json(user);
})
app.post('/api/users',(req, res)=> {
    const userData = req.body;
    const user = { 
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        gender: userData.gender,
        job: userData.job,
        id: users.length+1
    }
    users.push(user)

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err)=>{8987
        if(err)
        {
            console.error("we got an error while appending in file" , err)
        }
        else
        {
            console.error("data successufully appended in the file " )
        }
    })
    // console.log(JSON.stringify(user))
    return res.json(users)
})
app.patch('/api/users',(req, res)=> {
    const id = Number(req.body.id);
    const data = req.body; 
    const user = users.find((user)=> user.id===id);
    
     user.first_name = data.first_name;
     user.last_name = data.last_name;
     user.email = data.email;
     user.gender = data.gender;
     user.job = data.job;
     
     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
        if(err)
        {
            console.log("got err", err)
        }
        else
        {
            console.log("file appended successufully")
        }
     })


    return res.json(users)
})
app.delete('/api/users',(req, res)=> {
    const id = req.body.id;

    const modifiedUsers = users.filter((user)=> user.id!=id)
    

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(modifiedUsers), (err, data)=>{
        if(err)
        {
            console.log("got an error", err)
        }
        else
        {
            console.log("delete successufully......")
        }
    })
    return res.send(modifiedUsers)
})




app.listen(PORT, ()=> console.log(`Server is running on Port: ${PORT}`))