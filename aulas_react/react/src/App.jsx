

import './App.css'
import IntroComponent from './components/IntroComponent'

import ConditionalComponent1 from './components/ConditionalComponent1'
import ConditionalComponent2 from './components/e ConditionalComponent2'
import ProductComponent from './components/ProductComponent'

import GenericComponent from './components/GenericComponent'
import MyButtonComponent from './components/MyButtonComponent'

function App() {

  let component;
  let condition = true 
  if(condition) {
    component = <ConditionalComponent1 />
  }
 else {
  component = <ConditionalComponent2 />
 }

 
 

  return (
    <>
    <h1>Componente principal: </h1>
    <IntroComponent/>

    {component}

    <div>
      {condition ? <ConditionalComponent1 />: <ConditionalComponent2 /> }
    </div>
    
    <ProductComponent name = 'Arroz' category = 'Alimento'/>
    <ProductComponent name = 'Martelo' category = 'Ferramenta'/>
   

   <div>

    <GenericComponent>
    <p>Conteúdo da primeira chamada</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    </GenericComponent>
   </div>

   <hr></hr>
    <div>
   <GenericComponent>
    <p>Conteúdo da primeira chamada</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>

    </GenericComponent>
   </div>

   
    </>
  )
}

export default App


