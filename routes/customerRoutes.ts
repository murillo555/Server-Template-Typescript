import { Router, RequestHandler } from 'express';
import config from "@config"
const { createPermissions, readPermissions, updatePermissions } = config.permissionType;
const { users } = config.routes;
import { emailValidation } from '@validators/customer.validators';
import { validationFields } from '@middlewares/validation-fields';
import { registerCustomerController, confirmCustomerController } from '@customerControllers';
import { permission } from '@middlewares/RoleValidation';
import { check } from "express-validator"
import jwtValidation from '@middlewares/webtokenValidation';
import { v4 } from "uuid"
import path from "path"
import multer from 'multer'

type PermissionOptions = 'createPermissions' | 'readPermissions' | 'updatePermissions' | 'deletePermissions'
const maxSize = 20 * 1024 * 1024
const storage = multer.diskStorage({
    destination: './assets',
    filename: (req, file, cb) => {
        cb(null, v4() + path.extname(file.originalname).toLocaleLowerCase())
    }
})
const uploadFile = multer({ storage, dest: './assets', limits: { fileSize: maxSize } })
const router = Router();

////////////////////////////////////Get////////////////////////////////////

////////////////////////////////////Post////////////////////////////////////
router.post('/register', [
    check('firstName', 'The name is required').isString().notEmpty(),
    check('lastName', 'The name is required').isString().notEmpty(),
    check('RFC', 'RFC is Required').isString().notEmpty(),
    check('password', 'The password is RequireD').isLength({ min: 6 }),
    check('email', 'The email is not Valid').isEmail(),
    check('email').custom(emailValidation),
    check('type').isIn(['broker', 'carrier', 'broker-carrier']),
    validationFields
] as RequestHandler[], registerCustomerController);
////////////////////////////////////Update////////////////////////////////////
router.put('/confirm/:uuid', [
    validationFields
] as RequestHandler[], confirmCustomerController);
////////////////////////////////////Delete////////////////////////////////////


export default router;