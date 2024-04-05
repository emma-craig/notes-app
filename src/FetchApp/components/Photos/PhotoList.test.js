import { render, screen } from '@testing-library/react';
import PhotoList from './PhotoList';
import PhotoContext from '../../contexts/PhotoContext';
import productsMock from '../../mocks/productsMock';

it('should render the list layout', () => {

  render(
    <PhotoContext.Provider value={{photos: productsMock}}>
      <PhotoList />
    </PhotoContext.Provider>
  );

  const table = screen.getByTestId('list-table');
  expect(table).toBeInTheDocument();
  const img = screen.getAllByTestId('list-card-text');
  expect(img[0]).toBeInTheDocument();
});
