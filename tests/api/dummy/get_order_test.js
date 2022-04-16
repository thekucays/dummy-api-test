const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const endpoint = require('../../endpoint/dummy/dummyendpoint.js');
const responseCode = require('../../helper/responseMessageAndCode.json');
const schema = require('../../helper/dummy/dummy_schema.json');
const testData = require('../../helper/dummy/dummy_data.json');

const testScenario = {
    describeCases: '[Dummy] Order Test: POST',
    POS01_successCase: 'POS01 should success get order data',

    NEG01_invalidToken: 'NEG01 get error when get agent office with invalid token',
    NEG02_nullToken: 'NEG02 get error when get get agent office without token',
    NEG03_emptyToken: 'NEG03 get error with empty token',
};

describe(testScenario.describeCases, () => {
    it(`@POST @HAPPY @ORDER ${testScenario.POS01_successCase}`, async () => {
        const response = await endpoint.processOrder(process.env.TOKENDUMMY, testData.processOrderValid);
        expect(response.status).to.equal(responseCode.successOk, JSON.stringify(response.body));
        expect(response.body).jsonSchema(schema.processOrderSchema);
    });

    it(`@GET @NEG @ORDER  ${testScenario.NEG01_invalidToken}`, async () => {
        const response = await endpoint.processOrder(process.env.TOKEN_DUMMY + "abc", null);
        expect(response.statusCode).to.equal(responseCode.failedUnauthorized.codeNumber, JSON.stringify(response.body));
    });

    it(`@GET @NEG @ORDER ${testScenario.NEG02_nullToken}`, async () => {
        const response = await endpoint.processOrder(null, null);
        expect(response.status).to.equal(responseCode.failedUnauthorized.codeNumber, JSON.stringify(response.body));
    });

    it(`@GET @NEG @ORDER ${testScenario.NEG03_emptyToken}`, async () => {
        const response = await endpoint.processOrder(process.env.TOKEN_PINVEST, testData.invalidKeyParams);
        expect(response.status).to.equal(responseCode.failedBadRequest.codeNumber, JSON.stringify(response.body));
    });
});