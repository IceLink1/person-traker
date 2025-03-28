import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { getPersonById, getPersons, updatePerson } from "./personActions";
import { person } from "../../models/person.model";

interface State {
  persons: person[];
  currentPerson: person;
  error: string | null;
  isLoading: boolean;
  totalCount: number;
  totalPages: number;
}

const initialState: State = {
  persons: [],
  error: null,
  currentPerson: {
    _id: "",
    name: "",
    surName: "",
    height: 0,
    weight: 0,
    location: "",
    image: "",
  },
  isLoading: false,
  totalCount: 10,
  totalPages: 1,
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPersons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.persons = action.payload.data;
        state.totalCount = action.payload.totalCount;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getPersons.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPersons.rejected, (state, action) => {
        state.error = "Error";
        state.isLoading = false;
      });

    builder
      .addCase(getPersonById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentPerson = action.payload;
      })
      .addCase(getPersonById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPersonById.rejected, (state, action) => {
        state.error = "Error";
        state.isLoading = false;
      });

    builder
      .addCase(updatePerson.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatePerson.fulfilled, (state, action) => {
        state.isLoading = false;
        state.persons = state.persons.map((person) =>
          person._id === action.payload.id ? action.payload : person
        );
      })
      .addCase(updatePerson.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Error";
      });
  },
});

export const selectCount = (state: RootState) => state.person;

export const {} = personSlice.actions;

export default personSlice.reducer;
