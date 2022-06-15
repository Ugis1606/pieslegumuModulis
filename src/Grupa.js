import 'animate.css';

const Grupa = (proms) => {

    // useEffect(() => {
    //     let keys = [];
    //     for (let i = 0; i < sessionStorage.length; i++)  keys.push(sessionStorage.key(i));
    //     proms.setKeyss(keys);
    // },[])

    const clickDel = (e) => {
        const targ = e.target.parentNode.classList;
        targ.value = "animate__animated animate__bounceOutDown";
        const oldKey = e.target.attributes.getNamedItem("piet").nodeValue;
        const newKeys = proms.keyss.filter(key => key !== oldKey);
                setTimeout(() => {
                proms.setKeyss(newKeys);
                if (oldKey === localStorage.getItem("GrupasIndex")) { 
                    if(sessionStorage.length > 0) localStorage.setItem("GrupasIndex", sessionStorage.key(0));
                    else localStorage.setItem("GrupasIndex", "");
                }
                }, 600);
        sessionStorage.removeItem(oldKey);
            if(sessionStorage.length > 0 && proms.pieteikums === oldKey) {
            proms.setPieteikums(sessionStorage.key(0));
            proms.setEsosa(JSON.parse(sessionStorage.getItem(sessionStorage.key(0))).esosa);  
            proms.setEsosU(JSON.parse(sessionStorage.getItem(sessionStorage.key(0))).esosU);  
            proms.setPieprasita(JSON.parse(sessionStorage.getItem(sessionStorage.key(0))).pieprasita);  
            proms.setPiepU(JSON.parse(sessionStorage.getItem(sessionStorage.key(0))).piepU);
            proms.setTrafProj(JSON.parse(sessionStorage.getItem(sessionStorage.key(0))).trafProj);
            proms.setTrafPiepr(JSON.parse(sessionStorage.getItem(sessionStorage.key(0))).trafPiepr); 
            proms.setIsCheckedTraf(JSON.parse(sessionStorage.getItem(sessionStorage.key(0))).isCheckedTraf);
            } else if (sessionStorage.length === 0) setTimeout(() => {window.location.reload();}, 600);
    }
    
    const clickPiet = (e) => {
        const pieteikums = JSON.parse(sessionStorage.getItem(e.target.innerText)).pieteikums;
        const esosa = JSON.parse(sessionStorage.getItem(e.target.innerText)).esosa;
        const esosU = JSON.parse(sessionStorage.getItem(e.target.innerText)).esosU;
        const pieprasita = JSON.parse(sessionStorage.getItem(e.target.innerText)).pieprasita;
        const piepU = JSON.parse(sessionStorage.getItem(e.target.innerText)).piepU;
        const trafProj = JSON.parse(sessionStorage.getItem(e.target.innerText)).trafProj;
        const trafPiepr = JSON.parse(sessionStorage.getItem(e.target.innerText)).trafPiepr;
        const isCheckedTraf = JSON.parse(sessionStorage.getItem(e.target.innerText)).isCheckedTraf;
        proms.setPieteikums(pieteikums);  
        proms.setEsosa(esosa);  
        proms.setEsosU(esosU);  
        proms.setPieprasita(pieprasita);  
        proms.setPiepU(piepU);
        proms.setTrafProj(trafProj);
        proms.setTrafPiepr(trafPiepr); 
        proms.setIsCheckedTraf(isCheckedTraf);

    }
   


    return (
        <div className="grupa">
            <h1>Grupa&#9;&#40;{sessionStorage.length}&#41;</h1>

            {proms.keyss.filter(item => item === localStorage.getItem("GrupasIndex")).map((item) => (
                <div key = {item} className="GrPiet" >
                        <h2 id='galv' onClick={clickPiet}>{item}</h2>
                        <h2 onClick={clickDel} piet = {item}><i className="fas fa-trash"></i></h2>
                </div>
            ))}

            {proms.keyss.filter(item => item !== localStorage.getItem("GrupasIndex")).map((item) => (
                <div key = {item} className="GrPiet" >
                        <h2 onClick={clickPiet}>{item}</h2>
                        <h2 onClick={clickDel} piet = {item}><i className="fas fa-trash"></i></h2>
                </div>
            ))}

        </div>
      );
}
 
export default Grupa;