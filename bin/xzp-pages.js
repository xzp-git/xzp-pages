#!/usr/bin/env node
process.argv.push(...["--cwd",process.cwd(),"--gulpfile",require.resolve("..")])
require("gulp/bin/gulp");
// console.log("xzp=======");