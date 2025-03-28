import React, { useEffect, useState } from "react";
import cl from "./PersonEdit.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/useDispatch&useSelector";
import { Button, TextField } from "@mui/material";
import { getPersonById, updatePerson } from "../../store/person/personActions";
import { useNavigate, useParams } from "react-router";

export default function PersonEdit() {
  const { isLoading, currentPerson, error } = useAppSelector(
    (state) => state.person
  );
  const [name, setName] = useState(currentPerson.name);
  const [surName, setSurName] = useState(currentPerson.surName);
  const [height, setHeight] = useState(currentPerson.height);
  const [weight, setWeight] = useState(currentPerson.weight);
  const [location, setLocation] = useState(currentPerson.location);
  const [image, setImage] = useState(currentPerson.image);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const router = useNavigate();

  const updateThisPerson = () => {
    if (!id) return;
    
    const data = {
      id,
      name,
      surName,
      height,
      weight,
      location,
      image,
    };

    if (
      name.trim() &&
      surName.trim() &&
      location.trim() &&
      image.trim() &&
      height > 0 &&
      weight > 0
    ) {
      dispatch(updatePerson(data));
      router("/");
    } else {
      alert("All fields must be filled");
    }
  };

  useEffect(() => {
    dispatch(getPersonById(id || ""));
  }, []);

  return (
    <div className={cl.PersonCreate}>
      <form className={cl.form} style={{ maxWidth: "400px" }}>
        {image && <img src={image} alt="Person preview" />}
        <TextField
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="standard"
          value={name}
        />
        <TextField
          onChange={(e) => setSurName(e.target.value)}
          label="Sur Name"
          variant="standard"
          value={surName}
        />
        <TextField
          onChange={(e) => setHeight(Number(e.target.value))}
          label="height"
          variant="standard"
          value={height}
          type="number"
        />
        <TextField
          onChange={(e) => setWeight(Number(e.target.value))}
          label="weight"
          variant="standard"
          value={weight}
          type="number"
        />
        <TextField
          onChange={(e) => setLocation(e.target.value)}
          label="location"
          variant="standard"
          value={location}
        />
        <TextField
          onChange={(e) => setImage(e.target.value)}
          label="image"
          variant="standard"
          value={image}
        />
        <Button onClick={updateThisPerson} variant="outlined">
          Update
        </Button>
      </form>
    </div>
  );
}
