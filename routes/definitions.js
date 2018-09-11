var router = require("express").Router();
var Definition = require("../models/definition");

//get all definitions of a user
router.get('/', (req, res)=>{
    Definition.find({owner: req.user}).then((definitions) => {
        res.json(definitions);
    })
});

//create new definition
router.post('/', (req, res)=> {
   var def = new Definition({
       owner: req.user,
       logType: req.body.definition.type,
       description: req.body.definition.description
   });

   def.save().then((definition) => {
    res.json({
        message: 'Saved!',
        definition: definition
    });
   }, (err)=>{
       res.status(500).send("Couldn't save the data");
   });
});

//update a definition
router.put('/:id', (req, res) => {
    Definition.findOne({_id:req.params.id, owner: req.user}).then((definitions) => {
        definitions.logType = req.body.definition.type;
        definitions.description = req.body.definition.description;
        definitions.save().then((definition) => {
            res.json({
                message: 'Updated!',
                definition: definition
            });
        }, (err)=> {
            res.json({
                message: 'Failed to update!',
                definition: definition
            });
        });

    }, (err)=> {
        res.json({
            message: 'No such definition',
            definition: definition
        });
    });
});

//delete 
//update a definition
router.delete('/:id', (req, res) => {
    Definition.findOne({_id:req.params.id, owner: req.user}).then((definitions) => {
        
        definitions.remove().then((definition) => {
            res.json({
                message: 'Removed!',
                definition: definition
            });
        }, (err)=> {
            res.json({
                message: 'Failed to remove!',
                definition: definition
            });
        });

    }, (err)=> {
        res.json({
            message: 'No such definition',
            definition: definition
        });
    });
});


module.exports = router;