let fs = require('fs')
let zlib = require('zlib')

fs.createReadStream('test.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('output.txt.gz'))

/*fs.createReadStream('output.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('output.txt'))*/