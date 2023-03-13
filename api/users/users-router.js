const router = require('express').Router();

//owner'ın yapacağı işlemler
router.get('/', (req,res,next)=> {
    res.status(200).json({message: 'users list working'})
})

router.delete('/', (req,res,next)=> {
    res.status(200).json({message: 'users delete working'})
})


//user işlemleri
router.put('/:id', (req,res,next)=> {
    res.status(200).json({message: `${req.params.id} id'li user update working`})
})


module.exports = router;