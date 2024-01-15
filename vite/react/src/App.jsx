import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Engagespot } from '@engagespot/react-component';

function App() {
   const apiKey = import.meta.env.VITE_ENGAGESPOT_API_KEY;

   // this is for testing purposes
   // write code to get your app users unique identifier instead
   const userId = import.meta.env.VITE_ENGAGESPOT_USER_ID;

   return (
      <>
         <div className='container'>
            <a href='https://vitejs.dev' target='_blank'>
               <img src={viteLogo} className='logo' alt='Vite logo' />
            </a>

            <div className='card'>
               Get Started with EngageSpot{' '}
               {apiKey && userId && <Engagespot apiKey={apiKey} userId={userId} />}
            </div>

            <a href='https://react.dev' target='_blank'>
               <img src={reactLogo} className='logo react' alt='React logo' />
            </a>
         </div>
         <h1>Vite + React</h1>
      </>
   );
}

export default App;
