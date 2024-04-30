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
    categoryCreateSuccess: "Category Created Successfully.",
    categoryCreateFailedRecordExists: "Category with this name already Exists.",
    categoryCreateFailedBadRequest: "Name and Description are mandatory fields to create the Category.",
    categoriesGetSuccess: "Categories Fetched Successfully.",
    categoryGetSuccess: "Category Details Fetched Successfully.",
    categoryUpdateSuccess: "Category Details Updated Successfully.",
    categoryDeleteSuccess: "Category Details Deleted Successfully",
}

module.exports= {statusCodes, statusMessages}