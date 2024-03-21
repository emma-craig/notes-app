import React, { useState } from 'react';
import { FC } from 'react';
import PhotoCard from '../Photos/PhotoCard';
import PhotoGrid from '../Photos/PhotoGrid';
import PhotoList from '../Photos/PhotoList';
import PhotoCarousel from '../Photos/PhotoCarousel';
import { MenuItem, Select, SelectChangeEvent, Stack, FormControl, InputLabel } from '@mui/material';

const MainContent: FC = () => {
  enum LayoutView {
    Card = 'Card',
    Grid = 'Grid',
    List = 'List',
    Carousel = 'Carousel',
  }

  const [view, setView] = useState<string>(LayoutView.Card);
  const handleChange = (e: SelectChangeEvent) => {
    setView(e.target.value);
  };
  return (
    <>
      <FormControl sx={{py:2}}>
        <InputLabel>Layout</InputLabel>
        <Select
          value={view}
          label='Layount'
          onChange={handleChange}>
          <MenuItem value="Card">Card</MenuItem>
          <MenuItem value="Grid">Grid</MenuItem>
          <MenuItem value="List">List</MenuItem>
          <MenuItem value="Carousel">Carousel</MenuItem>
        </Select>
      </FormControl>
      <Stack
        // sx={{ minHeight: 'calc(100vh - 160px)'}}
        // py={2}
        // borderTop={1}
        >
        <div>
          {/* a horizontal list of each photo wth the text undernerath */}
          {view === 'Card' && <PhotoCard></PhotoCard>}
          {/* a grid layout of all the images, no text */}
          {view === 'Grid' && <PhotoGrid></PhotoGrid>}
          {/* list is vertical centralised list with text to right of each image */}
          {view === 'List' && <PhotoList></PhotoList>}
          {/* carousel / slider  */}
          {view === 'Carousel' && <PhotoCarousel></PhotoCarousel>}
        </div>
      </Stack>
    </>
  );
};
export default MainContent;
