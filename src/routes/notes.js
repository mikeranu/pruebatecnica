const express = require('express');
const router = express.Router(); 

router.get('/notes/nueva', (req, res)=>{
    res.render('notes/new-note');
})

router.post('/notes/new-note', (req, res) =>{
    //console.log(req.body);
    const {title, description} = req.body; //obtengo desde el req.body  el titulo y la descripcion
    res.send('ok');
});

router.get('/notes', (req, res) =>{
    res.send('Notes from database');
});

module.exports = router;