import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Publiclayout from './layout/Publiclayout'

import Inicio from './paginas/Inicio'
import Registro from './paginas/Registro'
import OlvidePassword from './paginas/OlvidePassword'
import QuienesSomos from './paginas/QuienesSomos'
import Publicaciones from './paginas/Publicaciones'


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Publiclayout/>}>
               <Route index element={<Inicio/>}/>
               <Route path="quienes-somos" element={<QuienesSomos/>}/>
               <Route path="registrase" element={<Registro/>}/>
               <Route path="resete-password" element={<OlvidePassword/>}/>
               <Route path="publicaciones" element={<Publicaciones/>}/>
              
            </Route>
        </Routes> 
    </BrowserRouter>
  )
}
export default App
