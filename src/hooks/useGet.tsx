import { useState} from 'react';
import { useEffect } from 'react';
import api from '../services/api';

export default function useGet<T>(path:string) {
  
  const [dateAll, setDateAll] = useState<T[]>([]);

    useEffect(() => {
      api.get(`/${path}/`)
        .then(response => {
          setDateAll(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    
    return dateAll;
}