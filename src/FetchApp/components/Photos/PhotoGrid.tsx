import { Box, Card, CardMedia, Grid } from "@mui/material";
import { Photo, responseType } from "./../../types/data";
import { useContext } from "react";
import {PhotoContext} from "../../contexts/PhotoContext";
import React from "react";

const PhotoGrid = () => {
  const { photos } = useContext(PhotoContext) as responseType;

  return (
    <Box width='70%'margin= '10px auto'>
      <Grid container spacing={4} margin={5} >
        {photos &&
          photos.map((photo: Photo) => {
            return (
              <Grid  item xs={3} key={photo.id}>
                <Card key={photo.id} sx={{ height: "150px", width: "150px" }}>
                  <CardMedia
                    component="img"
                    alt={photo.alt}
                    src={photo.src.small}
                    sx={{ height: "150px", width: "150px" }}
                  ></CardMedia>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};
export default PhotoGrid;
