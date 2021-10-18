import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {imgUrl,API_KEY} from '../../Constants/Constants'
import YouTube from 'react-youtube'

function Rowpost(props) {
    const [movies, setMovies] = useState([])
    const [YTid, setYTid] = useState('')
    useEffect(() => {
         axios.get(props.url).then((response)=>{
            console.log(response.data)
            setMovies(response.data.results)
         }).catch(err =>{
            //handle errors
         })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      };
    const YoutubeVideo = (id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            console.log(response.data.results)
            if(response.data.results.length!==0){

                setYTid(response.data.results[0])
            }
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies && movies.map((obj)=>
                    <img onClick={()=>YoutubeVideo(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} alt='poster' src={`${imgUrl+obj.backdrop_path}`} />
                )}
            </div>
           {YTid && <YouTube videoId={YTid.key} opts={opts}/>}
        </div>
    )
}

export default Rowpost
