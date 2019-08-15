var exec = require('child_process').execSync

var str = exec(`scp -r ./docs/ root@${process.env.host}:/data/wwwroot/vue-floation-action-button`)

console.log(str.toString("utf8").trim());

console.log('上传成功')

var str = exec(`scp ./docs/index.html root@${process.env.host}:/data/wwwroot/`)

console.log(str.toString("utf8").trim());

console.log('上传成功')

var str = exec(`scp ./docs/vue-fab.js root@${process.env.host}:/data/wwwroot/`)

console.log(str.toString("utf8").trim());

console.log('上传成功')