import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Home from './components/Home'
import Reviews from './components/Reviews'
import About from './components/About'

const App = () => {
  const [reviews, setReviews] = useState([])
  const [clickHome, setClickHome] = useState(true)
  const [clickReview, setClickReview] = useState(false)
  const [clickAbout, setClickAbout] = useState(false)

  const getReviews = () => {
    axios.get('http://localhost:3000/reels')
    .then((response) => setReviews(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }
  
  const showHome = () => {
    setClickHome(true)
    setClickAbout(false)
    setClickReview(false)
  }
  
  const showAbout = () => {
    setClickHome(false)
    setClickAbout(true)
    setClickReview(false)
  }

  const showReview = () => {
    setClickHome(false)
    setClickAbout(false)
    setClickReview(true)
  }

  useEffect(() => {
    getReviews()
  }, [])   

  return (
    <>
    
        <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-between'>
        <span class='text-2xl '>
        <a onClick={showHome}>Reel It In</a>
      </span>
          <ul className='md:flex md:items-center '>
            <li className='mx-4'>
            <a class="text-xl hover:text-cyan-500 duration-500" onClick={showHome}>
              Home
            </a>
            </li>
            <li className='mx-4 my-6 md:my-0'>
            <a class="text-xl hover:text-cyan-500 duration-500" onClick={showReview}>
              Reviews
            </a>
            </li>
            <li className='mx-4 my-6 md:my-0'>
            <a class="text-xl hover:text-cyan-500 duration-500" onClick={showAbout}>
              About
            </a>
            </li>
          </ul>
        </nav>

    
    {clickHome ? (<Home />) :null}
    {clickReview ? (<Reviews getReviews={getReviews} setReviews={setReviews}  reviews={reviews}/>) :null}
    {clickAbout ? (<About />) :null}
    
    </>
  );
}

export default App;

