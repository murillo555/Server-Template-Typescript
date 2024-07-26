import { describe, expect, test } from '@jest/globals';
import { getTestRegisterCustomer } from '@mockData/customer';
test('Users are returned as json', async () => {
    const { body: response } = await appTest
        .post('/customer/register')
        .send(getTestRegisterCustomer())
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set({ 'xtoken': `${process.env.TOKEN}`, Accept: 'application/json' })
        .expect(200)
        .expect('Content-Type', /application\/json/)
    expect(response.status).toBeTruthy
    expect(response.msg).toEqual("Entity has been added successfully")

    console.log("Body: ", response)
})
