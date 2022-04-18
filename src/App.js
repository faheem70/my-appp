
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';
import {useState } from 'react'
import Alert from './Alert';
function App() {
  const [mode, setMode]=useState('light');
   const [alert, setAlert] = useState(null);

   const showAlert=(message, type)=>{
     setAlert({
       msg:message,
       type:type

     })
     setTimeout(() => {
       setAlert(null);
    }, 1500);
   }
  const  toggleMode=()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Light Mode has enabled", "Succes: ");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Dark Mode has enabled", "Succes: ");
    }

  }
 
  return (
    <>
      
<Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<About/>
  <div className="container">
    
  <TextForm  showAlert={showAlert} heading="Enter your text" mode={mode}/>
    </div>
    </>
  );
}

export default App;
