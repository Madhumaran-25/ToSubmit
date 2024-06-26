import {configureStore}from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import formReducer from './formDataSlice';

export default configureStore({
    reducer:{
        cart: cartReducer,
        formData : formReducer

    }
});