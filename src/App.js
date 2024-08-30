import { Route, BrowserRouter , Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgotpassword from './pages/Forgotpassword';
import PageNotFound from './pages/PageNotFound';
import Dashhboard from './pages/backend/Dashhboard';
import Product from './pages/backend/Product';
import Report from './pages/backend/Report';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact={true} element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgotpassword' element={<Forgotpassword />} />
                <Route path='/*' element={<PageNotFound />} />

                <Route path='/backend/dashboard' Component={Dashhboard} />
                <Route path='/backend/product' Component={Product} />
                <Route path='/backend/report' Component={Report} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;