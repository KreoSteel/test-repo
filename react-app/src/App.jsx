import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button/Button'
import { Grid } from './components/Grid/Grid'
import { GridItem } from './components/Grid/GridItem'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
        <Grid>
          <GridItem
            image="\Images\natureimage.jpg"
            title="Title for grid-item"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse praesentium quidem dignissimos delectus nemo omnis. Sit harum ad porro pariatur?"
            ButtonText="Button #1!"
            onClick={() => window.open("http://github.com")}>
          </GridItem>
          <GridItem
            image="\Images\natureimage2.jpg"
            title="Title for grid-item"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse praesentium quidem dignissimos delectus nemo omnis. Sit harum ad porro pariatur?"
            ButtonText="Button #2!"
            onClick={() => window.open("http://youtube.com")}>
          </GridItem>
          <GridItem
            image="\Images\natureimage3.jpg"
            title="Title for grid-item"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse praesentium quidem dignissimos delectus nemo omnis. Sit harum ad porro pariatur?"
            ButtonText="Button #3!"
            onClick={() => window.open("http://linkedin.com")}>
          </GridItem>
          <GridItem
            image="\Images\natureimage4.jpg"
            title="Title for grid-item"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse praesentium quidem dignissimos delectus nemo omnis. Sit harum ad porro pariatur?"
            ButtonText="Button #4!"
            onClick={() => window.open("http://x.com")}>
          </GridItem>
          <GridItem
            image="\Images\natureimage5.jpg"
            title="Title for grid-item"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse praesentium quidem dignissimos delectus nemo omnis. Sit harum ad porro pariatur?"
            ButtonText="Button #5!" 
            onClick={() => window.open("http://google.com")}>
          </GridItem>
          <GridItem
            image="\Images\natureimage6.jpg"
            title="Title for grid-item"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse praesentium quidem dignissimos delectus nemo omnis. Sit harum ad porro pariatur?"
            ButtonText="Button #6!"
            onClick={() => window.open("http://youtube.com")}>
          </GridItem>
        </Grid>
      </div>
    </>
  )
}

export default App
