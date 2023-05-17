var express = require('express');
var router = express.Router();
var br = require('../Models/bcrypt')
const bcrypt = require('bcrypt');

/* GET home page. */
// router.get('/', function(req, res, next) {
// res.render('index', { title: 'Express' });
// });


// register data
router.post('/adddata', async function (req, res, next) {
  try {
    var newpassword = await bcrypt.hash(req.body.password, 12)
    const newobj = ({
      name: req.body.name,
      password: newpassword
    })
    // console.log(newpassword);
    data = await br.create(newobj)
    res.status(201).json({
      status: 'success',
      data
    })
    console.log(data);
  }

  catch (error) {
    console.log(error);
  }
})

// login data

router.post('/logindata', async function (req, res, next) {
  try {
    var name = req.body.name
    var password = req.body.password
    var find = await br.find({ name: name })
    var [find] = find
    var newpassword = await bcrypt.compare(req.body.password, find.password)
    console.log(newpassword, 'find');

    if (name == find || newpassword == true) {
      res.status(201).json({
        status: 'success login'
      })
      console.log('success');
    }
    else {
      res.status(401).json({
        status: 'error not login'
      })
      console.log('error');

    }

    // data = await br.create(newobj)
    // res.status(201).json({
    //   status:'success',
    //   data
    // })
    // console.log(data);
  }

  catch (error) {
    console.log(error);
  }
})

// get data
router.get('/getdata', async function (req, res, next) {
  try {

    data = await br.find()
    res.status(201).json({
      status: 'success',
      data
    })
  }
  catch (error) {
    console.log(error);
  }
})

module.exports = router;
