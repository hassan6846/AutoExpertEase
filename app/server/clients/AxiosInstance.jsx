
import axios from 'axios';



const ApiInstance = axios.create({

  baseURL: 'http://localhost:4001/api/v1', // Add your base URL here

});



export default ApiInstance;
