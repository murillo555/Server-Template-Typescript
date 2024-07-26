import { RegisterCustomerBody } from "@interfaces/requests/customer";

export const getTestRegisterCustomer = () => {
    let testCustomer = {
        RFC: "VAIE920518AH9",
        firstName: "Test Name",
        lastName: "Test LastName",
        email: "test@testdomain.com",
        password: "password123456",
        type: "broker-carrier",
        phone: "1234567890"
    } as RegisterCustomerBody

    return testCustomer
}
