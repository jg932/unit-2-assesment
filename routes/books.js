import { Router } from 'express'
import * as bookCtrl from '../controllers/books.js'

const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

router.get('/', bookCtrl.index)

export {
  router
}
