import axios from "axios";
export default class UserService{
    addUser(props){
        return axios({
            method:'post',
            url:"http://localhost:4444/user",
            headers:{},
            data:{props}

        })
    }
}