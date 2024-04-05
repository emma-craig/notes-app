import productsMock from './../../mocks/productsMock'
import {render, screen } from '@testing-library/react'
import  PhotoContext  from '../../contexts/PhotoContext'
import MainContent from './MainContent'
import Footer from '../Footer/Footer'


it('should render card layout as default', () => {
    render(
        <PhotoContext.Provider value={productsMock}>
        <MainContent />
        <Footer />
      </PhotoContext.Provider>
    )
expect(screen.getByTestId('photoCardContainer')).toBeInTheDocument()
})


