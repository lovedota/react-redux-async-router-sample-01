import jsxChai from 'jsx-chai';
import 'jquery';

chai.use(jsxChai);

var testsContext = require.context('.', true, /__test$/);
testsContext.keys().forEach(testsContext);
