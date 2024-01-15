import { createEffect, type Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { render } from '@engagespot/client';

const App: Component = () => {
   const apiKey = import.meta.env.VITE_ENGAGESPOT_API_KEY;

   // this is for testing purposes
   // write code to get your app users unique identifier instead
   const userId = import.meta.env.VITE_ENGAGESPOT_USER_ID;

   createEffect(() => {
      render('#bellIcon', {
         apiKey,
         userId,
      });
   });

   return (
      <div class={styles.App}>
         <div class={styles.container}>
            <span>Get started with Engagespot</span>
            <div id='bellIcon'> </div>
         </div>

         <header class={styles.header}>
            <img src={logo} class={styles.logo} alt='logo' />
         </header>
      </div>
   );
};

export default App;
