const request = require('supertest')
const app = require('./server')

describe('Testando o blog', () => {
    test('Testando se a / esta recebendo status 200', async () => {
        const res = await request(server)
        .get('/')
        expect(res.statusCode).toEqual(200)         
        })
    })
