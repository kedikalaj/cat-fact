import axios from "axios";

const retrieveData = async ()=>{
    const url="https://catfact.ninja/facts";
    const response = await axios.get(url)
    console.log(response.data);
    return response.data;
}

export default retrieveData;