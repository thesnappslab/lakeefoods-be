const segmentSerializer = (data) => {
    return {
        segment_name: data.name,
        segment_description: data.description,
        created_by: data.createdBy, 
        modified_by: data.modifiedBy 
    }
}

module.exports = segmentSerializer;