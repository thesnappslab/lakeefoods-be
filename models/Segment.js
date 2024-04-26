const { model, Schema } = require('mongoose');

const segment = new Schema({
        segment_name: {
            type: String,
            required: true,    
        },
        segment_description: {
            type: String,
            required: true,    
        },
        created_by: {
            type: String,
            required: true,    
        },
        modified_by: {
            type: String,
            required: true,    
        },
    },
    {timestamps: true}
);

module.exports= model('segments', segment);