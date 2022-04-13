const createError = require('http-errors');
const { ObjectId } = require('mongodb');
const {Events} = require('./models/events.js')

exports.index = async function (req,res) {
    Events.find()
     .then( (events) => res.send(events))
}

exports.show = function(req,res,next){
    Events.findOne({ _id: ObjectId(req.params.id)})
    .then((eventitem) => {
        if(!eventitem){
            return (next(createError("No event with that Id")))
        }
        res.send(eventitem);
    })


}

exports.findbyname = function(req,res,next){
    Events.find({name: req.params.name})
    .then((eventitem) => {
        if(!eventitem){
            return (next(createError("No event with that name")))
        }
        res.send(eventitem);
    })
}

exports.findbytype = function(req,res,next){
    Events.find({type: req.params.type})
    .then((eventitem) => {
        if(!eventitem){
            return (next(createError("No event with that name")))
        }
        res.send(eventitem);
    })
}

exports.findbydate = function(req,res,next){
    Events.find({date: new Date(req.params.date)})
    .then((eventitem) => {
        if(!eventitem){
            return (next(createError("No event on that date")))
        }
        res.send(eventitem);
    })
}

exports.delete = function(req,res,next){

    
        Events.deleteOne({_id: ObjectId(req.params.id)})
        .then( (result) => {
            if(result.deletedCount){
                res.send({result:true});
            }
            else {
                return(next(createError(404,"no event with that id")))
            }
            

           
            })	

    


}

exports.update = function(req,res,next){
    if(!req.body.name){
        return (next(createError(400,"name is required")));
    }

    Events.findOne({_id: ObjectId(req.params.id)})
    .then( (event) => {
        if(!event){
            return (next(createError(404,"no such id")))
        }
        event.name = req.body.name;
        event.type = req.body.type;
        event.description = req.body.description;
        event.location = req.body.location;
        event.date = req.body.date

        event.save()
            .then( () => res.send({result: true}))
    })

}


exports.create = function (req,res,next){

    if(!req.body.name){
        return (next(createError(400,"name is required")));
    }

    const event = new Events({
        name: req.body.name,
        type:req.body.type,
        description: req.body.description,
        location: req.body.location,
        date: req.body.date
    })

    event.save()
        .then( () => res.send({result:true}))
    
	;
}