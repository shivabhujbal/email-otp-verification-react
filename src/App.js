
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FormComponent from './components/FormComponent';
import LoginComponent from './components/LoginComponent';

function App() {
  return (
<Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<FormComponent/>}/>
          <Route path="/login" element={<LoginComponent/>} />
          <Route path="/" element={<FormComponent/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
