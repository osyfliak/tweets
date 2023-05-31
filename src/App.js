import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Screens/Home/Home";
import { Tweets } from "./Screens/Tweets/Tweets";

export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/tweets" element={<Tweets />} />
    </Routes>
  );
};
