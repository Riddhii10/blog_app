import {render,screen} from '@testing-library/react'
import Home from '@/app/page'

// it('should have dark text',()=>{
//     render(<Home/>)   //ARRANGE

//     const myElem=screen.getByText('dark')      //ACT

//     expect(myElem).toBeInTheDocument()  //ASSERT 
// })

// __tests__/Home.test.js
describe('Home', () => {
  it('renders the ToastContainer', () => {
    render(<Home />);
    const toastContainer = screen.getByRole('alert');
    expect(toastContainer).toBeInTheDocument();
  });

});
