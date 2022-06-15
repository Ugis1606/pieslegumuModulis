import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';


const Main = (proms) => {
  const buvnieki = ["", "VOLTS", "KESTO", "OMS", "LEM"];
  const u = ["", "0,23", "0,42", "10", "20"];
  const kva = ["", " 16 ", " 25 ", " 30 ", " 40 ", " 50 ", " 63 ", "100", "160", "250", "400", "630", "1000"];
  const klizb = ["ZS", "ZSp", "VS", "PROJ", "SAD"];
  const skers = ["", "35", "50", "70", "95", "120", "150", "185", "240"];
  const taKVAuzA = ["", "", " 16 ", "20", " 25 ", "35", " 30 ", "40", " 40 ", "50", " 50 ", "63", " 63 ", "80", "100", "144", "160", "231", "250", "361", "400", "577", "630", "909", "1000", "1440"];
  let save = {}, grupasPiet = [],  keys = [], grObject = [];
  const [trafSum, setttTrafSum] = useState(0.00);

  const handleCheckTraf = () => {
    if(proms.isCheckedTraf === 0) {
      proms.setIsCheckedTraf(1);
      // setTrafSum(+proms.trafTame.replace(",", '.').replace(" ", '')
      //   + +proms.trafMat.replace(",", '.').replace(" ", ''));
      //       if(proms.trafPiepr !== "" && proms.trafProj !== "") 
      //       proms.setTrafKopLiet((Math.round((trafSum * +proms.trafPiepr / +proms.trafProj) * 100)/100));
      //       else proms.setTrafKopLiet(trafSum);
    } else {proms.setIsCheckedTraf(0); proms.setTrafKopLiet(0);}
  };

  const handleImport = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/saves/')
    .then(res => {
      if (!res.ok) { 
        throw Error('could not fetch the data for that resource');
      } 
      return res.json();
    })
    .then(data => {
      const result = data.filter( (d) => d.pieteikums === proms.pieteikums);
      if(result.length !== 0) {
        sessionStorage.clear();
              proms.setBuvnieks(result[0].buvnieks);
              proms.setNosaukumsTA(result[0].nosaukumsTA);
              proms.setKva(result[0].kva);
              proms.setTrafTame(result[0].trafTame);
              proms.setTrafMat(result[0].trafMat);
              proms.setEsosa(result[0].esosa);
              proms.setEsosU(result[0].esosU);
              proms.setPieprasita(result[0].pieprasita);
              proms.setPiepU(result[0].piepU);
              proms.setTrafProj(result[0].trafProj);
              proms.setTrafPiepr(result[0].trafPiepr);
              proms.setIsCheckedTraf(result[0].isCheckedTraf);


        result[0].grupasPiet.forEach((item) => {
          grObject = {
            pieteikums: item.pieteikums, esosa: item.esosa, esosU: item.esosU,
            pieprasita: item.pieprasita, piepU: item.piepU, trafProj: item.trafProj, trafPiepr: item.trafPiepr,
            isCheckedTraf: item.isCheckedTraf
          
          };
          sessionStorage.setItem(item.pieteikums, JSON.stringify(grObject));
          keys.push(item.pieteikums);
        });
        proms.setKeyss(keys); 
        localStorage.setItem("GrupasIndex", proms.pieteikums);
      };
    })
  }
  
  const handleSave = () => {
    if (sessionStorage.length > 0) {
      const pieteikums = JSON.parse(sessionStorage.getItem(localStorage.getItem("GrupasIndex"))).pieteikums;
      const esosa = JSON.parse(sessionStorage.getItem(localStorage.getItem("GrupasIndex"))).esosa;
      const esosU = JSON.parse(sessionStorage.getItem(localStorage.getItem("GrupasIndex"))).esosU;
      const pieprasita = JSON.parse(sessionStorage.getItem(localStorage.getItem("GrupasIndex"))).pieprasita;
      const piepU = JSON.parse(sessionStorage.getItem(localStorage.getItem("GrupasIndex"))).piepU;
      const trafProj = JSON.parse(sessionStorage.getItem(localStorage.getItem("GrupasIndex"))).trafProj;
      const trafPiepr = JSON.parse(sessionStorage.getItem(localStorage.getItem("GrupasIndex"))).trafPiepr;
      const isCheckedTraf = JSON.parse(sessionStorage.getItem(localStorage.getItem("GrupasIndex"))).isCheckedTraf;
      
          proms.setPieteikums(pieteikums);    
          proms.setEsosa(esosa);
          proms.setEsosU(esosU);
          proms.setPieprasita(pieprasita);
          proms.setPiepU(piepU);
          proms.setTrafProj(trafProj);
          proms.setTrafPiepr(trafPiepr);
          proms.setIsCheckedTraf(isCheckedTraf);

      proms.setSecpiet(pieteikums);
      proms.keyss.map((item) => (
      grupasPiet.push({pieteikums: JSON.parse(sessionStorage.getItem(item)).pieteikums,
                        esosa: JSON.parse(sessionStorage.getItem(item)).esosa,
                        esosU: JSON.parse(sessionStorage.getItem(item)).esosU,
                        pieprasita: JSON.parse(sessionStorage.getItem(item)).pieprasita,
                        piepU: JSON.parse(sessionStorage.getItem(item)).piepU,
                        trafProj: JSON.parse(sessionStorage.getItem(item)).trafProj,
                        trafPiepr: JSON.parse(sessionStorage.getItem(item)).trafPiepr,
                        isCheckedTraf: JSON.parse(sessionStorage.getItem(item)).isCheckedTraf

                      })));
              save = { pieteikums: pieteikums, buvnieks: proms.buvnieks ,
                       nosaukumsTA: proms.nosaukumsTA, kva: proms.kva, trafTame: proms.trafTame,
                       trafMat: proms.trafMat, esosa: esosa, esosU: esosU, pieprasita: pieprasita,
                       piepU: piepU, trafProj: trafProj, trafPiepr: trafPiepr, isCheckedTraf: isCheckedTraf,
                       grupasPiet: grupasPiet };
    }  else   save = { pieteikums: proms.pieteikums, buvnieks: proms.buvnieks,
                       nosaukumsTA: proms.nosaukumsTA, kva: proms.kva, trafTame: proms.trafTame,
                       trafMat: proms.trafMat, esosa: proms.esosa, esosU: proms.esosU, pieprasita: proms.pieprasita,
                       piepU: proms.piepU, trafProj: proms.trafProj, trafPiepr: proms.trafPiepr, isCheckedTraf: proms.isCheckedTraf,  grupasPiet: grupasPiet };
    
    fetch('http://localhost:3000/saves/')
      .then(res => {
         return res.json();
           })
        .then(data => {
        const re = data.filter((d) => d.pieteikums === proms.secpiet);
        if(re.length === 0) {
            fetch('http://localhost:3000/saves/', {
              method: 'POST',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(save)
            })
          } else {
            fetch('http://localhost:3000/saves/' + re[0].id, {
              method: 'PUT',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(save)
            })
          }
      })
      setTimeout(() => {
      proms.setAlertOn(true)
      }, 500);
      proms.setAlertOn(false)
  }

        useEffect(() => {
          if (+proms.trafPiepr > +proms.trafProj)  proms.setFcolor("red"); else proms.setFcolor("black");
          if (sessionStorage.length === 0) {
            proms.setSecpiet(proms.pieteikums);
            proms.setIsCheckedTraf(1); 
          }

              setttTrafSum(+proms.trafTame.replace(",", '.').replace(" ", '')
              + +proms.trafMat.replace(",", '.').replace(" ", ''));

                proms.setTrafKop(trafSum);
                    if(proms.trafPiepr !== "" && proms.trafProj !== "") 
                    proms.setTrafKopLiet(proms.isCheckedTraf * 
                      (Math.round((trafSum * +proms.trafPiepr / +proms.trafProj) * 100)/100));
                    else proms.setTrafKopLiet(proms.isCheckedTraf * trafSum);
        },[proms, trafSum, proms.pieteikums, proms.kva, proms.trafTame, proms.trafMat, proms.trafPiepr, proms.trafProj, proms.isCheckedTraf])
        
        useEffect(() => {
          if(proms.onclickErase === true) {
              sessionStorage.clear();
              window.location.reload();
              proms.setOnclickErase(false); }
          if(proms.onclickSave === true) {
              handleSave();
              proms.setOnclickSave(false); }
              //eslint-disable-next-line
        },[proms, proms.onclickSave, proms.onclickErase])

        window.onunload = () => sessionStorage.clear();
        


      return (
        <div className="main">
            <div className="ievadlauki">
              <div className="numurs">
                  Pieteikuma Nr:
                <input type="text"
                       value={proms.pieteikums}
                       onChange={(e) => proms.setPieteikums(e.target.value)}                    
                       onBlur={handleImport}/>
              </div>
              <div className="buvnieki">
                  Būvnieks:
                <select
                   value={proms.buvnieks}
                   onChange={(e) => proms.setBuvnieks(e.target.value)} >
                  {buvnieki.map(item => 
                   <option key={item} value={item}>{item}</option>
                  )}
                </select>
              </div>
              <div className="esosa">
                  Esošā:
                <input type="text"
                       value={proms.esosa}
                       onChange={(e) => proms.setEsosa(e.target.value)}/>
                 A
                 <select
                    value={proms.esosU}
                    onChange={(e) => proms.setEsosU(e.target.value)} >
                    {u.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>
              <div className="pieprasita">
                  Pieprasītā:
                <input type="text"
                       value={proms.pieprasita}
                       onChange={(e) => {
                         proms.setPieprasita(e.target.value)
                          if(proms.kva !== "") proms.setTrafPiepr(e.target.value);}}/>
                 A
                 <select
                    value={proms.piepU}
                    onChange={(e) => proms.setPiepU(e.target.value)} >
                    {u.map(item => <option key={item} value={item}>{item}</option> )}
                </select>
              </div>
            </div>

{/* className="aprekini"                           */}

            <div className="aprekini">
              <div className="traf">
                  <input type="text"  style={{width: "27.55rem"}} placeholder= 'TA izbūve'
                        value={proms.nosaukumsTA}
                        onChange={(e) => proms.setNosaukumsTA(e.target.value)}/>
                  <select
                      value={proms.kva} style={{width: "6rem"}} 
                      onChange={(e) => {
                          proms.setKva(e.target.value)
                          if(e.target.value !== "") proms.setTrafPiepr(proms.pieprasita); else proms.setTrafPiepr("");
                          proms.setTrafProj(taKVAuzA[taKVAuzA.indexOf(e.target.value)+1]); }} >
                      {kva.map(item => <option key={item} value={item}>{item}</option> )}
                  </select>
                      <div>
                          <NumberFormat
                            thousandsGroupStyle="thousand"
                            value={proms.trafTame}  style={{width: "8rem"}} placeholder= 'Tāme' 
                            onChange={(e) =>proms.setTrafTame(e.target.value)}
                            prefix=""
                            decimalSeparator=","
                            fixedDecimalScale={true}
                            displayType="input"
                            type="text"
                            thousandSeparator=" "
                            allowNegative={false}
                            decimalScale={2} />
                      </div> 
                      <div>
                          <NumberFormat
                            thousandsGroupStyle="thousand"
                            value={proms.trafMat}  style={{width: "8rem"}} placeholder= 'Materiāli' 
                            onChange={(e) => proms.setTrafMat(e.target.value)}
                            prefix=""
                            decimalSeparator=","
                            fixedDecimalScale={true}
                            displayType="input"
                            type="text"
                            thousandSeparator=" "
                            allowNegative={false}
                            decimalScale={2} />
                      </div> 
                      <div>
                          <NumberFormat
                            thousandsGroupStyle="thousand" 
                            value={proms.trafKop} style={{width: "8rem", backgroundColor: '#e6e6ff'}} readOnly='readOnly' 
                            prefix=""
                            decimalSeparator=","
                            fixedDecimalScale={true}
                            displayType="input"
                            type="text"
                            thousandSeparator=" "
                            allowNegative={false}
                            decimalScale={2} />
                      </div> 
                      <input type="text" style={{width: "5rem", color: proms.fcolor }} placeholder= 'proj'
                        value={proms.trafProj}
                        onChange={(e) => proms.setTrafProj(e.target.value)}  />
                      <input type="text" style={{width: "5rem", color: proms.fcolor }} placeholder= 'piepr'
                        value={proms.trafPiepr}
                        onChange={(e) =>  proms.setTrafPiepr(e.target.value)}/>
                      <div>
                          <NumberFormat
                            thousandsGroupStyle="thousand" 
                            value={proms.trafKopLiet} style={{width: "8rem", backgroundColor: '#e6e6ff'}} readOnly='readOnly' 
                            prefix=""
                            decimalSeparator=","
                            fixedDecimalScale={true}
                            displayType="input"
                            type="text"
                            thousandSeparator=" "
                            allowNegative={false}
                            decimalScale={2} />
                      </div> 
                      <input  type="checkbox" className = "checkTraf" 
                              checked = {proms.isCheckedTraf === 1 ? true : false}
                              disabled={sessionStorage.length === 0}
                              onChange={handleCheckTraf}  />
              </div>

{/* className="kl1"                           */}

              <div className="kl1">
                  <input type="text"  style={{width: "14.75rem"}} placeholder= 'KL izbūve'
                        value={proms.kl1Name}
                        onChange={(e) => proms.setKl1Name(e.target.value)}/>
                  <select
                    value={proms.kl1izb} style={{width: "6rem"}} 
                    onChange={(e) => proms.setKl1izb(e.target.value)} >
                    {klizb.map(item => 
                    <option key={item} value={item}>{item}</option>
                    )}
                  </select>
                  <select
                    value={proms.kl1skers} style={{width: "6rem"}} 
                    onChange={(e) => proms.setKl1skers(e.target.value)} >
                    {skers.map(item => 
                    <option key={item} value={item}>{item}</option>
                    )}
                  </select>
                  <input type="text" style={{width: "6rem"}} placeholder= 'm'
                        value={proms.kl1m}
                        onChange={(e) => proms.setKl1m(e.target.value)}/>
                    <div>
                        <NumberFormat
                          thousandsGroupStyle="thousand"
                          value={proms.kl1Tame}  style={{width: "8rem"}} placeholder= 'Tāme' 
                          onChange={(e) => proms.setKl1Tame(e.target.value)}
                          prefix=""
                          decimalSeparator=","
                          fixedDecimalScale={true}
                          displayType="input"
                          type="text"
                          thousandSeparator=" "
                          allowNegative={false}
                          decimalScale={2} />
                    </div> 
                      <div>
                          <NumberFormat
                            thousandsGroupStyle="thousand"
                            value={proms.kl1Mat}  style={{width: "8rem"}} placeholder= 'Materiāli' 
                            onChange={(e) => proms.setKl1Mat(e.target.value)}
                            prefix=""
                            decimalSeparator=","
                            fixedDecimalScale={true}
                            displayType="input"
                            type="text"
                            thousandSeparator=" "
                            allowNegative={false}
                            decimalScale={2} />
                      </div> 
                  <input type="text" style={{width: "8rem", backgroundColor: '#e6e6ff'}} readOnly='readOnly'
                        value={proms.kl1Kop}
                        onChange={(e) => proms.setKl1Kop(e.target.value)}/>
                  <input type="text" style={{width: "5rem"}} placeholder= 'proj'
                        value={proms.kl1Proj}
                        onChange={(e) => proms.setKl1Proj(e.target.value)}/>
                  <input type="text" style={{width: "5rem"}} placeholder= 'piepr'
                        value={proms.kl1Piepr}
                        onChange={(e) => proms.setKl1Piepr(e.target.value)}/>
                  <input type="text" style={{width: "8rem", backgroundColor: '#e6e6ff'}} readOnly='readOnly'
                        value={proms.kl1KopLiet}
                        onChange={(e) => proms.setKl1KopLiet(e.target.value)}/>
                  <input  type="checkbox" className = "checkKl1" />
              </div>





            </div>

        </div>
      );
}
 
export default Main;