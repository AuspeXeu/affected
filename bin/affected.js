#!/usr/bin/env node

var fs = require('fs')
var parsePath = require('parse-filepath')
var affected = require('../lib/index.js')

var accessible = function (fName) {
  try {
    fs.accessSync(fName, fs.F_OK)
    return true
  } catch (e) {
    return false
  }
}

var dFile = process.cwd() + '/package.json'
if (process.argv.length === 3) {
  var pJson = require(parsePath(process.argv[2]).absolute)
  affected(pJson.dependencies)
} else if (accessible(dFile)) {
  var pJson = require(dFile)
  affected(pJson.dependencies)
} else
  console.log('Usage: affected [path/to/package.json]')
