#!/usr/bin/env node
process.argv.push(...["--cwd",process.cwd(),"--gupfile",require.resolve("..")])
require("gulp/bin/gulp");