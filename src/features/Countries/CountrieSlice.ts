import {createSlice} from '@reduxjs/toolkit';
import { AppDispatch } from '../../App/store';
import { Countries, InitialStateCountries,Country } from '../../Types';

const initialState :
InitialStateCountries = {
    countries: [],
    isLoading : true,
    error : false,
} ;

const CountriesSlice = createSlice({
    name : 'countries',
    initialState,
    reducers : {
        getCountries:state => {
            state.isLoading = true
         },
          getCountriesSuccess: (state, { payload }) => {
            state.countries = payload
            state.isLoading = false
            state.error = false
          },
          getCountriesFailure: state => {
            state.isLoading = false
            state.error = true
          },
          /*handleSearch: (state, action) => {
            const keyword = action.payload.toLowerCase();
            state.keyword = keyword
            const filterCountry = [...state.country].filter((item) => item.name.toLowerCase().startsWith(keyword));
            state.countryFiltered = [...filterCountry]
            }*/
    }
});
export const { getCountries,getCountriesSuccess,getCountriesFailure} = CountriesSlice.actions;
export default CountriesSlice.reducer;
export function fetchCountries() {
  return async (dispatch : AppDispatch) => {
    console.log("fetchCountries");
    dispatch(getCountries())
      try {
        const response = await fetch('https://restcountries.com/v2/all')
        const data = await response.json()
        const newData = data.map((item: Countries) => ({
          name: item.name, 
          population: item.population,
          capital: item.capital, 
          region: item.region,
          flag: item.flag
      }))
        dispatch(getCountriesSuccess(newData))
      } 
      catch (error) {
        dispatch(getCountriesFailure())  }
  }
}
