const { statusCodes, statusMessages } = require("../constants/ApiConstants");
const Segment = require("../models/Segment");
const responseSerializer = require("../serializers/ResponseSerializer");
const segmentSerializer = require("../serializers/SegmentSerializer");

const createSegment = async (req , res) => {
    try{
        const segmentRequest= req.body;
        if(segmentRequest.name && segmentRequest.description){
            const existingSegment = Segment.findOne({segment_name: segmentRequest.name});
            if(!existingSegment){
                const segment= new Segment(segmentSerializer({...segmentRequest, createdBy: 'system', modifiedBy: 'system'}))
                const addedSegment= await segment.save();
                res.status(statusCodes.created).send(responseSerializer(statusCodes.created, true, addedSegment, statusMessages.segmentCreateSuccess))
            }else{
                res.status(statusCodes.recordExists).send(responseSerializer(statusCodes.recordExists, false, false, statusMessages.segmentCreateFailedRecordExists))
            }
        }else{
            res.status(statusCodes.badRequest).send(responseSerializer(statusCodes.badRequest, false, null, statusMessages.segmentCreateFailedBadRequest))
        }
    }catch(err){
        res.status(statusCodes.internalServerError).send(responseSerializer(statusCodes.internalServerError, false, null, statusMessages.internalServerError))
    }
}

const getSegments = async (req, res) => {
    try{
        const segments = await Segment.find();
        res.status(statusCodes.success).send(responseSerializer(statusCodes.success, true, segments, statusMessages.segmentsGetSuccess))
    }catch(err){
        res.status(statusCodes.internalServerError).send(responseSerializer(statusCodes.internalServerError, false, null, statusMessages.internalServerError))
    }
}

const getSegment = async (req, res) => {
    try{
        const segment = await Segment.findById(req);
        res.status(statusCodes.success).send(responseSerializer(statusCodes.success, true, segment, statusMessages.segmentGetSuccess))
    }catch(err){
        res.status(statusCodes.internalServerError).send(responseSerializer(statusCodes.internalServerError, false, null, statusMessages.internalServerError))
    }
}

module.exports = { createSegment, getSegments, getSegment}