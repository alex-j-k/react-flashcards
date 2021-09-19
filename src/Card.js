const { default: InfoDiv } = require("./InfoDiv")
const { default: MC } = require("./MC")


const Card = (props) => {

  const cinfo = props.cinfo;

    return ( 
        <div className='card'>
           <h1>card</h1> 
           <MC cinfo={cinfo}> </MC>
          <InfoDiv />

        </div>
     );
}
 
export default Card;