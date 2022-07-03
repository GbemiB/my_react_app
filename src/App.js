import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import OnboardingForm from './component/OnboardingForm';

function App() {
  return (

    <Router>

        <div className='container'>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <Header />
                            <OnboardingForm />  
                           
                        </>
                    }
                ></Route>
                {/* <Route path='/about' element={<AboutPage />} /> */}
            </Routes>

            {/* <AboutIconLink /> */}
        </div>
    </Router>
)

}

export default App
