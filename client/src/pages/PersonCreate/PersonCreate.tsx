import React, { useState } from "react";
import cl from "./PersonCreate.module.scss";
import { useAppDispatch } from "../../hooks/useDispatch&useSelector";
import { Button, TextField } from "@mui/material";
import { createPerson, getPersons } from "../../store/person/personActions";
import { useNavigate } from "react-router";

export default function PersonCreate() {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(
    "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
  );
  const dispatch = useAppDispatch();
  const router = useNavigate();

  const createNewPerson = () => {
    const data = {
      name,
      surName,
      height: Number(height),
      weight: Number(weight),
      location,
      image,
    };

    if (
      name.trim() &&
      surName.trim() &&
      location.trim() &&
      image.trim() &&
      Number(height) > 0 &&
      Number(weight) > 0
    ) {
      dispatch(createPerson(data));
      dispatch(getPersons({ limit: 10, page: 1 }));
      router("/");
    } else {
      alert("Все поля должны быть заполнены");
    }
  };

  return (
    <div className={cl.PersonCreate}>
      <form className={cl.form} style={{ maxWidth: "400px" }}>
        {image && (
          <img
            src={image}
            alt="Person preview"
          />
        )}
        <TextField
          onChange={(e) => setName(e.target.value)}
          label="Имя"
          variant="standard"
          value={name}
          fullWidth
        />
        <TextField
          onChange={(e) => setSurName(e.target.value)}
          label="Фамилия"
          variant="standard"
          value={surName}
          fullWidth
        />
        <TextField
          onChange={(e) => setHeight(e.target.value)}
          label="Рост (см)"
          variant="standard"
          value={height}
          type="number"
          fullWidth
        />
        <TextField
          onChange={(e) => setWeight(e.target.value)}
          label="Вес (кг)"
          variant="standard"
          value={weight}
          type="number"
          fullWidth
        />
        <TextField
          onChange={(e) => setLocation(e.target.value)}
          label="Местоположение"
          variant="standard"
          value={location}
          fullWidth
        />
        <TextField
          onChange={(e) => setImage(e.target.value)}
          label="URL изображения"
          variant="standard"
          value={image}
          fullWidth
        />
        <Button onClick={createNewPerson} variant="contained" fullWidth>
          Создать
        </Button>
      </form>
    </div>
  );
}
