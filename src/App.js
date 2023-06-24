import logo from './logo.svg';
import { auth } from './firebase-config.js';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './App.css';

function App() {

  const authFunction = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={authFunction}>Google-Auth</button>
      </header>
    </div>
  );
}

export default App;
