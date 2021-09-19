import DicDiv from "./DicDiv";

const { default: List } = require("./List")


const InfoDiv = () => {
    return ( 
        <div className='infodiv'>
            <DicDiv></DicDiv>
            <List></List>
        </div>
     );
}
 
export default InfoDiv;