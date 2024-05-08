import './App.css'
import IntroComponent from './components/IntroComponent'
import EventComponent from './components/EventComponent'
import ConditionalComponent1 from './components/ConditionalComponent1';
import ConditionalComponent2 from './components/ConditionalComponent2';
import ProductComponent from './components/ProductComponent';
import GenericComponent from './components/GenericComponent';


function App() {

  let component;
  let condition = true;
  if(condition) {
    component =<ConditionalComponent1 />
  } else {
    component = <ConditionalComponent2 />
  }


  
  

  return (
    <>
    <h1>Componente Principal: </h1>
      <IntroComponent />
      <EventComponent />

      <div>
        {condition ? <ConditionalComponent1 /> : <ConditionalComponent2 />}
      </div>

      <ProductComponent name='Arroz' category='Alimento' />
      <ProductComponent name='Martelo' category='Ferramenta' />


      <div>
        <GenericComponent>

          <p>Eu sou o primeiro conteúdo fornecido pelo componente pai</p>
          <hr/>
        </GenericComponent>
      </div>
      <div>
        <GenericComponent>

          <p>Eu sou o segundo conteúdo fornecido pelo componente pai</p>

          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </GenericComponent>
      </div>
      
      
      </>
      
  )
}

export default App
