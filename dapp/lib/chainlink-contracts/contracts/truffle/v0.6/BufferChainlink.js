'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const BufferChainlink = contract({
 "contractName": "BufferChainlink",
 "abi": [],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212209e540569cf75c8c639e3b7de87f57516626add4e8c1217308b4d0e960d644fca64736f6c63430006060033",
   "opcodes": "PUSH1 0x56 PUSH1 0x23 PUSH1 0xB DUP3 DUP3 DUP3 CODECOPY DUP1 MLOAD PUSH1 0x0 BYTE PUSH1 0x73 EQ PUSH1 0x16 JUMPI INVALID JUMPDEST ADDRESS PUSH1 0x0 MSTORE PUSH1 0x73 DUP2 MSTORE8 DUP3 DUP2 RETURN INVALID PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 SWAP15 SLOAD SDIV PUSH10 0xCF75C8C639E3B7DE87F5 PUSH22 0x16626ADD4E8C1217308B4D0E960D644FCA64736F6C63 NUMBER STOP MOD MOD STOP CALLER ",
   "sourceMap": "402:9265:59:-:0;;132:2:-1;166:7;155:9;146:7;137:37;255:7;249:14;246:1;241:23;235:4;232:33;222:2;;269:9;222:2;293:9;290:1;283:20;323:4;314:7;306:22;347:7;338;331:24"
  },
  "deployedBytecode": {
   "immutableReferences": {},
   "linkReferences": {},
   "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212209e540569cf75c8c639e3b7de87f57516626add4e8c1217308b4d0e960d644fca64736f6c63430006060033",
   "opcodes": "PUSH20 0x0 ADDRESS EQ PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 DUP1 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 SWAP15 SLOAD SDIV PUSH10 0xCF75C8C639E3B7DE87F5 PUSH22 0x16626ADD4E8C1217308B4D0E960D644FCA64736F6C63 NUMBER STOP MOD MOD STOP CALLER ",
   "sourceMap": "402:9265:59:-:0;;;;;;12:1:-1;9;2:12"
  },
  "methodIdentifiers": {}
 },
 "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"A library for working with mutable byte buffers in Solidity. * Byte buffers are mutable and expandable, and provide a variety of primitives for writing to them. At any time you can fetch a bytes object containing the current contents of the buffer. The bytes object should not be stored between operations, as it may change due to resizing of the buffer.\",\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/vendor/BufferChainlink.sol\":\"BufferChainlink\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/patrick/code/chainlink/evm-contracts/src/v0.6/vendor/BufferChainlink.sol\":{\"keccak256\":\"0xe4aa364f56414c4326ffe12c1121d591be6ad168afb42b24a823f6d76299dd63\",\"urls\":[\"bzz-raw://e3e91a0eddb6fc6c53acdfbd59771deff1678330128d3c98014c668763efb45e\",\"dweb:/ipfs/Qmbt5VNT2W2oCN44536JGNuHqAJdmYGqzEFcHvy8W1tAsY\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('BufferChainlink.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.BufferChainlink = BufferChainlink
