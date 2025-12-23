import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const base_url = 'https://back.helplly.com/api'
    const apiKey = '34ss2f3-a2j2-dd32-bn3m-2kd8393hs22'

    fetch(`${base_url}/index`, {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
        lang:"az",
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors'
    })
      .then(response => {
        console.log('Response status:', response.status)
        console.log('Response headers:', response.headers)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        // Önce text olarak okuyalım, sonra JSON'a parse edelim
        return response.text()
      })
      .then(text => {
        console.log('Raw response:', text)
        try {
          const data = JSON.parse(text)
          console.log('API Response:', data)
        } catch (e) {
          console.log('Response is not JSON:', text)
        }
      })
      .catch(error => {
        console.error('API Error:', error)
        console.error('Error details:', error.message)
      })
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
