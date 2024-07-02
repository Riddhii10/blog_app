import {render,screen} from '@testing-library/react'
import Home from '@/app/page'

it('should have dark text',()=>{
    render(<Home/>)   //ARRANGE

    const myElem=screen.getByText('dark')      //ACT

    expect(myElem).toBeInTheDocument()  //ASSERT 
})