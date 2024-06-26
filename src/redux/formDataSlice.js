import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: [],
};

export const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      const { id, header, data } = action.payload;
      const existingDataIndex = state.formData.findIndex(item => item.id === id);

      if (existingDataIndex !== -1) {
        state.formData[existingDataIndex] = { id, header, ...data };
      } else {
        state.formData.push({ id, header, ...data });
      }
    },
    clearFormData: (state) => {
      state.formData = [];
    },
  },
});

export const { updateFormData, clearFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
