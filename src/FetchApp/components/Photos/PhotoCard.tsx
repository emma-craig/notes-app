import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import {PhotoContext} from "../../contexts/PhotoContext";
import { Photo, responseType } from "./../../types/data";
import { useContext } from "react";
import React from "react";

const PhotoCard = () => {
  const { photos } = useContext(PhotoContext) as responseType;
  return (
    <Container>
      <Grid     justifyContent= 'space-around' container item display="flex" spacing={2} xs={12}>
        {photos &&
          photos.map((photo: Photo) => {
            return (
              <Card
                key={photo.id}
                sx={{
                  margin: "20px",
                  display: "flex",
                  //   justifyContent: "space-between",
                  flexDirection: "row",
                  width: "200px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  <CardMedia
                    component="img"
                    alt={photo.alt}
                    src={photo.src.small}
                    sx={{ height: "200px" }}
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="caption">{photo.alt}</Typography>
                  </CardContent>
                </div>
              </Card>
            );
          })}
      </Grid>
    </Container>
  );
};
export default PhotoCard;
