import {Company} from "../models/company.model.js";

export const registerCompany = async (req, res) =>{
    try{
        const {companyName} = req.body;
        if(!companyName){
            return res.status(400).json({
                message:"Company name is required",
                success:false
            });
        }
        
        // Check for existing company by name and userId
        let company = await Company.findOne({name: companyName});
        // let company = await Company.findOne({name: companyName, userId: req.id});
        if(company){
            return res.status(400).json({
                message:"Company already exist",
                success:false
            });
        }
        company = await Company.create({
            name:companyName,
            userId:req.id
        })

        return res.status(201).json({
            message:"Company registered Successfully",
            company,
            success:true
        })
    }catch(error){
        console.log(error);
        // Return error response
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }
}

export const getCompany = async (req, res) =>{
    try{
        const userId = req.id; // Only for logged In User
        const companies = await Company.find({userId});

        if(!companies){
            return res.status(404).json({
                message:"Companies not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"All successful",
            companies
        })
    }catch(error){
        console.log(error);
    }
}

//getCompany by Id;

export const getCompanyById = async (req, res) =>{
    try{
        const companyId = req.params.id;
        const company = await Company.findById(companyId);

        if(!company){
            return res.status(404).json({
                message:"Company not found",
                success:false
            })
        }

        return res.status(201).json({
            company,
            success:true
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            message:"Internal server error",
            error:error.message
        })
    }
}

export const updateCompany = async (req, res) =>{
    try{    
        const {name, description, website, location} = req.body;
        const file = req.file;
        //cloudirnary code

        const updateData  = {name, description, website, location};

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, {new:true});

        if(!company){
            return res.status(404).json({
                message:"Company not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"Company updated Successfully",
            company,
            success:true
        })


    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }
}