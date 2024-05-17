

import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import MatchDetail from './Component/MatchDetail.jsx'


function App() {
    return (
    <>
        <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route path='/matchDetail:id' element={<MatchDetail/>}/>
        </Routes>
    </>
    )
}
export default App;
