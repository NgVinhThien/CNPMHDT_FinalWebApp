import categeries from '../model/categories.js';
export const getAll= (req, res)=>{
    categeries.getAll((data)=>{
        res.status(200).json({
            success: true, data: data
        })
    });
}
export const getMainCategories= (req, res)=>{
    categeries.getMainCategories((data)=>{
        res.status(200).json({
            success: true, data: data
        });
    })
}
export const getSubCategories=(req, res)=>{
    categeries.getSubCategories((data)=>{
        res.status(200).send({data: data});
    })
}


