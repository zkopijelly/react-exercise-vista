import LightSwitch from './components/LightSwitch';
import Counter from './components/Counter';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import MousePosition from './components/MousePosition';
import RandomColor from './components/RandomColor';
import FetchData from './components/FetchData';
import UserInfo from './components/UserInfo';
import { createContext, useContext } from 'react';
import './App.css';

export const AppContext = createContext();

function App() {

  const sharedData = {
    theme: 'light',  
    username: 'Jen', 
  };

  return (
    <AppContext.Provider value={sharedData}>
      <div className="app-container">
        <LightSwitch />
        <Counter />
        <ColorPicker />
        <TodoList />
        <MousePosition />
        <RandomColor />
        <FetchData />
        <UserInfo />
      </div>
    </AppContext.Provider>
  );
}

export default App;