
import {createSlice} from '@reduxjs/toolkit';
import { AppDispatch } from '../../App/store';
import {  Country, InitialStateCountry } from '../../Types';

const initialState :
InitialStateCountry = {
    country: [],
    isLoading : true,
    error : false,
} ;

const CountrySlice = createSlice({
    name : 'country',
    initialState,
    reducers : {
        getCountry:state => {
            state.isLoading = true
         },
          getCountrySuccess: (state, { payload }) => {
            state.country = payload
            state.isLoading = false
            state.error = false
          },
          getCountryFailure: state => {
            state.isLoading = false
            state.error = true
          },
    }
});
export const { getCountry,getCountrySuccess,getCountryFailure} = CountrySlice.actions;
export default CountrySlice.reducer;

export function fetchCountry(countryName:string | undefined) {
  return async (dispatch : AppDispatch) => {
    dispatch(getCountry())
    try {
      const response = await fetch(`https://restcountries.com/v2/name/${countryName}`)
      const data = await response.json()
      const newData = data.map((item: Country) => ({
        name: item.name, 
                population: item.population,
                capital: item.capital, 
                region: item.region,
                flag: item.flag,
                nativeName: item.nativeName,
                borders : item.borders,
                timeZones : item.timeZones,
    }))
      dispatch(getCountrySuccess(newData))
    } catch (error) {
      dispatch(getCountryFailure())
    }
  }
}
