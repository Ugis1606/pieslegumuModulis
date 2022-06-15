
const GrupasBtn = (proms) => {

  const clicked = (e) => {
      e.preventDefault();
      let chec;
      if(sessionStorage.length === 0) {
        chec = 0;
        proms.setIsCheckedTraf(0);
      } else chec = proms.isCheckedTraf;
        const grObject = {pieteikums: proms.pieteikums, buvnieks: proms.buvnieks,
          nosaukumsTA: proms.nosaukumsTA, kva: proms.kva, trafTame: proms.trafTame,
          trafMat: proms.trafMat, esosa: proms.esosa, esosU: proms.esosU, pieprasita: proms.pieprasita,
          piepU: proms.piepU, trafProj: proms.trafProj, trafPiepr: proms.trafPiepr, isCheckedTraf: chec,
          grupasPiet: proms.grupasPiet   
        
        };
      sessionStorage.setItem(proms.pieteikums, JSON.stringify(grObject));
      let keys = [];
      for (let i = 0; i < sessionStorage.length; i++)  keys.push(sessionStorage.key(i));
      proms.setKeyss(keys);
      if(sessionStorage.length === 1) localStorage.setItem("GrupasIndex", proms.pieteikums);
    }

    return (
              <div className="grupaBtn" onClick={clicked}>
                <button className="hvr-wobble-horizontal">
                <i className="fas fa-arrow-right hvr-icon"></i>
                </button>
              </div>
      );
}
 
export default GrupasBtn;