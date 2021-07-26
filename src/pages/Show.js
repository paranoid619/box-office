import React , { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import {apiGet}from '../misc/config';

export const Show = () => {

   const { id } = useParams();


   const [show,setShow]  = useState(null);

   const[isLoading,setisLoading] = useState(true);

   const[error,setError] = useState(null);

   useEffect(() =>{


    let isMounted = true;

    apiGet( `/shows/${id}?embed[]=seasons&embed[]=cast`).then(results=>{


            if(isMounted){
                setShow(results);
                setisLoading(false);

            }

        
          
       
    }).catch(err=>{
        if(isMounted){
            setError(err.message);
            setisLoading(false);
        }
      
    });

    return ()=>{
        isMounted = false;
    }

    

   },[id]);

   console.log('show',show);

   if(isLoading){
       return<div>data is being loaded</div>
   }

   if(error){
       return<div>error is occured:{error}</div>
   }


    return <div> this is show page </div>
}
