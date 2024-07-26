import { User, Role, Customer } from '@models'

export const removeTestDocuments = async () => {
    await Role.deleteMany({})
    await User.deleteMany({})
    await Customer.deleteMany({})
}