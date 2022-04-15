const router = require('express').Router()
const axios = require('axios')
//  github api url = https://api.github.com/users/${username}
router.get('/user/:username', async(req,res)=>{
    const username = req.params.username
try{
    let{ data } = await axios.get(`https://api.github.com/users/${username}`)
    // console.log(data)
    res.json(data)
}
   catch(error){
       res.json("ERROR")
       console.log('ERROR')
   }
})
module.exports = router