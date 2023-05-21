import axios from "axios";

const retrieveData = async (pageLink)=>{
    const response = await axios.get(pageLink,
        {
        headers:{},
        params: {},
        }
    ).then(response=>console.log(response));
    console.log("test");
    console.log(response.data);
    return response.data;
}


export default retrieveData;