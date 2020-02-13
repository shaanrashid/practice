//unused
import Popup from "./popup.js"



function POPUP2() {



  const Popup = props => (

    <div className="rbc-calendar" >
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup Content here !!</div>
      </Popup>
      );
      </div>
  )
  return (
    <div className='style'>
      <Popup />
    </div>
  );
}


export default POPUP2;