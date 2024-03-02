


const HomePage = (props) => {

    return (
        <div className='home-page'>
            <h1 className='title'>Quizzical</h1>
            <p className='home-description'>Some description if needed</p>
            <form > 
                    <div>
                        <label for="questionsAmount">Number of Questions: </label>
                        <select  name="questionsAmount">
                            <option id value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                    
                     
                     <div>
                        <label for="catagory">Select Category: </label>
                        <select  name="catagory">
                            <option id value="Any Catagory">Any Category</option>
                            <option value="General Knowledge">General Knowledge</option>
                            <option value="Entertainment: Books">Entertainment: Books</option>
                            <option value="Entertainment: Film">Entertainment: Film</option>
                            <option value="Entertainment: Music">Entertainment: Music</option>
                            <option value="Entertainment: Musicals & Theatres">Entertainment: Musicals & Theatres</option>
                            <option value="Entertainment: Television">Entertainment: Television</option>
                            <option value="Entertainment: Video Games">Entertainment: Video Games</option>
                            <option value="Entertainment: Board Games">Entertainment: Board Games</option>
                            <option value="Science & Nature">Science & Nature</option>
                            <option value="Science: Computers">Science: Computers</option>
                            <option value="Science: Mathematics">Science: Mathematics</option>
                            <option value="Mythology">Mythology</option>
                            <option value="Sports">Sports</option>
                            <option value="Geography">Geography</option>
                            <option value="History">History</option>
                            <option value="Politics">Politics</option>
                            <option value="Art">Art</option>
                            <option value="Celebrities">Celebrities</option>
                            <option value="Animals">Animals</option>
                            
                        </select>
                     </div>
                     <div>
                        <label for="difficulty">Select Difficulty: </label>
                        <select  name="difficulty">
                            <option id value="Any Difficulty">Any Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    

            </form>
            <button className='btn' onClick={props.startQuiz}>Start quiz</button>
            <img className="home-blue-blob"src='blue-blob.svg' alt='light blue blob illustration'/>
            <img className='home-yellow-blob' src='yellow-blob.svg' alt='yellow blob illustration'/>
      </div>
    )
}

export default HomePage