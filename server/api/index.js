const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
<<<<<<< HEAD
// router.use('/api')
=======
// router.use('/products', require('./api'))

router.use('/products', require('./products'))
>>>>>>> af904126298d8d3dab20eebf9f161d4a320a37ef

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

