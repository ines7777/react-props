import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';



function App() {
  const alertMyInput = () => alert("my name is ines");
  return (
    <div className="App">
      <Profile fullName="inesch"  bio="c ines"  profession="ingenieur" />
      <Profile><img src="/ines.jpeg" /></Profile>
      <Profile alertMyInput={alertMyInput}/>
    </div>
  );
}

export default App;
