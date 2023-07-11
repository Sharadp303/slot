const {getAllslots, createSlot}=require('../controller/slotcontroller')

module.exports= function(app){
    app.get('/slots',getAllslots)
    app.post('/slots',createSlot)
}