import { Route, Routes} from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import PersonPage from './pages/Person/PersonPage';
import VaccinePage from './pages/Vaccine/VaccinePage';
import VaccinationRecordPage from './pages/Vaccination/VaccinationPage';
import  VaccinationCard  from './pages/VaccineCard/VaccineCardPage';
import LoginPage from './pages/auth/login';





const Router = () => {
    return(
    <Routes>    
    <Route path="/" element={<HomePage />}/>
    <Route path='/persons' element={<PersonPage/>}/>
    <Route path='/vaccine' element={<VaccinePage/>}/>
    <Route path='/vaccination' element={<VaccinationRecordPage/>}/>
    <Route path='/viewCard' element={<VaccinationCard/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    </Routes>
)};

export default Router