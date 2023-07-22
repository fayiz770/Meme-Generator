import './App.css';
import Header from './Components/Header';
import Infon from './Components/Infon';
import Meme from './Components/Meme';
import React from 'react';

function App() {
  const [topText, setTopText] = React.useState('')
  const [bottomText, setBottomText] = React.useState('')
  const [memeData, setMemeData] = React.useState([])
  const [url, setUrl] = React.useState('https://i.imgflip.com/30b1gx.jpg')

  function topChange(event){
    setTopText(event.target.value)
  }

  function bottomChange(event){
    setBottomText(event.target.value)
  }

  function getNewMemeImage(){
    let randomNumber = Math.ceil(Math.random() * 99)
    console.log(randomNumber)
    setUrl(memeData[randomNumber].url)
  }

  React.useEffect(() => {
    async function get_memes(){
      const res = await fetch('https://api.imgflip.com/get_memes')
      const data = await res.json()
      setMemeData(data.data.memes)
    }
    get_memes()
  }, [url]
  )
  

  return (
    <div className="App">
     <Header />
     <div className='main'>
      <Infon 
        clicked = {getNewMemeImage} 
        topChange = {topChange} 
        bottomChange = {bottomChange}
      />
      <Meme
        url = {url}
        topText = {topText} 
        bottomText = {bottomText}/>
     </div>
    </div>
  );
}

export default App;
