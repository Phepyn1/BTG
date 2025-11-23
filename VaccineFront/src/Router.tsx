import { Route, Routes} from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import PersonPage from './pages/Person/PersonPage';
import VaccinePage from './pages/Vaccine/VaccinePage';
import VaccinationRecordPage from './pages/Vaccination/VaccinationPage';





const Router = () => {
    return(
    <Routes>    
    <Route path="/" element={<HomePage />}/>
    <Route path='/persons' element={<PersonPage/>}/>
    <Route path='/vaccine' element={<VaccinePage/>}/>
    <Route path='/vaccination' element={<VaccinationRecordPage/>}/>
    </Routes>
)};

export default Router