import express from "express";
import { 
    getInvestments, 
    getInvestmentById,
    createInvestment,
    updateInvestment,
    deleteInvestment
} from "../controllers/InvestmentController.js";

const router = express.Router();

router.get('/investments', getInvestments);
router.get('/investments/:id', getInvestmentById);
router.post('/investments', createInvestment);
router.patch('/investments/:id', updateInvestment);
router.delete('/investments/:id', deleteInvestment);

export default router