import { useEffect } from 'react'
import React, {useState} from 'react'
import Newszitems from './Newszitems'
import InfiniteScroll from "react-infinite-scroll-component"
import ClipLoader from "react-spinners/ClipLoader";

function News (props) {

  const [articles,setarticles]= useState([])
  const [page,setpage]= useState(1)
  const [totalrel,settotalrel]= useState(0)
  const updatenews = async()=>{
      props.progress(10)
      let url =`https://newsapi.org/v2/top-headlines?${props.query?`q=${props.query}&`:''}country=us${props.category?`&category=${props.category}`:""}&apiKey=${props.apikey}&page=${page}`
      let data= await fetch(url) 
      props.progress(40)
      let main = await data.json()
      props.progress(70)
      setarticles(main.articles)
      settotalrel(main.totalResults)
      props.progress(100)
  }
  useEffect(()=>{
    updatenews()
  },[])

  const fetchMoreData = async()=>{
    setpage(page+1)
    let url=`https://newsapi.org/v2/top-headlines?${props.query?`q=${props.query}&`:''}country=us${props.category?`&category=${props.category}`:""}&apiKey=0a6f9eedced446d3aa416b63c63d1292&page=${page+1}`
    let data= await fetch(url)
    let main= await data.json()
    setarticles(articles.concat(main.articles))
  }

    return (
      <>
      <div className={`container d-flex justify-content-center align-items-center mt-3 ${props.krdeblackcard==='bg-dark text-white'?"text-white":"text-white "}`} >
       <h1 style={{marginTop:'80px'}}>News Ocean - Top{props.headline} Headlines</h1>
       </div>
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length<=totalrel}
          loader={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
          <ClipLoader
            color={'blue'}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>}
        >
      <div  className='d-flex flex-wrap justify-content-center align-items-center'>
        {articles.map((elements) => (
             <div key={elements.url}>
            <Newszitems 
              imageUrl={elements.urlToImage===null? "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=":elements.urlToImage}
              title={elements.title.slice(0, 90)}
              description={elements.description}
              url1={elements.url}
              cardblack={props.krdeblackcard}
              writer={elements.author}
              date={elements.publishedAt}
              source={elements.source.name}
            />
          </div>
        ))}
      </div>
      </InfiniteScroll>
    </>

    )
  
}

export default News
