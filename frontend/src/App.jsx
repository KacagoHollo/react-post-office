import './App.css';
import React, {useState, useEffect} from 'react';
import http from 'axios';


function App() {
  const [list, setList] = useState([])
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [message, setMessage] = useState("")
  const [reference, setRef] = useState(0)

  const loadList = async () => {
    const response = await http.get('http://localhost:3000/api/mails')
    setList(response.data)
  }

  const createMail = async () => {
    await http.post('http://localhost:3000/api/mails', {
      from: from,
      to: to,
      message: message,
      reference: reference,
    })
    loadList();
  };

  return (
    <div className="App">
      <button onClick={() => loadList()}>List mails</button>
        {list.map(mail => (
          <div key={mail.reference}>
            <h3>{mail.from}</h3>
            <h3>{mail.to}</h3>
            <p>{mail.message}</p>
            <h2>{mail.reference}</h2>
          </div> 
        ))}
      <button onClick={() => createMail()}>New mail</button>
      <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)}></input>
      <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)}></input>
      <textarea type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <input type="number" placeholder="Reference" value={reference} onChange={(e) => setRef(e.target.value)}></input>
      <button>Search</button>
    </div>
  );
}

export default App;
