import React from 'react';
import Navbar from './components/Navbar/Navbar';    
import Footer from './components/Footer/Footer';
import { Route, Routes , BrowserRouter} from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));


function App() {


  return (
   
    <>
     <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element=   { <React.Suspense fallback={<>...</>}><Home/></React.Suspense>  }/>
    <Route path='dashboard' element= {<React.Suspense fallback={<>...</>}><Dashboard/></React.Suspense> }/>
    </Routes>

   

      <Footer/>
      </BrowserRouter>
    </>
   
  );
}

export default App;
