import { Route, Routes} from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import PersonPage from './pages/Person/PersonPage';
import VaccinePage from './pages/Vaccine/VaccinePage';
import VaccinationRecordPage from './pages/Vaccination/VaccinationPage';
import  VaccinationCard  from './pages/VaccineCard/VaccineCardPage';
import LoginPage from './pages/auth/login';
import PrivateRoute from './components/PrivateRouter';





const Router = () => {
    return(
    <Routes>    
    <Route path="/" element={<HomePage />}/>
    <Route path='/persons' element={<PrivateRoute><PersonPage/></PrivateRoute>}/>
    <Route path='/vaccine' element={<PrivateRoute><VaccinePage/></PrivateRoute>}/>
    <Route path='/vaccination' element={<PrivateRoute><VaccinationRecordPage/></PrivateRoute>}/>
    <Route path='/viewCard' element={<PrivateRoute><VaccinationCard/></PrivateRoute>}/>
    <Route path='/login' element={<LoginPage/>}/>
    </Routes>
)};

export default Router