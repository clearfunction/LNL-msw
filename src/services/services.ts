import { useState } from "react";
import { Movies, ServiceResult } from "./types";

export function useService() {
  const baseUrl = `https://mock-my.api.net/v1/`

  const [movies, setMovies] = useState<Movies>();

  const getMovies= () : Promise<ServiceResult> => 
    new Promise<ServiceResult>((resolve, reject) => {
      fetch(`${baseUrl}movies`)
        .then((response)  => response.json())
        .then((data) => {
          if(data){
            setMovies(data)
            resolve({success: true} as ServiceResult)
          }else{
            reject({success: false} as ServiceResult)
          }
        }).catch(err => {
          console.log(err);
          reject({success: false, err})
        });
      });

    const updateMovie = (id: number, description: string) : Promise<ServiceResult> =>
      new Promise<ServiceResult>((resolve, reject) => {
        fetch(`${baseUrl}movie/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application.json'
          },
          body: description
        })
        .then((_) => {
          getMovies()
            .then((_) => resolve({success: true} as ServiceResult))
            .catch((err) => reject({success: false, err}))
        })
        .catch(err => {
          console.log(err);
          reject({success: false, err})
        });
      });

  return {
    movies,
    
    updateMovie,
    getMovies,
  };
}