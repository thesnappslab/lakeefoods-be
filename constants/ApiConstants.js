const statusCodes= {
    internalServerError: 500, 
    badRequest: 400, 
    notFound: 404,
    success: 200,
    created: 201,
    forbidden: 403, 
    unauthorised: 401,
    noToken: 412,
    recordExists: 460,
}
const statusMessages= {
    segmentCreateSuccess: "Segment Created Successfully.",
    segmentCreateFailedRecordExists: "Segment with this name already Exists.",
    segmentCreateFailedBadRequest: "Name and Description are mandatory fields to create the Segment.",
    internalServerError: "Internal Server Error.",
    segmentsGetSuccess: "Segments Fetched Successfully.",
    segmentGetSuccess: "Segment Details Fetched Successfully.",
    segmentUpdateSuccess: "Segment Details Updated Successfully.",
    segmentDeleteSuccess: "Segment Details Deleted Successfully",
}

module.exports= {statusCodes, statusMessages}