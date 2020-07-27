const express = require('express')
const router = express.Router()

const user = require('../models/user')

router.get('/:useremail', async (req,res)=>{
    let { useremail } = req.params
    let { _id, email, password, username } = await user.findOne({ email: useremail })
        .catch( err => {
            console.log(err, 'adkasndkj')
        })
    if( _id != null && email !=  null && password != null && username != null) return res.status(200).json({id: _id, email, password, username})
})

module.exports = router