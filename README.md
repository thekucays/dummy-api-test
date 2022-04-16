# About
- API testing created using javascript base (mocha chai)
- test config stored in `.env` file (if running in pipelne, make sure all variables are imported on first place)
- has built in report from mochawesome ibrary located at /reports

## To run all tests:
- for very first run, make sure npm is installed
- after that execute this command `npm install`, then
- `npm run test-api`
- please keep note that test scenario result will be failed since its using dummy url, but the reports are generated properly

## Specifying test to be run by test name example: 
On Linux / Mac: 
`npm run test-api -- --grep @ORDER`

On Windows: 
`npm run test-api-windows -- --grep="@ORDER"`