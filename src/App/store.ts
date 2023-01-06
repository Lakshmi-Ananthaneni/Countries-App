import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import CountriesSlice from "../features/Countries/CountrieSlice"
import CountrySlice from "../features/country/CountrySlice";
import FavouritesSlice from "../features/Favourite/FavouritesSlice";
import ThemeSlice from "../features/Theme/ThemeSlice";

const rootReducer = combineReducers({
    countriesR: CountriesSlice,
    countryR : CountrySlice,
    favouritesR :FavouritesSlice,
    themeR : ThemeSlice,
})
export const store = configureStore ({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
