const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(cors());

let mails = [];
let ref = 0;


app.get('/api/mails', (req, res) => {
  res.json(mails)
})

app.get('/api/mails/:ref',( req, res) => {
    const refParam = req.params.ref;
    const mailSelect = mails.filter(mai => mai.ref === Number(refParam));
    return res.json(mailSelect);
    
})

app.post('/api/mails', (req, res) => {
    const mail = {
        from: req.body.from,
        to: req.body.to,
        message: req.body.message,
        reference: ref++,
    }
    // if (req.body.ref === res.body.ref) return res.sendStatus(400);

    mails.push(mail);
    res.send("Done")
    
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
