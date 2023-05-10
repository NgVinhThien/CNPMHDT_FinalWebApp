import articles from '../model/articles.js'

export const getHotArticle= (req, res)=>{
    articles.getHotArticle((data)=>{
        res.status(200).send({data: data});
    })
}
export  const getDetails=(req, res)=>{

    let id= req.params.articleId;
   
    articles.getDetails(id, (data)=>{
        res.status(200).send({data: data})
    })
}