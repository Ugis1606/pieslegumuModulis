import mainLogo from'./res/icon.png';
import { confirmAlert } from 'react-confirm-alert';
import './alerts.css';

const Navbar = (proms) => {

  const onclickS = () => proms.setOnclickSave(true);
  const onclickE = () => proms.setOnclickErase(true);

  const dialogErase = (e) => {
    confirmAlert({
      title: 'Nodzēst laukus',
      message: 'Vai tiešām nodzēst laukus ?',
      buttons: [ {  label: 'Jā',
                    onClick: () => onclickE()},
                { label: 'Nē',
                  onClick: () => null}
      ]})};

      

  return (
        <div className="navbar">
              <img src={mainLogo} height="50" alt="logo"/>
          <div className="info">
            <button className="hvr-icon-hang">
            <b>Info&ensp;</b>
              <i className="fa fa-chevron-down hvr-icon"></i>
            </button>
            <ul>
              <li className="metodika">Metodika</li>
              <li key="1">Info2</li>
              <li key="2">Info3</li>
              <li key="3">Info4</li>
            </ul>
          </div>
          <div className="riki">
            <button className="hvr-icon-hang">
            <b>Rīki&ensp;</b>
              <i className="fa fa-chevron-down hvr-icon"></i>
            </button>
            <ul>
              <li key="1" className="piezimes" >Piezīmes</li>
              <li key="2"><a href="#something">Rīks2</a></li>
              <li key="3"><a href="#something">Rīks3</a></li>
            </ul>
          </div>
          <div className="darbibas">
            <button className="hvr-icon-hang">
            <b>Darbības&ensp;</b>
              <i className="fa fa-chevron-down hvr-icon"></i>
            </button>
            <ul>
              <li key="1" className="saglabat" onClick={onclickS}>Saglabāt</li>

              <li key="2"className="dzest" onClick={dialogErase}>Dzēst</li>
            </ul>
          </div>
        </div>
      );
}
 
export default Navbar;