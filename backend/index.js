const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs')
const bodyParser = require('body-parser');
const port = 3000;
const mails = require('./data/mails.json');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());



app.get('/api/mails', (req, res) => {
  res.json(mails)
})

app.get('/api/mails/:reference',( req, res) => {
    const refParam = req.params.reference;
    const mailSelect = mails.filter(mai => mai.reference === Number(refParam));
    return res.json(mailSelect);
    
})

app.post('/api/mails', (req, res) => {
  if (mails.find(mai => mai.reference === req.body.reference)) return res.sendStatus(400);
  
    mails.push({
      from: req.body.from,
      to: req.body.to,
      message: req.body.message,
      reference: req.body.reference,
  })
  fs.writeFileSync("./data/mails.json", JSON.stringify(mails, null, 2))
    
    res.sendStatus(204)
   
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
