const network_security_guardian = require('network-security-guardian');
const video_streaming_engine = require('video-streaming-engine');
const async = require('async');
const mysql = require('mysql');
const passport = require('passport');
const mongoose = require('mongoose');
const moment = require('moment');
const redux = require('redux');
const dotenv = require('dotenv');
const eth_crypto = require('eth-crypto');
const babel_core = require('babel-core');
const sequelize = require('sequelize');
const truffle = require('truffle');
const cors = require('cors');

const assert = require('assert');
assert.strictEqual(1 + 1, 2, '1 + 1 should equal 2');

console.log(`Current directory: ${__dirname}`);

const net = require('net');
const client = net.connect({ port: 8124 }, () => {
  console.log('Connected to server!');
  client.write('Hello, server! Love, Client.');
});

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
const delay = async () => {
  console.log('Start delay');
  await setTimeoutPromise(1000);
  console.log('End delay');
};
delay();

// Estimate gas cost for a transaction
web3.eth.estimateGas({
  from: senderAddress,
  to: receiverAddress,
  value: amountToSend
}).then(gasEstimate => {
  console.log('Gas estimate:', gasEstimate);
}).catch(err => {
  console.error('Error estimating gas:', err);
});

// Get information about an Ethereum uncle by block hash and index
web3.eth.getBlockUncleCount('0xblockHash').then(uncles => {
  if (uncles > uncleIndex) {
    console.log('Uncle details by block hash:', uncles);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details by block hash:', err);
});

const querystring = require('querystring');
const qs = querystring.parse('name=Node.js&company=NodeSource');
console.log(qs);