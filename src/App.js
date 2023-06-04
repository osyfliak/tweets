import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './Screens/Home/Home';
import { Tweets } from './Screens/Tweets/Tweets';
import { Navbar } from './Components/Navbar/Navbar';
import { GoBack } from './Components/GoBack/GoBack';

export const App = () => {
  return (
    <>
      <Navbar />
      <GoBack/>
      <div className="container">
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route index path="/home" element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
        </Routes>
      </div>
    </>
  );
};
