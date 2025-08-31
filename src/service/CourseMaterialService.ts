import axios from "axios";
import { log } from "console"
import { url } from "inspector";

export const CourseMaterialService = async() =>{
    try {
        const response = await axios.get("");
        return response.data;
        console.log("Course Material fetched successfully",response);
        
        
    } catch (error) {
        console.error(error);
        
    }
}
