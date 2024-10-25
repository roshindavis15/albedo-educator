import db from '../models/index.js';
const {Package}=db;

export const addPackage=async(packageData)=>{
    return await Package.create(packageData);
};