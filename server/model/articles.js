import connection from '../common/connect.js'

const article= (article)=>{
    this.id= article.id;
    this.title= article.title;
    this.publish_date= article.publish_date;
    this.views= article.views;
    this.abstract= article.abstract;
    this.content= article.content;
    this.categories_id= article.categories_id;
    this.premium= article.premium;
    this.writer_id= article.writer_id;
    this.status= article.status;
    this.note= article.note;
    this.like= article.like;
}
article.getHotArticle= (result)=>{
    connection.query("SELECT * FROM enewspaper.articles order by views desc limit 3", (err, results)=>{
        if(err) throw err;
        result(results);
    })
}
article.getDetails= (articleId, result)=>{
    connection.query("Select * from enewspaper.articles where id=?", articleId, (err, resData)=>{
        if(err) throw err;
        result(resData);
    })
}
export default article;