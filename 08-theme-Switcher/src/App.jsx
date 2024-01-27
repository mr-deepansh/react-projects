
import { useState ,useEffect} from 'react';
import './App.css';
import { ThemeProvider } from './contexts/Theme';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [themeMode, seThemeMode] = useState('light');
  const darkTheme = () => {
    seThemeMode("dark");
  };

  const lightTheme = () => {
    seThemeMode("light");
  };
  // actual theme change function 

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
      
  }, [themeMode])
  

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>

          </div>
        </div>
      </div>
    </ThemeProvider >
  );
}

export default App;
