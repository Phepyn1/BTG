import { Route, Routes} from 'react-router-dom'
import HomePage from './Home/HomePage'
import PersonPage from './Person/PersonPage';




const Router = () => {
    return(
    <Routes>    
    <Route path="/" element={<HomePage />}/>
    <Route path='/persons' element={<PersonPage/>}/>
    </Routes>
)};

export default Router