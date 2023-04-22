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

export default categories;