import auth from "./authRoutes"
import role from "./roleRoutes"
import user from "./userRoutes"
import attachment from './attachmentRoutes'
import customer from './customerRoutes'
import utils from './utilsRoutes'

export const authRoutes = auth
export const userRoutes = user;
export const roleRoutes = role;
export const attachmentRoutes = attachment
export const customerRoutes = customer
export const utilsRoutes = utils