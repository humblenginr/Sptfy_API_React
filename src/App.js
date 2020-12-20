
import { useHistory } from "react-router-dom";
import Axios from "axios"
import { useEffect, useState } from "react";
import {Button} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  const history = useHistory();
  const [userName, setUserName] = useState();
  var token


  

  
  useEffect(() => {
    if(window.location.hash !== ""){
       token = window.location.hash.slice(14,173)
      console.log(token);
      Axios.get("https://api.spotify.com/v1/me",{headers:{ Authorization: `Bearer ${token}`  }}).then(
        res => {setUserName(res.data.display_name);
          
        }
      )
    }
  },[])


  return (
    <div>This is spotify api
      {token}
      <br>
      </br>
      <h2>Welcome {userName && userName}</h2>
      <a href="https://accounts.spotify.com/en/authorize?client_id=f29184cb53df43bfb923c99cbd7a1fd3&response_type=token&redirect_uri=http:%2F%2Flocalhost:3000">GetToken</a>
    </div>
    

  );
}

export default App;
