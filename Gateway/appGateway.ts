import { UseQueryResult, useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface StarWarsData {
  results: any[]
}

export type HttpResponseFromSwapi = UseQueryResult<StarWarsData, Error>;

const fetchStarWarsData = async (endpoint: string): Promise<StarWarsData> => {
    const { data } = await axios.get<StarWarsData>(`https://swapi.dev/api/${endpoint}/`);
    return data;
};

const fetchByUrl = async (url: string): Promise<any> => {
    const { data } = await axios.get<any>(url);
    return data;
};

export const getAllByCategory = (endpoint: string) => {
  const response: HttpResponseFromSwapi = useQuery({queryKey: ['swapi', endpoint], queryFn: () => fetchStarWarsData(endpoint)});
  if(!response.data){
    return []
  }
  return response.data.results.map((item:any)=>{
    return {
      name: item.name || item.title || 'desconocido',
      url: item.url
    }
  })
};

export const getItemDitails = (url: string) => {
  const response = useQuery({queryKey: ['getDetails', url], queryFn: () => fetchByUrl(url)}); 
  
  if(!response.data){
    return []
  }
  delete response.data.films;
  delete response.data.starships;
  delete response.data.vehicles;
  delete response.data.planets;
  delete response.data.species;
  delete response.data.homeworld;
  delete response.data.created;
  delete response.data.edited;
  delete response.data.url;
  delete response.data.characters

  const entriesToShow = Object.entries(response.data);
  return entriesToShow
};
