const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL_DUMMYSERVER);
const processOrder = (token, body) => api.post(`/processOrder`)
    .set('Authorization', 'Bearer' + token)
    .send(body);

module.exports = {
    processOrder,
};