import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button/Button'
import { List } from './components/ui/List/List'
import Modal from './components/ui/layout/Modal/Modal'
import ModalText from './components/ui/layout/Modal/Modal'
import ModalConfirm from './components/ui/layout/Modal/ModalConfirm'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const confirm = () => {
    console.log("confirmed")
    setIsOpen(false)
  }
  const decline = () => {
    console.log("declined")
    setIsOpen(false)
  }
  const [count, setCount] = useState(0)
  const reset = () => {
    setCount(0)
  }
  const decrement10 = () => {
    setCount((count) => count - 10)
  }
  const increment10 = () => {
    setCount((count) => count + 10)
  }
  const decrement = (amount) => {
    setCount((count) => count - amount)
  }
  const increment = (amount) => {
    setCount((count) => count + amount)
  }

  let object = [
    {
      id: 1,
      title: "title",
      description: "description",
      buttonText: "Click Me 1"
    },
    {
      id: 2,
      title: "title",
      description: "description",
      buttonText: "Click Me 2"
    },
    {
      id: 3,
      title: "title",
      description: "description",
      buttonText: "Click Me 3"

    }
  ]

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
        <div className="counter">
          <Button onClick={reset}>Reset</Button>
          <Button onClick={decrement10}>-10</Button>
          <Button onClick={()=>decrement(5)}>-5</Button>
          <h1>{count}</h1>
          <Button onClick={()=>increment(5)}>+5</Button>
          <Button onClick={increment10}>+10</Button>
          <Button onClick={toggleModal} >Modal</Button>
        </div>
        <List objectList={object}></List>
      </div>
      <Modal opened={isOpen} toggleModal={toggleModal}>
        <ModalText></ModalText>
        <ModalConfirm confirm={toggleModal} decline={toggleModal}></ModalConfirm>
      </Modal>
    </>
  )
}

export default App
