import React from 'react'
import Products from './components/Products/Products'
import NavigationBar from "./components/NavigationBar/NavigationBar";
function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Products/>
    </div>
  );
}

export default App;
