import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <small>You are running this application in <b>{process.env.REACT_APP_NOT_SECRET_CODE}</b> mode.</small>
    </div>
  );
}

export default App;
