import React, { useEffect, useState } from "react";
import cl from "./Home.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/useDispatch&useSelector";
import { getPersons } from "../../store/person/personActions";
import PersonCard from "../../components/Card";
import { Button, Stack } from "@mui/material";

export default function Home() {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const { isLoading, persons, error } = useAppSelector((state) => state.person);
  useEffect(() => {
    const data = {
      limit: 10,
      page,
    };
    dispatch(getPersons(data));
  }, [page]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className={cl.Home}>
      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <div className={cl.List}>
              {persons.map((person) => (
                <PersonCard key={person._id} {...person} />
              ))}
            </div>
            <Stack
              className={cl.pagination}
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              <Button
                variant="contained"
                onClick={handlePrevPage}
                disabled={page === 1}
              >
                Назад
              </Button>
              <Button variant="contained" onClick={handleNextPage}>
                Вперед
              </Button>
            </Stack>
          </div>
        )}
      </div>
    </div>
  );
}
