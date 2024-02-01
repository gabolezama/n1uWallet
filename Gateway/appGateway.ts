

import { UseQueryResult, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IItemDetailEntity } from '../Services/ItemDetailEntity';

interface StarWarsData {
  results: any[]
}

export type HttpResponseFromSwapi = UseQueryResult<StarWarsData, Error>;

const fetchStarWarsData = async (endpoint: string): Promise<StarWarsData> => {
    const { data } = await axios.get<StarWarsData>(`https://swapi.dev/api/${endpoint}/?page=5`);
    return data;
};

const fetchByUrl = async (url: string): Promise<any> => {
    const { data } = await axios.get<any>(url);
    return data;
};

export const useSwapi = (endpoint: string) => {
  const response: HttpResponseFromSwapi = useQuery({queryKey: ['swapi', endpoint], queryFn: () => fetchStarWarsData(endpoint)});
  if(!response.data){
    return []
  }
  return response.data.results
};

export const getVehicleDitails = (url: string) => {
  const response = useQuery({queryKey: ['getDetails', url], queryFn: () => fetchByUrl(url)});
  if(!response.data){
    return {}
  }
  return ({
    name: response.data.name,
    gender: response.data.gender,
    mass: response.data.mass,
    height: response.data.height,
    birthYear: response.data.birth_year,
    hairColor: response.data.hair_color,
    eyesColor: response.data.eye_color,
  }) as IItemDetailEntity
};
