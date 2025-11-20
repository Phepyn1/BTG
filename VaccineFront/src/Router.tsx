import { Navigate, Outlet, Route, Routes} from 'react-router-dom'
import HomePage from './Home/HomePage'




const Router = () => {
    console.log("HOME")
    return(
    <Routes>    
    <Route path="/" element={<HomePage />}/>
    </Routes>
)};

export default Router