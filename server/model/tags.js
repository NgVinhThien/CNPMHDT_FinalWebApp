import connection from '../common/connect.js'

const tags= function(tags){
    this.id= tags.id;
    this.value= tags.value;
}

tags.getAllTags= function(result){
    connection.query("SELECT * FROM enewspaper.tags", (err, resData)=>{
        if(err) throw err;
        result(resData);
    })
}

export default tags;