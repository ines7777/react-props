import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';



function App() {
  const alertMyInput = (name) => alert("my name is ines"+name);
  return (
    <div className="App">
      <Profile fullName="inesch"  bio="c ines"  profession="ingenieur" alertMyInput={alertMyInput} ><img src="/ines.jpeg" /></Profile>
      
      
    </div>
  );
}

export default App;
