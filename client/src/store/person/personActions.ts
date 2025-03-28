import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../axios";
import { person } from "../../models/person.model";

interface getPersons {
  limit: number;
  page: number;
}

export const getPersons = createAsyncThunk(
  "/person",
  async (data: getPersons) => {
    try {
      const respone = await Axios.get(
        `/person?limit=${data.limit}&page=${data.page}`
      );
      return respone.data;
    } catch (error) {
      console.error(error);
      // для того что бы не было ошибки при рендеринге компонента
      return [];
    }
  }
);

export const getPersonById = createAsyncThunk(
  "/person/:id",
  async (id: string) => {
    try {
      const respone = await Axios.get(`/person/${id}`);
      return respone.data;
    } catch (error) {
      console.error(error);
      // для того что бы не было ошибки при рендеринге компонента
      return {};
    }
  }
);

export const createPerson = createAsyncThunk(
  "/person/create",
  async (data: any) => {
    try {
      const respone = await Axios.post(`/person`, data);
      return respone.data;
    } catch (error) {
      console.error(error);
      // для того что бы не было ошибки при рендеринге компонента
      return {};
    }
  }
);

export const updatePerson = createAsyncThunk(
  "person/update",
  async (personData: {
    id: string;
    name: string;
    surName: string;
    height: number;
    weight: number;
    location: string;
    image: string;
  }) => {
    try {
      const response = await Axios.put(`/person/${personData.id}`, personData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deletePerson = createAsyncThunk(
  "/person/delete",
  async (id: string) => {
    try {
      const respone = await Axios.delete(`/person/${id}`);
      return respone.data;
    } catch (error) {
      console.error(error);
      return {};
    }
  }
);
