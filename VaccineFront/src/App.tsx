
import { BrowserRouter} from 'react-router-dom'
import Router from './Router'
import Footer from './components/Footer';
import { Header } from './components/Header';


function App() {
  
return(
   <BrowserRouter>  
      <div className="min-h-screen ">
        <Header />
        
        <main>
          <Router/>
        </main>

        <Footer/>
        
      </div>
    </BrowserRouter>
);
}
export default App
