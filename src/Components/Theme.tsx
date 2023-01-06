import React from 'react';
import { FaMoon , FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../App/store';
import { switchDark,switchLight } from '../features/Theme/ThemeSlice';


const Theme = () => {
  const dispatch = useDispatch<AppDispatch>()
  const theme = useSelector((state: RootState) => state.themeR.theme);
  const handleClick = () => {
    theme === 'dark' ? dispatch(switchLight()) : dispatch(switchDark());
  }
return (
    <button className='iconButton'
          onClick={()=>{handleClick()}}>
            <FaMoon/>
          </button>
  )
}

export default Theme;
