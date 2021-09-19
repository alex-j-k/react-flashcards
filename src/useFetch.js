import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [info, setInfo] = useState('a');

    useEffect(() => {
        fetch(url)
          .then(res => {
            return res.json();
          })
          .then(data => {
            setInfo(data);

          }).catch((err) => console.log(err))
          
      }, [url]
);


    return ( { info }
  );
}
 
export default useFetch;