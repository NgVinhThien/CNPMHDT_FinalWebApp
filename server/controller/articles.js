import articles from '../model/articles.js'

export const getHotArticle= (req, res)=>{
    articles.getHotArticle((data)=>{
        res.send(data);
    })
}