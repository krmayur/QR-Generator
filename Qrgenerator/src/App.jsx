import { useState } from 'react'
import './App.css'
import QRCode from 'react-qr-code'

function App() {
  const [qrcode, setQrcode] = useState("");
  const [input, setInput]=useState("");

  function handleGenerate(){
    setQrcode(input);
  }
  return (
    <>
    <div className='fullbody'>
      <div className='body'>
      <h1 className='heading'>QR Code Generator</h1>
        <input className='input1' onChange={(e) => setInput(e.target.value)} type='text' name='qr-code' placeholder='Enter to change to Qr'></input>
        <button className='btn' onClick={handleGenerate}>Generate</button>
        <QRCode className='qrval' value={qrcode} size={400}/>
      </div>
    </div>
    </>
  )
}

export default App
