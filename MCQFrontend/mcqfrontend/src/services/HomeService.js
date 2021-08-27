import API from './api'

const HomeService ={
    submitName:(data) =>{
        return API.post('/user/createNewUser',data)
        .then((response) => {
            localStorage.setItem('user',JSON.stringify(response.data.user))
            return response.data.user;
        })
          .catch((err) => {
            throw err.response.data.error
          });

    }
    
}

export default HomeService;