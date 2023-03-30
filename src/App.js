import { Fragment, useState } from "react";
import { Login } from "./component/login";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Container from "./component/Container";
import Background from "./assets/spot.jpg";
import { Grid } from "@mui/material";


function App() {
  const [auth, setAuth] = useState();
  return (
    <Grid style={{backgroundImage: `url(${Background})`,backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed",height:'100%',minHeight:'100vh'}}>
    <div className="App" >
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login auth={auth} setAuth={setAuth} />}/>
      <Route path='/blogs' element={<Container />}/>
      
      </Routes>
      </BrowserRouter>
    </div>
    </Grid>
  );
}

export default App;
