import categeries from '../model/categories.js';
export const getAll= (req, res)=>{
    categeries.getAll((data)=>{
        res.send(data);
    });

}

