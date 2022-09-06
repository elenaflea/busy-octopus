import './App.css';
import { useState, useEffect } from 'react';
import blue from './images/blue.png';
import music from './images/music.png';
import social from './images/social.png';
import recreational from './images/recreational2.png';
import busywork from './images/busywork.png';
import relaxation from './images/relaxation.png';
import cooking from './images/cooking.png';
import education from './images/education.png';
import charity from './images/charity.png';




function App() {

const [activity, setActivity] = useState("");
const [type, setType] = useState("");
const [participants, setParticipants] = useState("1");
const [like, setLike] = useState(Math.floor(Math.random() * 999));


// const pinArray = [blue, music];


useEffect (  ()=> {

  getActivity();

}, [])


  const getActivity = async ()=> {
    const responce = await fetch('https://www.boredapi.com/api/activity/');
    const data = await responce.json();
    const pin = document.querySelector("#pin");
  
    // console.log(data);
    setActivity(data.activity);
    setType(data.type);
    setParticipants(data.participants);
    window.scroll(0, 500);


    if (data.type === "music") {
  pin.setAttribute('src' , music)
    }
    else if (data.type === "social") {
      pin.setAttribute('src' , social)
        }
        else if (data.type === "recreational") {
          pin.setAttribute('src' , recreational)
            }
            else if (data.type === "busywork") {
              pin.setAttribute('src' , busywork)
                }
                else if (data.type === "relaxation") {
                  pin.setAttribute('src' , relaxation)
                    }
                    else if (data.type === "cooking") {
                      pin.setAttribute('src' , cooking)
                        }
                        else if (data.type === "education") {
                          pin.setAttribute('src' , education)
                            }
                            else if (data.type === "charity") {
                              pin.setAttribute('src' , charity)
                                }


  }
  


  return (
    <div className="App">

<div className='headbox'>
<h1> <span className='hello' >Hello!</span> I’am  your personal assistant. What would you like to do today?</h1>
</div>
    

      <form className='btnform'>
        <button className='btn' onClick={ ()=> getActivity() }>
          Find some activity
        </button>
      </form>

      <div className='activity-box'>

      <p className='activity-type' >Type of activity : <span className='hello-two'> { type } </span>  </p>

        <img id='pin' src={ blue }  alt="pin-icon" width="100px" height="100px" />

      <p className='activity-type' > { participants === 1  ?  "for " +  participants   + " person" : "for " +  participants  + " people" }</p>
      
      <div className='star-box'>
          <svg className='star' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>

          <svg className='star' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>

          <svg className='star' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>

          <svg className='star' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>

          <svg className='star' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>

      </div>
      
      <p className='hello-two'> { activity } </p>

<div className='star-box'>
    <p className='activity-type zeropadding'> { like } </p>
      <button className='btn-like zeropadding' onClick={ ()=> setLike (like + 1 ) } > 
      <svg  xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"  viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
      </svg>
      </button>
</div>

</div>
<div className='footer'>

  <a className='line' href='https://lunacode.fr/' target="_blank" rel="noreferrer" >
  <p className='footer-text'>
  Crafted with
  </p>
  <svg className='line-heart' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
  </svg>

  <p className='footer-text'>
  by Elena GRONDIN
  </p>
  </a>

  <a className='cons' href='http://www.365cons.com/' target="_blank" rel="noreferrer">
Lovely illustrations: 365cons.com
  </a>
  

</div>
      
    </div>
  );
}

export default App;
