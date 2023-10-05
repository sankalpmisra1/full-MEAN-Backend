var express = require('express');
var router = express.Router();
const providersController = require('../controllers/providers');
/* GET list page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
router.get('/', providersController.list);
/* GET Details page. */
router.get('/details/:id', providersController.details);
/* GET Edit page. */
router.get('/edit/:id', providersController.edit);
/* POST Update page. */
router.post('/update/:id', providersController.update);
/* GET add page. */
router.get('/add-provider', providersController.addform);
/* POST add page. */
router.post('/add', providersController.add);
/* GET delete page. */
router.get('/delete/:id', providersController.delete);
module.exports = router;
