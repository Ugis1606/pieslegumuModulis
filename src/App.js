import Navbar from './Navbar';
import Head from './Head';
import Main from './Main';
import Grupa from './Grupa';
import Alert from './Alert';
import GrupasBtn from './GrupasBtn';
import { useState } from 'react';


// json-server --watch data/db.json
// npm run start

function App() {
  const [pieteikums, setPieteikums] = useState('');
  const [buvnieks, setBuvnieks] = useState('');
  const [nosaukumsTA, setNosaukumsTA] = useState('');
  const [kva, setKva] = useState('');
  const [trafTame, setTrafTame] = useState('');
  const [trafMat, setTrafMat] = useState('');
  const [esosa, setEsosa] = useState('');
  const [esosU, setEsosU] = useState('');
  const [pieprasita, setPieprasita] = useState('');
  const [piepU, setPiepU] = useState('');
  const [trafProj, setTrafProj] = useState('');
  const [trafPiepr, setTrafPiepr] = useState('');
  const [isCheckedTraf, setIsCheckedTraf] = useState(0);


  const [trafKop, setTrafKop] = useState('0,00');
  const [trafKopLiet, setTrafKopLiet] = useState('0,00');


  const [fcolor, setFcolor] = useState('black');
  const [keyss, setKeyss] = useState([]);
  const [secpiet, setSecpiet] = useState('');
  const [onclickSave, setOnclickSave] = useState(false);
  const [onclickErase, setOnclickErase] = useState(false);
  const [alertOn, setAlertOn] = useState(false);


  return (
    <div className="App">
      <Head />
      <Alert alertOn = {alertOn}/>
      <Navbar setOnclickSave = {setOnclickSave}
              setOnclickErase = {setOnclickErase}/>
      <div className="content">
        <Main pieteikums = {pieteikums} 
              setPieteikums = {setPieteikums} 
              buvnieks = {buvnieks} 
              setBuvnieks = {setBuvnieks}
              nosaukumsTA = {nosaukumsTA} 
              setNosaukumsTA = {setNosaukumsTA}
              kva = {kva} 
              setKva = {setKva}
              trafTame = {trafTame} 
              setTrafTame = {setTrafTame}
              trafMat = {trafMat} 
              setTrafMat = {setTrafMat}
              esosa = {esosa}
              setEsosa = {setEsosa}
              esosU = {esosU} 
              setEsosU = {setEsosU}
              pieprasita = {pieprasita} 
              setPieprasita = {setPieprasita}
              piepU = {piepU} 
              setPiepU = {setPiepU}
              trafPiepr = {trafPiepr} 
              trafProj = {trafProj} 
              setTrafProj = {setTrafProj}
              setTrafPiepr = {setTrafPiepr}
              isCheckedTraf = {isCheckedTraf} 
              setIsCheckedTraf = {setIsCheckedTraf}


              trafKop = {trafKop} 
              setTrafKop = {setTrafKop}
              trafKopLiet = {trafKopLiet} 
              setTrafKopLiet = {setTrafKopLiet}


              fcolor = {fcolor}
              setFcolor = {setFcolor}
              alertOn = {alertOn}
              setAlertOn = {setAlertOn}
              setKeyss = {setKeyss}
              keyss = {keyss}
              secpiet = {secpiet}
              setSecpiet = {setSecpiet}
              onclickSave = {onclickSave}
              setOnclickSave = {setOnclickSave}
              onclickErase = {onclickErase}
              setOnclickErase = {setOnclickErase}/>
        <GrupasBtn pieteikums = {pieteikums}
                   buvnieks = {buvnieks}
                   nosaukumsTA = {nosaukumsTA} 
                   kva = {kva} 
                   trafTame = {trafTame} 
                   trafMat = {trafMat} 
                   esosa = {esosa}
                   esosU = {esosU} 
                   pieprasita = {pieprasita} 
                   piepU = {piepU} 
                   trafProj = {trafProj} 
                   trafPiepr = {trafPiepr} 
                   setIsCheckedTraf = {setIsCheckedTraf}
                   isCheckedTraf = {isCheckedTraf} 


                   setKeyss = {setKeyss}/>
        <Grupa  pieteikums = {pieteikums}
                setPieteikums = {setPieteikums}
                setBuvnieks = {setBuvnieks}
                setNosaukumsTA = {setNosaukumsTA}
                setKva = {setKva}
                setTrafTame = {setTrafTame}
                setTrafMat = {setTrafMat}
                setEsosa = {setEsosa}
                setEsosU = {setEsosU}
                setPieprasita = {setPieprasita}
                setPiepU = {setPiepU}
                setTrafProj = {setTrafProj}
                setTrafPiepr = {setTrafPiepr}
                setIsCheckedTraf = {setIsCheckedTraf}
                isCheckedTraf = {isCheckedTraf} 


                keyss = {keyss}
                setKeyss = {setKeyss}
                setSecpiet = {setSecpiet}/>
      </div>
    </div>
    
  );
}

export default App;


