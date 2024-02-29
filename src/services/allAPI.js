
import { SERVER_URL } from "./server_url";
import { commonAPI } from "./commonAPI";

//add component call upload video - store video in http://localhost:3000/videos
export const uploadVideoAPI = async (video)=>{
    //send response to add component
    return await commonAPI("POST",`${SERVER_URL}/video`,video)
}


//get video api called by view component
export const getAllVideosAPI = async ()=>{
    return await commonAPI ("GET",`${SERVER_URL}/video`,"")
}


//store watch history by videoCard to http://localhost:3000/history
export const saveHistoryAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}


//get history to watch component to http://localhost:3000/history
export const getHistoryAPI = async () =>{
    return await commonAPI ("GET",`${SERVER_URL}/history`,"")
} 

//remove history
export const removeHistoryAPI = async (videoId) =>{
    return await commonAPI ("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

//remove video
export const removeVideoAPI = async (videoId)=>{
    return await commonAPI ("DELETE",`${SERVER_URL}/video/${videoId}`,{})
}

//save category
export const addCategoryAPI = async (categoryData)=>{
return await commonAPI  ("POST",`${SERVER_URL}/categories`,categoryData)
}

//get category to category component
export const getCategoryAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

//remove category API
export const removeCategoryAPI = async (categoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${categoryId}`,{})
 
}

//get single video api
export const getVideoAPI =async (videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/video/${videoId}`,"")
}

//update category api(for put request 2 arguement is must-1st is value to be updated,2nd is to what, value need to be updated)
export const updateCategoryAPI = async (categoryId,updatedCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updatedCategoryDetails)

}

//getSingleCategory API
export const getSingleCategoryAPI = async (categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")
}
