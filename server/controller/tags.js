import tags from "../model/tags.js";

export const getAllTags= (req, res)=>{
    tags.getAllTags((data)=>{
        res.status(200).send({data: data});
    })
}