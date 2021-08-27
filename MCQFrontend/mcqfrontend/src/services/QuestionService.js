import API from './api'

const QuestionService ={
    getQuestions:() =>{
        return API.get('/question/readAllQ',)
        .then(({data}) => {
            return data;
        })
          .catch((err) => {
            throw err
          });

    }
    
}

export default QuestionService;