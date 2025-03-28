import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button, CardMedia } from "@mui/material";
import { Link, useNavigate } from "react-router";
import { person } from "../models/person.model";
import { useAppDispatch } from "../hooks/useDispatch&useSelector";
import { deletePerson, getPersons } from "../store/person/personActions";
export default function PersonCard(props: person) {
  const dispatch = useAppDispatch();
  const router = useNavigate();
  const Delete = () => {
    if (confirm("Вы хотите удалить этого человека?")) {
      dispatch(deletePerson(props._id));
      dispatch(getPersons({ limit: 10, page: 1 }));
      router("/");
    }
  };
  return (
    <Card sx={{ maxWidth: 535 }}>
      <CardHeader title={props.name} subheader={props.surName} />
      <CardMedia
        component="img"
        height="194"
        image={
          props.image.trim() == ""
            ? "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
            : props.image
        }
        alt=""
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          height: {props.height} sm <br />
          weight: {props.weight} kg <br />
          location: {props.location}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/person/${props._id}`}>
          <Button variant="contained">More</Button>
        </Link>
        <Link style={{ marginLeft: "20px" }} to={`/edit/${props._id}`}>
          <Button variant="contained">Edit</Button>
        </Link>
        <Button
          style={{ marginLeft: "20px" }}
          variant="contained"
          onClick={Delete}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
