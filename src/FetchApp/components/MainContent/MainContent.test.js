import productsMock from './../../mocks/productsMock'
import {render, screen } from '@testing-library/react'
import { PhotoContext } from '../../contexts/PhotoContext'
import Header from '../Header/Header'
import MainContent from './MainContent'
import Footer from '../Footer/Footer'

it('should render card layout when selected', () => {
    render(
        <PhotoContext.Provider value={productsMock}>
        <Header />
        <MainContent />
        <Footer />
      </PhotoContext.Provider>
    )
expect(screen.getByTestId('grid')).toBeInTheDocument()
})

