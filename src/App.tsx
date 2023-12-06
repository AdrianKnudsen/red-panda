
import { LayoutBase } from './Pages/LayoutBase'
import { LandingPage } from './Pages/LandingPage'
import { GamePage } from "./Pages/GamesPage/gamePage"
import { NewsPage } from "./Pages/NewsPage/newsPage"
import { ShoppingCardPage } from './Pages/ShoppingCardPage/shoppingCardPage'
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

        <Route path='/' element={<LayoutBase />} >
          <Route index element={<LandingPage />} />
          <Route path='/game' element={<GamePage />} />
          <Route path='/new' element={<NewsPage />} />
          <Route path='/shopping' element={<ShoppingCardPage />} />
          <Route path='*' element={<h1>404 Not Found</h1>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
