import { useEffect, useRef, useState } from "react";
import { decode } from "html-entities";
import { v4 as uuidv4 } from "uuid";

const Quiz = (props) => {

  


  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [answersCount, setAnswersCount] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [triggerNewQuiz, setTriggerNewQuiz] = useState(false);

  const allQuestionsAnswered = questions.every(question => question.selectedAnswer);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from  0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements array[i] and array[j]
    }
    return array;
  }

  
  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(
            `https://opentdb.com/api.php?amount=${props.formData.questionsAmount}&${props.formData.category}&${props.formData.difficulty}&type=multiple`
          );
          const data = await res.json();

          const questionsData = data.results.map((question) => {
            const answersArray = shuffle([
              ...question.incorrect_answers,
              question.correct_answer,
            ]);

            return {
              question: decode(question.question),
              correctAnswer: decode(question.correct_answer),
              randomizedAnswers: answersArray.map((answer) => decode(answer)),
              selectedAnswer: "",
              id: uuidv4(),
            };
          });
          setQuestions(questionsData);
          setLoading(false);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchData();

    

    
  }, [triggerNewQuiz]);

 

  function toggleSelected(event) {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === event.target.id) {
          return {
            ...question,
            selectedAnswer: event.target.dataset.value,
          };
        } else {
          return question;
        }
      });
    });

    
  }

  function tallyAnswers() {

     if (allQuestionsAnswered) {

      window.scrollTo(0, document.body.scrollHeight);

      if (!quizEnded) {
        for (const question of questions) {
          if (question.selectedAnswer === question.correctAnswer) {
            setAnswersCount(prevCount => prevCount + 1);
            
          }
          setQuizEnded(true);
          window.scrollTo(0, document.body.scrollHeight);
        }
      } else {
        setLoading(true);
        setQuizEnded(false);
        setAnswersCount(0);
        setTriggerNewQuiz(prevValue => !prevValue);
        window.scrollTo(0,0);
        
        
  
      }

     }
    
    
  }

  function backToHome() {
    setQuizEnded(false);
    setAnswersCount(0);
    props.setQuizStarted(false);

  }

  if (loading) return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
   
  const questionElements = questions.map((question, index) => {
    return (
      <div className="question-container" id={question.id} key={index}>
        <h1 className="question">{question.question}</h1>
        <div className="answers-container">
          {question.randomizedAnswers.map((answer, idx) =>  {

              
          let styles =  {};

          if (answer === question.selectedAnswer) {
            styles.backgroundColor = "#D6DBF5";
            styles.fontWeight = "700";
          }

          if (quizEnded && answer === question.selectedAnswer) {
            if(answer === question.correctAnswer) {
              styles.backgroundColor = "#5bfa7d";
            } else {
              styles.backgroundColor = "#F8BCBC";
              styles.opacity = "0.6";
            }
          } 

          if (quizEnded && answer !== question.selectedAnswer) {
            styles.opacity = "0.6";

            if (answer === question.correctAnswer){
              styles.backgroundColor = "#94D7A2";
            }
          }
            
            return (
              (
                <button
                  key={idx}
                  data-value={answer}
                  id={question.id}
                  onClick={(event) => toggleSelected(event)}
                  className="answer"
                  disabled={quizEnded && true}
                  style={styles}
                >
                  {answer}
                </button>
              )
            )
          }
          )}
        </div>
        <hr></hr>
      </div>
    );
  });
  

  return (
    <div className="quiz-container">
      <div className="questions-container">{questionElements}</div>
      <div className="score-container">
        {quizEnded && <h1 className="score"> You scored {answersCount >  0 ? answersCount : '0'}/{props.formData.questionsAmount} correct answers </h1>}
        <div className="quiz-ended-buttons">
          {allQuestionsAnswered && <button className="btn" onClick={tallyAnswers}>{quizEnded ? "Play Again" : "Check Answers"}</button>}
          {quizEnded && <button className="btn" onClick={backToHome}>Back to home</button>}
        </div>
        
      </div>
      
      <img className='home-yellow-blob' src='yellow-blob.svg' alt='yellow blob illustration'/>
      <img className="home-blue-blob"src='blue-blob.svg' alt='light blue blob illustration'/>
    </div>
  );
};

export default Quiz;
