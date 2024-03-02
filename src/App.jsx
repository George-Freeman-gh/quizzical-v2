import { useState, useEffect } from 'react'
import './App.css'

import Quiz from './Components/Quiz'

function App() {

  const [quizStarted, setQuizStarted] = useState(false);
  const [formData, setFormData] = useState({
    questionsAmount: "5",
    category: "",
    difficulty: ""
  })

  function handleSubmit(event) {
    event.preventDefault();
    setQuizStarted(true);



  };

  function handleChange(event) {

    const {name, value} = event.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
    
    
  };

 

  return (
    <>
      {quizStarted ? <Quiz 
      formData={formData}
      setQuizStarted={setQuizStarted}/> : 
      <div className='home-page'>
      <h1 className='title'>Quizzical</h1>
      <p className='home-description'>Some description if needed</p>
      <form > 
              <div className='select-container'>
                  <label htmlFor="questionsAmount">Number of Questions: </label>
                  <select  id="questionsAmount" value={formData.questionsAmount}  onChange={handleChange} name="questionsAmount">
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                  </select>
              </div>
              
               
               <div className='select-container'>
                  <label htmlFor="category">Select Category: </label>
                  <select id="category" value={formData.category} name="category" onChange={handleChange}>
                      <option value="">Any Category</option>
                      <option value="&category=9">General Knowledge</option>
                      <option value="&category=10">Entertainment: Books</option>
                      <option value="&category=11">Entertainment: Film</option>
                      <option value="&category=12">Entertainment: Music</option>
                      <option value="&category=13">Entertainment: Musicals & Theatres</option>
                      <option value="&category=14">Entertainment: Television</option>
                      <option value="&category=15">Entertainment: Video Games</option>
                      <option value="&category=16">Entertainment: Board Games</option>
                      <option value="&category=17">Science & Nature</option>
                      <option value="&category=18">Science: Computers</option>
                      <option value="&category=19">Science: Mathematics</option>
                      <option value="&category=20">Mythology</option>
                      <option value="&category=21">Sports</option>
                      <option value="&category=22">Geography</option>
                      <option value="&category=23">History</option>
                      <option value="&category=24">Politics</option>
                      <option value="&category=25">Art</option>
                      <option value="&category=26">Celebrities</option>
                      <option value="&category=27">Animals</option>
                      
                  </select>
               </div>
               <div className='select-container'>
                  <label htmlFor="difficulty">Select Difficulty: </label>
                  <select  id="difficulty" value={formData.difficulty} name="difficulty" onChange={handleChange}>
                      <option value="">Any Difficulty</option>
                      <option value="&difficulty=easy">Easy</option>
                      <option value="&difficulty=medium">Medium</option>
                      <option value="&difficulty=hard">Hard</option>
                  </select>
              </div>
              
              <button className='btn' type="submit" onClick={(event) => handleSubmit(event)}>Start quiz</button>
      </form>
      
      <img className="home-blue-blob"src='blue-blob.svg' alt='light blue blob illustration'/>
      <img className='home-yellow-blob' src='yellow-blob.svg' alt='yellow blob illustration'/>
</div>}
    </>
  )
}

export default App
