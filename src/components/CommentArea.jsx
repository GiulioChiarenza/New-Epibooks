import { Component, useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea=(props)=> {
  const[comments,setcomments]= useState([])
  const[isLoading,setisLoading]= useState(false)
  const[isError,setisError]= useState(false)
  // state = {
  //   comments: [],
  //   isLoading: false,
  //   isError: false,
  // }

  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       'https://striveschool-api.herokuapp.com/api/comments/' +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization:
  //             'Bearer inserisci-qui-il-tuo-token',
  //         },
  //       }
  //     )
  //     console.log(response)
  //     if (response.ok) {
  //       let comments = await response.json()
  //       this.setState({ comments: comments, isLoading: false, isError: false })
  //     } else {
  //       console.log('error')
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     this.setState({ isLoading: false, isError: true })
  //   }
  // }
useEffect(()=>{
 const fetchComments=  async () => {
    
      setisLoading(true)
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' +
            props.asin,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZDg0ZGUwODVmYTAwMTk2MzFhMmMiLCJpYXQiOjE3MDcxMzcxMDEsImV4cCI6MTcwODM0NjcwMX0.fDeNIskXwXmS2dbKks7M9Xh0D0ClSNxGX0leXchE0vk',
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          setcomments(comments)
          setisLoading(false)
          setisError(false)
         
        } else {
          setisLoading(false)
          setisError(true)
         
        }
      } catch (error) {
        console.log(error)
        setisLoading(false)
        setisError(true)
        
      }
    }
  }, [props.asin])
  // componentDidUpdate = async (prevProps) => {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({
  //       isLoading: true,
  //     })
  //     try {
  //       let response = await fetch(
  //         'https://striveschool-api.herokuapp.com/api/comments/' +
  //           this.props.asin,
  //         {
  //           headers: {
  //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZDg0ZGUwODVmYTAwMTk2MzFhMmMiLCJpYXQiOjE3MDcxMzcxMDEsImV4cCI6MTcwODM0NjcwMX0.fDeNIskXwXmS2dbKks7M9Xh0D0ClSNxGX0leXchE0vk',
  //           },
  //         }
  //       )
  //       console.log(response)
  //       if (response.ok) {
  //         let comments = await response.json()
  //         this.setState({
  //           comments: comments,
  //           isLoading: false,
  //           isError: false,
  //         })
  //       } else {
  //         this.setState({ isLoading: false, isError: true })
  //       }
  //     } catch (error) {
  //       console.log(error)
  //       this.setState({ isLoading: false, isError: true })
  //     }
  //   }
  

  
    return (
      <div className="text-center">
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={props.asin} />
        <CommentList commentsToShow={comments} />
      </div>
    )
  }


export default CommentArea
