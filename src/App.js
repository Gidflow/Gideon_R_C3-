import logo from './logo.svg';
import './App.css';
import { Button } from './component/Button';

function App() {
  return (
    <div>
  <h1>
    Gideon Okyere
  </h1>
  <h3>Software Engineer</h3>
  <h4>Skills</h4>
  <ul>
    <li>JavaScript</li>
    <li>React</li>
    <li>HTML 5</li>
  </ul>
  <div class='flex'>
  <Button message = "Login" />
  <Button message = "Signin" />
  </div>
    </div>
  );
}

export default App;
