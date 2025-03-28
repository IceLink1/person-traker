import React, { useEffect } from "react";
import cl from "./PersonById.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/useDispatch&useSelector";
import { getPersonById } from "../../store/person/personActions";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router";

export default function PersonById() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, currentPerson, error } = useAppSelector(
    (state) => state.person
  );
  useEffect(() => {
    dispatch(getPersonById(id || ""));
  }, []);
  return (
    <div className={cl.Home}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Card sx={{ maxWidth: 400}}>
          <CardMedia
            component="img"
            alt=""
            image={
              currentPerson?.image ||
              "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name: {currentPerson?.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              SurName: {currentPerson?.surName} <br />
              Height: {currentPerson?.height} sm <br />
              Weight: {currentPerson?.weight} kg <br />
              Location: {currentPerson?.location}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
