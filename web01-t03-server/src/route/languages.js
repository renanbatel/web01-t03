const router     = require( "express" ).Router();
const controller = require( "../controller/commons" );

router.get( "/", controller.list );
router.post( "/", controller.create );
router.get( "/:id", controller.read );
router.put( "/:id", controller.update );
router.delete( "/:id", controller.remove );

module.exports = router;