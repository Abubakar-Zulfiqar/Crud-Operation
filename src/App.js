import { Routes, Route } from 'react-router-dom'

import { Create, View, Edit } from './Components/index'
import Table from './Components/Table/Table'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Create />} />
        <Route exact path='/view' element={<View />} />
        <Route exact path='/table' element={<Table />} />
        <Route exact path='/edit/:id' element={<Edit />} />
      </Routes>
    </>
  )
}

export default App