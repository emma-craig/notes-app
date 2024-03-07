import { Box, Stack, Button } from "@mui/material";
import { useContext, useState } from "react";
import {PhotoContext} from "../../contexts/PhotoContext";
import { responseType } from "../../types/data";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import React from "react";

const PhotoCarousel = () => {
  const { photos } = useContext(PhotoContext) as responseType;
  const [currPhoto, setCurrPhoto] = useState(0);
  const nextPhoto = () => {
    setCurrPhoto((prevPhoto) =>
      prevPhoto === photos.length - 1 ? 0 : prevPhoto + 1
    );
  };
  const prevPhoto = () => {
    setCurrPhoto((prevPhoto) =>
      prevPhoto === 0 ? photos.length - 1 : prevPhoto - 1
    );
  };
  return (
    <Stack direction="row" justifyContent="space-around">
      <Button onClick={prevPhoto}>
        <ArrowBackIos />
      </Button>
      <Box>
        <Box
          style={{
            width: "300px",
            height: "300px",
            margin: "10px auto",
            backgroundImage: `url(${photos[currPhoto].src.medium})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </Box>
      <Button onClick={nextPhoto}>
        <ArrowForwardIos />
      </Button>
    </Stack>
  );
};
export default PhotoCarousel;
