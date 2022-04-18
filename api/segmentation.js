import request from '../utils/request'
import { baseUrl } from '../config/env'


export function getImageInfoList(){
    return request({
        url: `${baseUrl}/image/list/`,
        method: "get",
    })
}


export function getImageInfoDetail(imageId){
    return request({
        url: `${baseUrl}/image/${imageId}/details/`,
        method: "get",
    })
}


export function postCloudDataDetail(imageId, cloudData){
    return request({
        url: `${baseUrl}/image/${imageId}/cloud/data/`,
        method: "POST",
        data: {cloudData: cloudData},
    })
}


export function postObjectDataDetail(imageId, objectData){
    return request({
        url: `${baseUrl}/image/${imageId}/object/data/`,
        method: "POST",
        data: {objectData: objectData},
    })
}


export function getSample(imageId){
    return request({
        url: `${baseUrl}/image/${imageId}/sample/details/`,
        method: "get",
    })
}


export function postSample(imageId, sampleDic){
    return request({
        url: `${baseUrl}/image/${imageId}/sample/details/`,
        method: "POST",
        data: sampleDic,
    })
}


export function getTagList(){
    return request({
        url: `${baseUrl}/image/tag/list/`,
        method: "get",
    })
}


export function getClassesSets(){
    return request({
        url: `${baseUrl}/classes/set/`,
        method: "get",
    })
}
