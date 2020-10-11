import axios from "axios";

const baseUrl="http://localhost:5000/api/"

export default {
    deliveryToke(url = baseUrl + 'TokenDetails/'){
        return{
            fetchAll:() => axios.get(url),
            fetchById : Id => axios.get(url+Id),
            create: newRecord => axios.post(url,newRecord), 
            update:(Id,updateRecord) => axios.put(url= Id ,updateRecord),
            delete: Id => axios.delete(url+Id)
        }
    }
}