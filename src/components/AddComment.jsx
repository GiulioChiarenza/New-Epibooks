import { Component, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddComment=(asin)=> {
  const initialComment={
    comment: '',
    rate: 1,
    elementId: asin
  }
  // state = {
  //   comment: {
  //     comment: '',
  //     rate: 1,
  //     elementId: this.props.asin,
  //   },
  
  const[comment, setcomment]= useState(initialComment)
useEffect(()=>{

  
    setcomment(prevComment=>({
      ...prevComment, elementId:asin
    }))
},[asin])
  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== props.asin) {
  //     setcomment({...comment,
  //     elementId:props.asin})
     
  //   }
  

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZDg0ZGUwODVmYTAwMTk2MzFhMmMiLCJpYXQiOjE3MDcxMzcxMDEsImV4cCI6MTcwODM0NjcwMX0.fDeNIskXwXmS2dbKks7M9Xh0D0ClSNxGX0leXchE0vk',
          },
        }
      )
      if (response.ok) {
        alert('Recensione inviata!')
        setcomment(initialComment)
        // this.setState({
        //   comment: {
        //     comment: '',
        //     rate: 1,
        //     elementId: this.props.asin,
        //   },
        // })
      } else {
        throw new Error('Qualcosa è andato storto')
      }
    } catch (error) {
      alert(error)
    }
  }

  
    return (
      <div className="my-3">
        <Form onSubmit={sendComment}>
          <Form.Group className="mb-2">
            <Form.Label>Recensione</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci qui il testo"
              value={comment.comment}
              onChange={(e) =>
                setcomment(prevComment=> ({
                  ...prevComment, 
                  comment: e.target.value
                }))
                // this.setState({
                //   comment: {
                //     ...this.state.comment,
                //     comment: e.target.value,
                //   },
                // })
              }
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Valutazione</Form.Label>
            <Form.Control
              as="select"
              value={comment.rate}
              onChange={(e) =>
                setcomment(prevComment=> ({
                  ...prevComment,
                  rate: e.target.value
                }))
                // this.setState({
                //   comment: {
                //     ...this.state.comment,
                //     rate: e.target.value,
                //   },
                // })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Invia
          </Button>
        </Form>
      </div>
    )
  }


export default AddComment
