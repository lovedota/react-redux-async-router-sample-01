
let action = {
        init() {
            return $.getJSON('mock-api.json')
                    .done(json => {
                        console.log(json);
                    })
                    .fail((error) => {
                        console.error(error.responseJSON);
                    });
        }
    },
    fixture = require('@fixtures/sample-mock.json'),
    server,
    spy;

describe('MockApiRquest', function() {
    before(() => { 
        server = sinon.fakeServer.create(); 
        spy = sinon.stub(console);
    });
    
    after(() => { 
        server.restore(); 
        spy.log.restore();
        spy.error.restore();
    });

   it('should mock success calling api', () => {
            server.respondWith('GET', 'mock-api.json', JSON.stringify(fixture));
            action.init();
            server.respond();
            expect(spy.log).to.have.been.calledWith(fixture);
        });
        
         it('should mock fail calling api', () => {
            let error = {
                    code: 400,
                    message: 'Invalid Data'
                };
            
            server.respondWith('GET', 'mock-api.json', [400, { 'Content-Type': 'application/json' }, JSON.stringify(error)]);
            action.init();
            server.respond();
            expect(spy.error).to.have.been.calledWith(error);
        });
});