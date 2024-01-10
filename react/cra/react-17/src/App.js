import logo from './logo.svg';
import './App.css';
import { Engagespot } from '@engagespot/react-component';

function App() {
   const apiKey = process.env.REACT_APP_ENGAGESPOT_API_KEY;

   // this is for testing purposes
   // write code to get your app users unique identifier instead
   const userId = process.env.REACT_APP_ENGAGESPOT_USER_ID;

   return (
      <div className='App'>
         <header className='App-header'>
            <div className='engagespot-container'>
               {apiKey && userId && <Engagespot apiKey={apiKey} userId={userId} />}
            </div>

            <img src={logo} className='App-logo' alt='logo' />

            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>

            <a
               className='App-link'
               href='https://reactjs.org'
               target='_blank'
               rel='noopener noreferrer'
            >
               Learn React
            </a>
         </header>
      </div>
   );
}

export default App;
