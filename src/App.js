import { useEffect, useState } from 'react';
import MainPages from './pages/mainPage';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash
        ? (<SplashScreen />)
        : (<MainPages />)}
    </>
  );
}

export default App;
