import express from 'express';

// ceate root
const app = express();
app.use(express.json())
app.get('/people', async (req, res) => {
       res.send('Carlie')
})

app.post('/people', (req, res) => {
    const person = req.body;
    res.send(`${person.name} has been added`);

})


const port = 5006
app.listen(port, ()=> {
    console.log(`We are Listening ${port}`)
})

