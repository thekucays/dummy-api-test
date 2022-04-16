# api-automation

Run configurations are stored on packages.json file (on "scripts" block)

## To run all tests:
`npm run test-api`

## Specifying test to be run by test name example: 
On Linux / Mac: 
`npm run test-api -- --grep @ARTEMIS`

On Windows: 
`npm run test-api-windows -- --grep="@ARTEMIS"`