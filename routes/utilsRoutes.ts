import { RequestHandler, Router } from 'express';
import config from "@config"
import { validationFields } from "@middlewares/validation-fields";
import jwtValidation from '@middlewares/webtokenValidation';
import { getTimeLineListController } from 'controllers/utils';

type PermissionOptions = 'createPermissions' | 'readPermissions' | 'updatePermissions' | 'deletePermissions'
const router = Router();

////////////////////////////////////Get////////////////////////////////////

router.get('/timeline', [
    jwtValidation,
    validationFields
] as RequestHandler[], getTimeLineListController);
export default router;