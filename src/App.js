import { useEffect, useState } from 'react';
import './App.css';
import { quizData } from './components/quizData';

const backgroundImages =  [
  'https://wallpapers.com/images/hd/giant-stars-4k-space-q03wbnsie2ul47hh.jpg',
  'https://a-static.besthdwallpaper.com/planets-wallpaper-3840x2160-197_54.jpg',
  'https://images.hdqwalls.com/wallpapers/blue-ruby-nebula-4k-no.jpg',
  'https://i.pinimg.com/originals/ec/07/3d/ec073d1de243d025ca8699ab5dddc78b.jpg',
  'https://wallpapercave.com/wp/wp3508237.jpg',
  'https://wallpapercave.com/wp/wp8093250.jpg',
  'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701888978.jpg',
  'https://cdn.wallpapersafari.com/56/32/Or1CAT.jpg',
  'https://wallpaperaccess.com/full/384578.jpg',
  'https://static.vecteezy.com/system/resources/previews/024/448/956/large_2x/space-wallpaper-banner-background-stunning-view-of-a-cosmic-galaxy-with-planets-and-space-objects-elements-of-this-image-furnished-by-nasa-generate-ai-free-photo.jpg'

 
 ];

function App() {
  const [ currentQ, setCurrentQ] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score,setScore] = useState(0)
  const [bg,setBg] = useState('https://images2.alphacoders.com/132/1329016.png')
 const getRandomBg = ()=>{
  const randomBg = backgroundImages[Math.floor(Math.random()*backgroundImages.length)]
  setBg(randomBg)
 }
 const handleAnswerButton = (isCorrect)=>{
  if(isCorrect === true){
    setScore(score + 1)
    
  }
  const nextQ = currentQ +1;
  if(nextQ < quizData.length){
    setCurrentQ(nextQ)
  } else{
    setShowScore(true)
  }
}

 useEffect(()=>{
  getRandomBg()
 },[handleAnswerButton])

 const handleReset =()=>{
  setCurrentQ(0)
  setShowScore(false)
  setScore(0)
 }
 
  return (
    <div className='body' style={{background:`url(${bg})`,transition:'background-image 0.75s ease-out',height:'100vh'}}>
    <div className='container'>
      <h1 style={{color:'darkgrey', fontSize:'40px'}}>The Ultimate Space Quiz</h1>
         {showScore?
          (
          <div className='score-card'>
            Your Score : <br /> <span style={{fontSize:'90px'}}>{score}/10</span>
            <div className="replay-btn">
              <button onClick={handleReset}>Try Again</button>
            </div>
          </div>
           ):
           (
          <div className='question-card'>
            <h3 className='qNum'>{currentQ+1}/{quizData.length}</h3>
            <h3 className='qText'>{quizData[currentQ].questionText}</h3>
            {quizData[currentQ].answerOption.map((answerOption)=>(
               <div className='btn'>
              <button onClick={()=>handleAnswerButton(answerOption.isCorrect)}>{answerOption.answerText}</button>
              </div>
            ))}
          </div>
           )
            }
    </div>
    </div>
  );
}

export default App;
