var exec = require('child_process').execSync

var str = exec(`scp -r ./docs/ root@${process.env.host}:/data/wwwroot/vue-floation-action-button`)

console.log(str.toString("utf8").trim());

console.log('上传成功')

var str = exec(`scp -r ./docs/homepage/homepage root@${process.env.host}:/data/wwwroot/vue-floating-action-button/`)

console.log(str.toString("utf8").trim());

console.log('上传成功')
