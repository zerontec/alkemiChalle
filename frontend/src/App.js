import React from 'react';


import { Route, Routes , BrowserRouter} from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));
const Register = React.lazy(() => import ('./pages/Register/Register') );
const Login = React.lazy(()=> import('./pages/Login/Login'));

function App() {


  return (
   
    <>
     <BrowserRouter>
 
    <Routes>
    <Route path="/" element=   { <React.Suspense fallback={<>...</>}><Home/></React.Suspense>  }/>
    <Route path='dashboard' element= {<React.Suspense fallback={<>...</>}><Dashboard/></React.Suspense> }/>
    <Route path = 'register' element= {<React.Suspense fallback={<>...Cargando</>}><Register/></React.Suspense>}/>
    <Route path = 'login' element= {<React.Suspense fallback={<>...Cargando</>}><Login/></React.Suspense>}/>
    </Routes>

   

      
      </BrowserRouter>
    </>
   
  );
}

export default App;
