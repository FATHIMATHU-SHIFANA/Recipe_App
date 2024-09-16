import { createContext, useState } from 'react';
import Home from './COMPONENT/Home';
import Recipe from './COMPONENT/Recipe';
import Details from './COMPONENT/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const sample=createContext();
function App() {
  const [recipe, setrecipe] = useState([])
  const [search, setsearch] = useState([])
  const [hide, sethide] = useState(true)
  const [getpro, setgetpro] = useState([])
  return (
    <div>
      <sample.Provider value={{recipe, setrecipe,search, setsearch,hide, sethide,getpro, setgetpro}}>
      <BrowserRouter>
      {hide===true? <Home/> :""}
      {hide===true? <Recipe/> :""}
      <Routes>
          <Route path='/detail' element={<Details/>}/>
      </Routes>
      </BrowserRouter>
      </sample.Provider>
   
    </div>
  );
}

export default App;
export {sample}
