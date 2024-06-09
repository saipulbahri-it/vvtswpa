// src/template/worker.js
var worker_default = {
  async fetch(request, env, ctx) {
    return new Response("Hello World!");
  },
};

var uptimeGet = async function () {
  const myResponse = await fetch("http://saipulbahri.com");
  return { status: myResponse.status };
};

// const uptime = await uptimeGet();

var exec = require('node:child_process').exec;

exec("ping -c 3 localhost", function (err, stdout, stderr) {
    console.log(stdout);
});

export { worker_default as default };
