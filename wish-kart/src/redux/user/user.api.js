import axios from "axios";

export const LoginAPI = () => {
  axios
    .get(`https://meesho-database.vercel.app/users`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
