import axios from "axios";
export default class UserService {
  // addUser(props){
  //     return axios({
  //         method:'post',
  //         url:"http://localhost:4444/user",
  //         headers:{},
  //         data:{props}

  //     })
  // }
  addUser(props) {
    var axios = require("axios");
    var data = JSON.stringify({
      fullName: props.fullName,
      email: props.email,
    });

    var config = {
      method: "post",
      url: "http://localhost:4444/user",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}