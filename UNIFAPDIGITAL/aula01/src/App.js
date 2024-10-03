
import './App.css';
import Profile from './Profile';
import Welcome from './Welcome';

function App() {
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent:'center'}}>
      <Welcome />
      <Profile name="João" age="25" />
      <Profile name="Maria" age="20" />
      <Profile name="José" age="30" />
    </div>
  );
}

export default App;
