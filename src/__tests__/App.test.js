import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from '../App'
import Welcome from '../components/Welcome'
import AllTheBooks from '../components/AllTheBooks'
import fantasy from '../data/fantasy.json';
import CommentArea from '../components/CommentArea';
import SingleBook from '../components/SingleBook';

describe('General mounting', () =>{

    it('correctly mounts the welcome component', () => {
        render(<Welcome />) 
        
      })

      it('correctly rendering all the books card from json', ()=> {
        render(<AllTheBooks />)
        const allTheCard =screen.getAllByRole('img')
        expect(allTheCard.length).toBe(fantasy.length)
      })

      it('correctly rendering CommentArea component', ()=> {
        render(<CommentArea />)

      })
      it('correctly add card border color',()=>{
        render(<SingleBook />)
        const addBorderColor= screen.getByRole('img')
        fireEvent.click(addBorderColor)
        expect(addBorderColor).toHaveStyle('border: 3px solid red')
      })
})