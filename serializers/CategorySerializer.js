const categorySerializer = (data) => {
    return {
        category_name: data.name,
        category_description: data.description,
        segments: data.segments,
        created_by: data.createdBy, 
        modified_by: data.modifiedBy 
    }
}

module.exports = categorySerializer
