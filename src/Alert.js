

const Alert = (proms) => {

    if(proms.alertOn) {
      return (
                <div className="body" >
                    <div className="notification">
                        Saglabāts !
                    </div>   
                </div>
        );
      }
  }
   
  export default Alert;