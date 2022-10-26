import Investment from "../models/InvestmentModel.js";

export const getInvestments = async (req, res) => {
    try {
        const response = await Investment.findAll();
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getInvestmentById = async (req, res) => {
    try{
        const response = await Investment.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch(err){
        console.log(err.message);
    }
}

export const createInvestment = async (req, res) => {
    try{
        await Investment.create(req.body)
        res.status(201).json({msg: "Investment Created"});
    } catch(err){
        console.log(err.message);
    }
}

export const updateInvestment = async (req, res) => {
    try{
        await Investment.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Investment Updated"});
    } catch(err){
        console.log(err.message);
    }
}

export const deleteInvestment = async (req, res) => {
    try{
        await Investment.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Investment Deleted"});
    } catch(err){
        console.log(err.message);
    }
}