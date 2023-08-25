import {BrowserRouter, Routes, Route} from  'react-router-dom';
import { Home, SpecialtiesSelect } from '../pages'
 
export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/select' element={<SpecialtiesSelect/>} />
            </Routes>
        </BrowserRouter>
    )
}