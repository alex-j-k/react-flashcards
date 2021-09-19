const { default: Meaning } = require("./Meaning")
const { default: Pin } = require("./Pin")

const DicDiv = () => {
    return ( 
        <div className="dicdiv">
            <Pin></Pin>
            <Meaning></Meaning>
        </div>
     );
}
 
export default DicDiv;