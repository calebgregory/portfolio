'use strict';

var express = require('express')
  , router  = express.Router();

import * as ctrl from './controller';

router.get('/contact', ctrl.contact);

export default router;
