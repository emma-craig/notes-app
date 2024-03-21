import { Stack, Card, CardMedia, Grid } from '@mui/material';
import { Photo, responseType } from './../../types/data';
import { useContext } from 'react';
import { PhotoContext } from '../../contexts/PhotoContext';
import React from 'react';

const PhotoGrid = () => {
  const { photos } = useContext(PhotoContext) as responseType;

  return (
    <Grid
      container
      gap={5}
      justifyContent="space-between">

      {photos &&
        photos.map((photo: Photo) => {
          return (
            <Stack
              key={photo.id}
              justifyContent="space-between">
              <Card
                key={photo.id}
                sx={{ height: '150px', width: '150px' }}>
                <CardMedia
                  component="img"
                  alt={photo.alt}
                  src={photo.src.small}
                  sx={{ height: '150px', width: '150px' }}></CardMedia>
              </Card>
            </Stack>
          );
        })}
    </Grid>
  );
};

export default PhotoGrid;
