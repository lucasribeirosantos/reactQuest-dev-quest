import './App.css'
import Paragraph from './components/paragaph/paragraph'
import Button from './components/button/button'

function App() {

  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, enim iste, voluptas facilis qui cumque quod velit ducimus, ex ratione quidem eos sapiente expedita reiciendis perspiciatis quibusdam est laudantium minus."

  function alertButton (label) {
    alert(`A label desse botão é ${label}`)
  }

  return (
    <>
      <Paragraph textColor="red">
        {text}
      </Paragraph>
      
      <Button label="Baixar CV" alertButton={alertButton} />
    </>
  )
}

export default App
