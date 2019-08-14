var exec = require('child_process').execSync

let str = exec(`scp -r ./docs/ root@${process.env.host}:/data/wwwroot/vue-floation-action-button`)

console.log(str.toString("utf8").trim());

console.log('上传成功')

// 59.110.172.224