import TablePrice from './components/TablePrice'

import './App.css'

function App() {


  return (
    <>
     <TablePrice products={[
        { id: '1', name: 'Maça', price: '10,00', weight: '20,50' },
        { id: '2', name: 'Banana', price: '8,00', weight: '40,70' },
        { id: '3', name: 'Melancia', price: '7,00', weight: '100,00' },
        { id: '4', name: 'Melão', price: '9,00', weight: '30,00' },
        { id: '5', name: 'Uva', price: '11,00', weight: '50,00' }
      ]}/>
      
    </>
  )
}

export default App
