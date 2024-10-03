
import './App.css';
import Profile from './Profile';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <div  style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent:'center', gap: '5px'}}> 
        <Welcome />
        <Profile name="João" age="25" />
        <Profile name="Maria" age="20" />
        <Profile name="José" age="30" />
      </div>
      <hr />

      
      </div>

 
  );
}

export default App;
