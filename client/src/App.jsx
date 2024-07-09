import React from 'react';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { DataProvider } from './components/Setup';

function App() {
  return (
    <DataProvider>
      {/* Welcome Page */}
      <Home/>

      {/* Quiz Page */}
      <Quiz/>

      {/* Result Page */}
      <Result/>

    </DataProvider>
  );
}

export default App;
