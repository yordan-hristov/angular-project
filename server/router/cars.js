const router = require('express').Router();

router.get('/', (req,res) => {
    res.send('cars');
    res.end();
})

module.exports = router;