import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState<string>('#000000')
  const [colorArr, setColorArr] = useState<string[]>([])

  function handleClickAnswer(selectedColor: string) {
    if (selectedColor === color) {
      alert('Correct!');
      generateColorGame();
    } else {
      alert('Wrong! Try again.');
      // setColor(generateHexColor());
    }

  }

  const generateHexColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
  }

  function generateColorGame() {
    const colorAnswer = generateHexColor();
    setColor(colorAnswer);
    let colors = [];
    if (colors.length <= 3) {
      colors.push(colorAnswer);
      for (let i = 0; i < 2; i++) {
        colors.push(generateHexColor());
      }
      setColorArr(colors);
    }
  }

  colorArr.sort(() => Math.random() - 0.5);


  useEffect(() => {
    generateColorGame();
  }, [])

  return (
    <div className='container'>
      <div className='content' style={{ backgroundColor: color }}>

      </div>
      <div className='buttonContainer'>
        {colorArr.map((color) => (
          <button key={color} onClick={()=>handleClickAnswer(color)} >{color}</button>
        ))}
      </div>
    </div>
  )
}

export default App
