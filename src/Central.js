import Card from './Card';
import useFetch from './useFetch';


const Central = () => {

  const { info: cinfo } = useFetch("http://localhost:8000/Characters")
  
    return ( 
        <div className='central'>
            <h1>list below</h1>
            {cinfo.map(thing => <Card key={thing.id} cinfo={cinfo}></Card>)}

           
        </div>
     );
}
 
export default Central;