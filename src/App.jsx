import styles from './App.module.css'
import Main from './components/Main/Main';
import Page from './components/SecondPage/Page';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(null)
  const [display, setDisplay] = useState(true)
  
  
  
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {display
          ?
          <Main display={display}
            setDisplay={setDisplay}
            count={count}
            setCount={setCount}
          />
          
          :
          <Page count={count}
          />}
      </div>
    </div>
  );
}

export default App;
