import connection from '../common/connect.js';

const categories= function(categeries){
    this.id= categeries.id;
    this.name= categeries.name;
    this.parent_id= categeries.parent_id;
}
categories.getAll= function(result){
    connection.query("select * from categories", (err, results)=>{
        if(err) throw err; 
        result(results);
    });
}
categories.getMainCategories= (result)=>{
    connection.query("SELECT * FROM enewspaper.categories where parent_id is null", (err, resData)=>{
        if(err) throw err;
        result(resData);
    })
}
categories.getSubCategories= (result)=>{
    connection.query("SELECT * FROM enewspaper.categories where parent_id is not null ", (err, resData)=>{
        if(err) throw err;
        result(resData);
    })
}

export default categories;