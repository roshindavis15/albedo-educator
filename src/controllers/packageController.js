import db from '../models/index.js';
const {Package}=db;
import { addPackage } from '../services/packageService.js';


//creating package
export const createPackage=async(req,res,next)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const newPackage=await addPackage(req.body);
        console.log("newPackage:",newPackage);
        
        res.status(201).json(newPackage);
    } catch (error) {
        next(error);
    }
}


 //for show all packages
 export const getAllPackages=async(req,res,next)=>{
    try {
        const packages=await Package.findAll();
        console.log("packages:",packages);
        res.status(200).json(packages);
        
    } catch (error) {
        next(error)
    }
}