const bodyparser = require('body-parser')
const { error, success } = require('consola')
const cors = require('cors')
const express= require('express');
const mongoose= require('mongoose')

const { ApplicationConfigurations, DatabaseConfigurations, CorsConfigurations } = require('./constants/AppConstants')

const app= express()
app.use(bodyparser.json())
app.use(cors(CorsConfigurations));

async function startApp(){
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(`mongodb+srv://${DatabaseConfigurations.username}:${DatabaseConfigurations.password}@${DatabaseConfigurations.cluster}/${DatabaseConfigurations.db}?retryWrites=true&w=majority`);
        success({message: `Connection to Database is established.`, badge: true});
        app.listen(ApplicationConfigurations.port, () => {
            success({message: `Server started on port ${ApplicationConfigurations.port}`, badge: true});
        })
    }catch(err){
        error({message: `Error occured while starting the application.`+err, badge: true}); 
    }
}

startApp();

app.use('/admin/segments', require('./controllers/admin/SegmentsController'));
//app.use('/admin/categories', require('./controllers/admin/CategoriesController'));
//app.use('/admin/orders', require('./controllers/admin/OrdersController'));
//app.use('/admin/items', require('./controllers/admin/ItemsController'));
//app.use('/admin/insights', require('./controllers/admin/InsightsController'));
