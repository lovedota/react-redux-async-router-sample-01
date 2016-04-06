import jsxChai from 'jsx-chai';
chai.use(jsxChai);

var testsContext = require.context('.', true, /__test$/);
testsContext.keys().forEach(testsContext);