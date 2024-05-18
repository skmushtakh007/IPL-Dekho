import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import MatchDetail from './Component/MatchDetail.jsx'
import Navbar from './Component/Navbar.jsx';
import PointsTable from './Component/PointsTable.jsx';
import News from './Component/News.jsx';



function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navbar />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/pointsTable' element={<PointsTable />} />
                    <Route path='/news' element={<News />} />
                </Route>

                <Route path="/matchDetail/:id" element={<MatchDetail />} />
            </Routes>
        </>
    )
}
export default App;
