import './App.css';
import React, {useState, useEffect} from 'react';
import http from 'axios';


function App() {
  const [list, setList] = useState([])
  
  const [allMails, setAllMails] = useState(false)
  const [createMails, setCreateMails] = useState(false)
  const [searchMails, setSearchMails] = useState(false)

  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [message, setMessage] = useState("")
  const [reference, setRef] = useState("")

  const [searchInp, setSearchInp] = useState("")

  const loadList = async () => {
    const response = await http.get('http://localhost:3000/api/mails')
    setList(response.data)
  }

  useEffect(() => {
    loadList()
  }, [])

  const createFunc = async () => {
    await http.post('http://localhost:3000/api/mails', {
      from: from,
      to: to,
      message: message,
      reference: reference,
    })
    loadList();
    setFrom("")
    setTo("")
    setMessage("")
    setRef("")
  };

  const searchFunc = async () => {

    try {
      const response = await http.get(`http://localhost:3000/api/mails${searchInp}`)
  
      setSearchMails(response.data)
      
    } catch (error) {
      console.log('error');
    }
  }

  return (
    <div className="App">
      <div className='main-buttons'>
        <button onClick={() => setAllMails(!allMails)}>List mails</button>
        <button onClick={() => setCreateMails(!createMails)}>New mail</button>
        <button onClick={() => setSearchMails(!searchMails)}>Search</button>
      </div>
      {searchMails ? <div className='search-mail'>
        <input type="search" value={searchInp} placeholder='Only number!' onChange={(e) => setSearchInp(e.target.value)} />
        <button onClick={searchFunc}>Browse</button>
      </div> : ""
      }
      <div className='all-mails'>
        {allMails ? list.map(mail => (
          <div className='list-mails' key={mail.reference}>
            <li>From: {mail.from}</li>
            <li>To: {mail.to}</li>
            <li>Message: {mail.message}</li>
            <li>Reference number: {mail.reference}</li>
          </div> 
        )) : ""
      }
      </div>
      {createMails ? <div className="input-form">
        <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)}></input>
        <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)}></input>
        <textarea type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <input type="number" placeholder="Reference" value={reference} onChange={(e) => setRef(e.target.value)}></input>
        <button onClick={() => createFunc()}>Send</button>
      </div> : ""
      }
      
    </div>
  );
}

export default App;
