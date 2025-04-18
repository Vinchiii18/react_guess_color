import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState<string>('#000000')
  const [colorArr, setColorArr] = useState<string[]>([])

  const handleClickAnswer = (selectedColor: string) => {
    if (selectedColor === color) {
      alert('Correct!');
      generateColorGame();
    } else {
      alert('Wrong! Try again.');
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

  const generateColorGame = () => {
    const colorAnswer = generateHexColor()
    setColor(colorAnswer)

    const colors = [colorAnswer]

    // Add 2 unique decoys
    while (colors.length < 3) {
      const newColor = generateHexColor()
      if (!colors.includes(newColor)) {
        colors.push(newColor)
      }
    }

    // Shuffle the array
    const shuffled = colors.sort(() => Math.random() - 0.5)
    setColorArr(shuffled)
  }

  useEffect(() => {
    generateColorGame()
  }, [])

  return (
    <div className='container'>
      <div className='content' style={{ backgroundColor: color, height: '200px', marginBottom: '20px' }} />

      <div className='buttonContainer'>
        {colorArr.map((option) => (
          <button key={option} onClick={() => handleClickAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
