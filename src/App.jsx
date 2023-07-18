import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { HomePage, Search } from './route/route'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<Search />} />
      </Routes>

    </>
  )
}

export default App
