import './App.css';
import ArtistPage from './ArtistPage';
import React from 'react';

function App() {  
  const [show , setShow] = React.useState(false);  
  if(show) {
    return (
      <div className="App">
          <ArtistPage artist={{ 
            id: 'the-beatles',
            name: 'The Beatles',
           }} />
      </div>
    );
  }  else {
    return (
      <button onClick={() => setShow(true)}> Show the album</button>
    )
  }
}

export default App;
