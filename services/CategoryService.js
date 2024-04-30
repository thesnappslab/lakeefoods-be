const { statusCodes, statusMessages } = require("../constants/ApiConstants");
const Category = require("../models/Category");
const categorySerializer = require("../serializers/CategorySerializer");
const responseSerializer = require("../serializers/ResponseSerializer")

const createCategory = async(req, res) => {
    try{
        const categoryRequest= req.body;
        if(categoryRequest.name && categoryRequest.description && categoryRequest.segments && categoryRequest.segments.length>0){
            const existingCategory= await Category.findOne({"category_name": categoryRequest.name});
            if(!existingCategory){
                const category = new Category(categorySerializer({...categoryRequest, createdBy: "system", modifiedBy: "system"}));
                const addedCategory= await category.save();
                res.status(statusCodes.created).send(responseSerializer(statusCodes.created, true, addedCategory, statusMessages.categoryCreateSuccess)); 
            }else{
                res.status(statusCodes.recordExists).send(responseSerializer(statusCodes.recordExists, false, null, statusMessages.categoryCreateFailedRecordExists)); 
            }
        }else{
            res.status(statusCodes.badRequest).send(responseSerializer(statusCodes.badRequest, false, null, statusMessages.categoryCreateFailedBadRequest))
        }
    }catch(err){
        console.log(err)
        res.status(statusCodes.internalServerError).send(responseSerializer(statusCodes.internalServerError, false, null, statusMessages.internalServerError))
    }
}

const getCategories = async(req, res) => {
    try{
        
    }catch(err){
        console.log(err)
        res.status(statusCodes.internalServerError).send(responseSerializer(statusCodes.internalServerError, false, null, statusMessages.internalServerError))
    }
}

const getCategory = async(req, res) => {
    try{
        
    }catch(err){
        console.log(err)
        res.status(statusCodes.internalServerError).send(responseSerializer(statusCodes.internalServerError, false, null, statusMessages.internalServerError))
    }
}

const editCategory = async(req, res) => {
    try{
        
    }catch(err){
        console.log(err)
        res.status(statusCodes.internalServerError).send(responseSerializer(statusCodes.internalServerError, false, null, statusMessages.internalServerError))
    }
}

const deleteCategory = async(req, res) => {
    try{
        
    }catch(err){
        console.log(err)
        res.status(statusCodes.internalServerError).send(responseSerializer(statusCodes.internalServerError, false, null, statusMessages.internalServerError))
    }
}

module.exports = { createCategory, getCategories, getCategory, editCategory, deleteCategory }