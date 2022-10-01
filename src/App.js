import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './index.css'

const App = () => {
    const [quoteData,setQouteData] = useState([]);
    const [newQoute,setNewQuote] = useState(false)
    useEffect(() => {
        axios.request({
            method: 'GET',
            url: 'https://famous-quotes4.p.rapidapi.com/random',
            params: {category: 'all', count: '1'},
            headers: {
              'X-RapidAPI-Key': '42ca516b7amshb3430e4d7c91715p1b5024jsnb40e2e325bd9',
              'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
            }
        }).then(function (response) {
            console.log(response.data);
            setQouteData(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    },[newQoute])
  return (
    <>
     <div>
        {
            quoteData.map((data) =>(
                <div key={data.author} id="quote-box" >
                <div  className=' p-3 m-3 d-flex justify-content-center align-items-center' id="text">
                    <h3>
                   <q> {data.text}</q>
                    </h3>
                </div>
                <div id="author">
                    <h1 className=' p-3 m-3 d-flex justify-content-center align-items-center'>
                    {data.author}
                    </h1>
                </div>
                <div >
                    <button className='btn btn-danger p-3 m-3 d-flex justify-content-center align-items-center' id="new-quote" onClick={() => setNewQuote(!newQoute)}>
                        New Quote
                    </button>
                </div>
                <div>
                    <a className='btn btn-primary p-3 m-3 d-flex justify-content-center align-items-center' id="tweet-quote" rel='noreferrer' target="_blank" href="https://www.twitter.com/intent/tweet">Share in Twitter</a>
                </div>    
                </div>
            ))
        }

    </div>
    </>
   
  )
}

export default App