import React from 'react'
import Row from '../Row/Row';
import requests from '../../../utils/requests';
const RowList = () => {
  return (
    <>
    <Row 
    title="NETFLIX ORIGINALS" 
    fetchUrl={requests.fetchNetflixOriginals} 
    isLargeRow={true}
    />

    <Row 
    title="Trending Now"
    fetchUrl={requests.fetchTrending}
    isLargeRow={false}  
    />
    <Row 
    title="Top Rated"
    fetchUrl={requests.fetchTopRated}
    isLargeRow={false}
    />
    <Row
    title="Action Movies"
    fetchUrl={requests.fetchActionMovies}
    isLargeRow={false}
    />
   
   
    </>
  )
};

export default RowList
