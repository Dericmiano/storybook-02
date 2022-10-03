import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Screens/Home";
import TodoDetailScreen from "./Screens/TodoDetailScreen";
import TodoUpdateScreen from "./Screens/TodoUpdateScreen";
import TodoCreateScreen from "./Screens/TodoCreateScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>} exact />
          <Route path='/todo/:todoId/' element={<TodoDetailScreen/>} />
          <Route path='/todo/update/:todoId/' element={<TodoUpdateScreen/>} />
          <Route path='/todo/create/' element={<TodoCreateScreen/>} />
      </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
