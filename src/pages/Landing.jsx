import { useLoaderData, useRouteLoaderData } from "react-router-dom"
import axios from 'axios'
import CocktailList from "../Components/CocktailList";
import SearchForm from '../Components/SearchForm'
const cocktailSearchUrl ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

import { QueryClient, useQuery } from "@tanstack/react-query";

const searchCoctailsQuery = (searchTerm) => {
  return {
    queryKey:['search',searchTerm || 'all'],
    queryFn: async () =>{
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
      return response.data.drinks
    }
  }
}

export const loader = (queryClient)=> async ({request}) => {
  const url = new URL(request.url)

    const searchTerm = url.searchParams.get('search') || ''
    await queryClient.ensureQueryData(searchCoctailsQuery(searchTerm))
  
    return { searchTerm}
}

const Landing = () => {
    const {searchTerm} = useLoaderData()
    const {data:drinks} = useQuery(searchCoctailsQuery(searchTerm))
  
  
    return ( 
  <>
  <SearchForm searchTerm={searchTerm}/>
    <CocktailList drinks={drinks} />
   </>
   )
  
}

export default Landing
