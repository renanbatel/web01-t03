const router     = require( "express" ).Router();
const controller = require( "../controller/users" );

router.post( "/", controller.create );
router.get( "/:username/", controller.read );
router.put( "/:username/", controller.update );

module.exports = router;  