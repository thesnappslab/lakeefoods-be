const { model, Schema } = require('mongoose');
const Segment = require('./Segment');

const Category = new Schema({
        category_name: {
            type: String,
            required: true,    
        },
        category_description: {
            type: String,
            required: true,    
        },
        segments: [{
            type: Schema.Types.ObjectId,
            ref: Segment,
            required: true,
        }],
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

module.exports= model('categories', Category);