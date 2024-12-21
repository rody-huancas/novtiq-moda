import { useState } from "react"
import Modal from "./components/Modal/Modal"

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Abrir Modal
      </button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Mi Modal"
        size="2xl"
        position="center"
      >
        <p>Contenido del modal...</p>
      </Modal>
    </>
  )
}

export default App