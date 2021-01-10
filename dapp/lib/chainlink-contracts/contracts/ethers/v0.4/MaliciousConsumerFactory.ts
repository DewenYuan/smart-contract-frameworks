/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { MaliciousConsumer } from "./MaliciousConsumer";

export class MaliciousConsumerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _link: string,
    _oracle: string,
    overrides?: TransactionOverrides
  ): Promise<MaliciousConsumer> {
    return super.deploy(_link, _oracle, overrides) as Promise<
      MaliciousConsumer
    >;
  }
  getDeployTransaction(
    _link: string,
    _oracle: string,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_link, _oracle, overrides);
  }
  attach(address: string): MaliciousConsumer {
    return super.attach(address) as MaliciousConsumer;
  }
  connect(signer: Signer): MaliciousConsumerFactory {
    return super.connect(signer) as MaliciousConsumerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MaliciousConsumer {
    return new Contract(address, _abi, signerOrProvider) as MaliciousConsumer;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "doesNothing",
    outputs: [],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "stealEthCall",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "remove",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "stealEthSend",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "cancelRequestOnFulfill",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "stealEthTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "bytes32"
      },
      {
        name: "_callbackFunc",
        type: "bytes"
      }
    ],
    name: "requestData",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "bytes32"
      },
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "assertFail",
    outputs: [],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        name: "_link",
        type: "address"
      },
      {
        name: "_oracle",
        type: "address"
      }
    ],
    payable: true,
    stateMutability: "payable",
    type: "constructor"
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkRequested",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkFulfilled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkCancelled",
    type: "event"
  }
];

const _bytecode =
  "0x60806040818152600160045580610fd483398101604052805160209091015161003082640100000000610049810204565b6100428164010000000061005e810204565b50506100b4565b61005b81640100000000610070810204565b50565b61005b81640100000000610092810204565b60028054600160a060020a031916600160a060020a0392909216919091179055565b60038054600160a060020a031916600160a060020a0392909216919091179055565b610f11806100c36000396000f30060806040526004361061008d5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631eb0f610811461008f578063a09d636a146100aa578063a7f43779146100c5578063acdf0ba2146100da578063b40584e8146100f5578063c728f72014610110578063c737ecab1461012b578063e7eb2b1714610189575b005b34801561009b57600080fd5b5061008d6004356024356101a4565b3480156100b657600080fd5b5061008d6004356024356101a8565b3480156100d157600080fd5b5061008d610344565b3480156100e657600080fd5b5061008d600435602435610348565b34801561010157600080fd5b5061008d6004356024356104e2565b34801561011c57600080fd5b5061008d60043560243561051e565b34801561013757600080fd5b5060408051602060046024803582810135601f810185900485028601850190965285855261008d9583359536956044949193909101919081908401838280828437509497506106629650505050505050565b34801561019557600080fd5b5061008d600435602435610718565b5050565b600082815260056020526040902054829073ffffffffffffffffffffffffffffffffffffffff16331461026257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f536f75726365206d75737420626520746865206f7261636c65206f662074686560448201527f2072657175657374000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555182917f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a91a26040513090606490600081818185875af192505050151561033f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f43616c6c206661696c6564000000000000000000000000000000000000000000604482015290519081900360640190fd5b505050565b6000ff5b600082815260056020526040902054829073ffffffffffffffffffffffffffffffffffffffff16331461040257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f536f75726365206d75737420626520746865206f7261636c65206f662074686560448201527f2072657175657374000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555182917f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a91a2604051309060009060649082818181858883f19350505050151561033f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f53656e64206661696c6564000000000000000000000000000000000000000000604482015290519081900360640190fd5b6101a482670de0b6b3a764000060010263b40584e87c01000000000000000000000000000000000000000000000000000000000260065461071a565b600082815260056020526040902054829073ffffffffffffffffffffffffffffffffffffffff1633146105d857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f536f75726365206d75737420626520746865206f7261636c65206f662074686560448201527f2072657175657374000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555182917f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a91a2604051309060009060649082818181858883f1935050505015801561065c573d6000803e3d6000fd5b50505050565b61066a610e98565b6106ef8330846040518082805190602001908083835b602083106106bd57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610680565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020610855565b90506107034261012c63ffffffff61087016565b60065561065c81670de0b6b3a7640000610883565bfe5b60008481526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000008116909155905173ffffffffffffffffffffffffffffffffffffffff9091169186917fe1fe3afa0f7f761ff0a8b89086790efd5140d2907ebd5b7ff6bfcb5e075fd4c59190a2604080517f6ee4d55300000000000000000000000000000000000000000000000000000000815260048101879052602481018690527fffffffff000000000000000000000000000000000000000000000000000000008516604482015260648101849052905173ffffffffffffffffffffffffffffffffffffffff831691636ee4d55391608480830192600092919082900301818387803b15801561083657600080fd5b505af115801561084a573d6000803e3d6000fd5b505050505050505050565b61085d610e98565b610868848484610896565b949350505050565b8181018281101561087d57fe5b92915050565b600061088f83836108c1565b9392505050565b61089e610e98565b6108a6610e98565b6108b88186868663ffffffff6108e816565b95945050505050565b60035460009061088f9073ffffffffffffffffffffffffffffffffffffffff16848461094a565b6108f0610e98565b6109008560800151610100610cac565b505091835273ffffffffffffffffffffffffffffffffffffffff1660208301527fffffffff0000000000000000000000000000000000000000000000000000000016604082015290565b600030600454604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401828152602001925050506040516020818303038152906040526040518082805190602001908083835b602083106109fe57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016109c1565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199092169116179052604080519290940182900390912060045460608a01526000818152600590925283822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8c1617905592519295508594507fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af99350919050a260025473ffffffffffffffffffffffffffffffffffffffff16634000aea08584610aef87610ce6565b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610b8f578181015183820152602001610b77565b50505050905090810190601f168015610bbc5780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b158015610bdd57600080fd5b505af1158015610bf1573d6000803e3d6000fd5b505050506040513d6020811015610c0757600080fd5b50511515610c9c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160448201527f636c650000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b6004805460010190559392505050565b610cb4610ecd565b6020820615610cc95760208206602003820191505b506020828101829052604080518085526000815290920101905290565b8051602080830151604080850151606086810151608088015151935160006024820181815260448301829052606483018a905273ffffffffffffffffffffffffffffffffffffffff881660848401527fffffffff00000000000000000000000000000000000000000000000000000000861660a484015260c48301849052600160e48401819052610100610104850190815288516101248601528851969b7f40429946000000000000000000000000000000000000000000000000000000009b949a8b9a91999098909796939591949361014401918501908083838e5b83811015610ddb578181015183820152602001610dc3565b50505050905090810190601f168015610e085780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909d169c909c17909b5250989950505050505050505050919050565b6040805160c081018252600080825260208201819052918101829052606081019190915260808101610ec8610ecd565b905290565b604080518082019091526060815260006020820152905600a165627a7a723058209562a3ec8d5af800ab9b4a91aed6aa350fee9f6534074dc4efc9e878c95748cc0029";