import React from 'react'
import Weather from './Components/Weather'

const App = () => {
  return (
  <div className="container-fluid d-grid">
    <div className="weather d-flex align-items-center justify-content-center">
      <Weather />
    </div>
  </div>
  )
}

export default App
