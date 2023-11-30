import { LayoutBase } from './Pages/LayoutBase'
import { LandingPage } from './Pages/LandingPage'
import './App.css'
import { 
  BrowserRouter,
  Routes,
  Route, 
} from 'react-router-dom'



export function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutBase />}>
          <Route index element={<LandingPage />}/>
          <Route path='*' element={<h1>404 Not Found</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


