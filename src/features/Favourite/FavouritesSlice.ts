import {createSlice} from '@reduxjs/toolkit';
import { count } from 'console';
import { InitialStateFavourites } from '../../Types';

const initialState: InitialStateFavourites = {
    favourites: [],
    
  };

const  favouritesSlice = createSlice ({
    name: 'favourites',
    initialState,
    reducers: {
        
      
      addFavourite: (state, action) => {
         state.favourites.find (favourite => favourite.name === action.payload)
        state.favourites.push({...action.payload,quantity: 1});
        //favourite.quantity ++ ;
            
        },
      
        deleteFavourite:(state, action) => {
            const deleteFavourite = state.favourites.filter((favourite) => favourite.name !== action.payload);
              state.favourites = deleteFavourite;
                //favourite.quantity --;

        
        }
    }
})
export const {addFavourite,deleteFavourite} = favouritesSlice.actions;
export default favouritesSlice.reducer;