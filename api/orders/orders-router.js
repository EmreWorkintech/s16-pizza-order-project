const router = require('express').Router();

router.get('/', (req,res,next)=> {
    res.status(200).json({message: 'list of my orders working'})
})

router.get('/:id', (req,res,next)=> {
    res.status(200).json({message: `${req.params.id} order geliyor`})
})

router.post('/', (req,res,next)=> {
    res.status(200).json({message: 'new order post working'})
})

router.put('/:id', (req,res,next)=> {
    res.status(200).json({message: `${req.params.id} order update working`})
})

router.delete('/', (req,res,next)=> {
    res.status(200).json({message: 'order delete working'})
})


module.exports = router;