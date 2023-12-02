import { Route, Routes } from 'react-router-dom';

import { Home } from './Components/Home/Home';
import { NavBar } from './Components/NavBar/NavBar';
import { DataStore } from './DataStore/DataStore';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';

// import { Error } from './Components/Error/Error';

import './App.scss';

const store = new DataStore();

export default (
    <>
        <NavBar />
        <div className='app-body'>
            <Routes>
                <Route path='/' element={<Home store={store} />} />
                <Route path='/projects' element={<Projects store={store} />} />
                <Route path='/contact' element={<Contact />} />
                {/* <Route path='*' element={<Error />} /> */}
            </Routes>
        </div>
        <br />
        <Footer />
    </>
);