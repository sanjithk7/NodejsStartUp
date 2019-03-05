const assert = require('assert').strict;
var http = require('http');
const hostname = '127.0.0.1';
const port = 3001;
// Generate an AssertionError to compare the error message later:
// const { message } = new assert.AssertionError({
//   actual: 1,
//   expected: 2,
//   operator: 'strictEqual'
// });

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    // res.end(message);
    try {
        assert.deepStrictEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5], res.end('Deep equal testing'));
    } catch (err) {
        // res.end(err.message);
        console.log(err.actual);
        console.log(err.expected);
    }
    // try {
    //     assert.strictEqual(1, 2);
    //   } catch (err) {
    //     assert(err instanceof assert.AssertionError);
    //     assert.strictEqual(err.message, message);
    //     console.log(err.name);
    //     console.log(err.actual);
    //     assert.strictEqual(err.name, 'AssertionError [ERR_ASSERTION]');
    //     assert.strictEqual(err.actual, 1);
    //     assert.strictEqual(err.expected, 2);
    //     assert.strictEqual(err.code, 'ERR_ASSERTION');
    //     assert.strictEqual(err.operator, 'strictEqual');
    //     assert.strictEqual(err.generatedMessage, true);
    //   }
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });