"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class AggregatorFacadeFactory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_aggregator, _decimals, _description, overrides) {
        return super.deploy(_aggregator, _decimals, _description, overrides);
    }
    getDeployTransaction(_aggregator, _decimals, _description, overrides) {
        return super.getDeployTransaction(_aggregator, _decimals, _description, overrides);
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.AggregatorFacadeFactory = AggregatorFacadeFactory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_aggregator",
                type: "address"
            },
            {
                internalType: "uint8",
                name: "_decimals",
                type: "uint8"
            },
            {
                internalType: "string",
                name: "_description",
                type: "string"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "int256",
                name: "current",
                type: "int256"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "roundId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "updatedAt",
                type: "uint256"
            }
        ],
        name: "AnswerUpdated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "roundId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "startedBy",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "startedAt",
                type: "uint256"
            }
        ],
        name: "NewRound",
        type: "event"
    },
    {
        inputs: [],
        name: "aggregator",
        outputs: [
            {
                internalType: "contract AggregatorInterface",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "description",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_roundId",
                type: "uint256"
            }
        ],
        name: "getAnswer",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint80",
                name: "_roundId",
                type: "uint80"
            }
        ],
        name: "getRoundData",
        outputs: [
            {
                internalType: "uint80",
                name: "roundId",
                type: "uint80"
            },
            {
                internalType: "int256",
                name: "answer",
                type: "int256"
            },
            {
                internalType: "uint256",
                name: "startedAt",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "updatedAt",
                type: "uint256"
            },
            {
                internalType: "uint80",
                name: "answeredInRound",
                type: "uint80"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_roundId",
                type: "uint256"
            }
        ],
        name: "getTimestamp",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "latestAnswer",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "latestRound",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "latestRoundData",
        outputs: [
            {
                internalType: "uint80",
                name: "roundId",
                type: "uint80"
            },
            {
                internalType: "int256",
                name: "answer",
                type: "int256"
            },
            {
                internalType: "uint256",
                name: "startedAt",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "updatedAt",
                type: "uint256"
            },
            {
                internalType: "uint80",
                name: "answeredInRound",
                type: "uint80"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "latestTimestamp",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "version",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
const _bytecode = "0x608060405234801561001057600080fd5b50604051610b24380380610b248339818101604052606081101561003357600080fd5b8151602083015160408085018051915193959294830192918464010000000082111561005e57600080fd5b90830190602082018581111561007357600080fd5b825164010000000081118282018810171561008d57600080fd5b82525081516020918201929091019080838360005b838110156100ba5781810151838201526020016100a2565b50505050905090810190601f1680156100e75780820380516001836020036101000a031916815260200191505b506040525050600080546001600160a01b0319166001600160a01b0386161760ff60a01b1916600160a01b60ff86160217905550805161012e906001906020840190610137565b505050506101d2565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061017857805160ff19168380011785556101a5565b828001600101855582156101a5579182015b828111156101a557825182559160200191906001019061018a565b506101b19291506101b5565b5090565b6101cf91905b808211156101b157600081556001016101bb565b90565b610943806101e16000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80637284e41611610081578063b5ab58dc1161005b578063b5ab58dc14610234578063b633620c14610251578063feaf968c1461026e576100c9565b80637284e416146101475780638205bf6a146101c45780639a6fc8f5146101cc576100c9565b806350d25bcd116100b257806350d25bcd1461011d57806354fd4d5014610137578063668a0f021461013f576100c9565b8063245a7bfc146100ce578063313ce567146100ff575b600080fd5b6100d6610276565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610107610292565b6040805160ff9092168252519081900360200190f35b6101256102b3565b60408051918252519081900360200190f35b61012561034d565b610125610352565b61014f6103bb565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610189578181015183820152602001610171565b50505050905090810190601f1680156101b65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610125610466565b6101f5600480360360208110156101e257600080fd5b503569ffffffffffffffffffff166104cf565b6040805169ffffffffffffffffffff96871681526020810195909552848101939093526060840191909152909216608082015290519081900360a00190f35b6101256004803603602081101561024a57600080fd5b50356104f2565b6101256004803603602081101561026757600080fd5b5035610597565b6101f561060a565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60005474010000000000000000000000000000000000000000900460ff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561031c57600080fd5b505afa158015610330573d6000803e3d6000fd5b505050506040513d602081101561034657600080fd5b5051905090565b600281565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663668a0f026040518163ffffffff1660e01b815260040160206040518083038186803b15801561031c57600080fd5b60018054604080516020600284861615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f8101849004840282018401909252818152929183018282801561045e5780601f106104335761010080835404028352916020019161045e565b820191906000526020600020905b81548152906001019060200180831161044157829003601f168201915b505050505081565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638205bf6a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561031c57600080fd5b60008060008060006104e0866106be565b939a9299509097509550909350915050565b60008054604080517fb5ab58dc00000000000000000000000000000000000000000000000000000000815260048101859052905173ffffffffffffffffffffffffffffffffffffffff9092169163b5ab58dc91602480820192602092909190829003018186803b15801561056557600080fd5b505afa158015610579573d6000803e3d6000fd5b505050506040513d602081101561058f57600080fd5b505192915050565b60008054604080517fb633620c00000000000000000000000000000000000000000000000000000000815260048101859052905173ffffffffffffffffffffffffffffffffffffffff9092169163b633620c91602480820192602092909190829003018186803b15801561056557600080fd5b60008060008060006106ad6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663668a0f026040518163ffffffff1660e01b815260040160206040518083038186803b15801561067c57600080fd5b505afa158015610690573d6000803e3d6000fd5b505050506040513d60208110156106a657600080fd5b50516106be565b945094509450945094509091929394565b60008054604080517fb5ab58dc00000000000000000000000000000000000000000000000000000000815269ffffffffffffffffffff851660048201529051839283928392839273ffffffffffffffffffffffffffffffffffffffff169163b5ab58dc916024808301926020929190829003018186803b15801561074157600080fd5b505afa158015610755573d6000803e3d6000fd5b505050506040513d602081101561076b57600080fd5b5051600054604080517fb633620c00000000000000000000000000000000000000000000000000000000815269ffffffffffffffffffff8a166004820152905192965073ffffffffffffffffffffffffffffffffffffffff9091169163b633620c91602480820192602092909190829003018186803b1580156107ed57600080fd5b505afa158015610801573d6000803e3d6000fd5b505050506040513d602081101561081757600080fd5b505160408051808201909152600f81527f4e6f20646174612070726573656e740000000000000000000000000000000000602082015267ffffffffffffffff9091169250826108fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156108c35781810151838201526020016108ab565b50505050905090810190601f1680156108f05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5094959294509250829185915056fea2646970667358221220a5811ad705981dd3f0febc162644a578e7b437569622ab1a6056e5aefb8e9e2064736f6c63430006060033";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdncmVnYXRvckZhY2FkZUZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBZ2dyZWdhdG9yRmFjYWRlRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQTBDO0FBQzFDLG9CQUFvQjs7QUFFcEIsbUNBQTJEO0FBUTNELE1BQWEsdUJBQXdCLFNBQVEsd0JBQWU7SUFDMUQsWUFBWSxNQUFlO1FBQ3pCLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNLENBQ0osV0FBbUIsRUFDbkIsU0FBdUIsRUFDdkIsWUFBb0IsRUFDcEIsU0FBZ0M7UUFFaEMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUNqQixXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLENBQ21CLENBQUM7SUFDakMsQ0FBQztJQUNELG9CQUFvQixDQUNsQixXQUFtQixFQUNuQixTQUF1QixFQUN2QixZQUFvQixFQUNwQixTQUFnQztRQUVoQyxPQUFPLEtBQUssQ0FBQyxvQkFBb0IsQ0FDL0IsV0FBVyxFQUNYLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxDQUNWLENBQUM7SUFDSixDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQWU7UUFDcEIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBcUIsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsT0FBTyxDQUFDLE1BQWM7UUFDcEIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBNEIsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FDWixPQUFlLEVBQ2YsZ0JBQW1DO1FBRW5DLE9BQU8sSUFBSSxpQkFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQXFCLENBQUM7SUFDM0UsQ0FBQztDQUNGO0FBM0NELDBEQTJDQztBQUVELE1BQU0sSUFBSSxHQUFHO0lBQ1g7UUFDRSxNQUFNLEVB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LEVBQUUsaUJBQWlCO1FBQ3ZCLE9BQU8sRUFBRTtZQUNQO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsZUFBZSxFQUFFLE1BQU07UUFDdkIsSUFBSSxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNFLE1BQU0sRUFBRSxFQUFFO1FBQ1YsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUU7WUFDUDtnQkFDRSxZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0NBQ0YsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUNiLDRrTEFBNGtMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmF0ZWQgYnkgdHMtZ2VuZXJhdG9yIHZlci4gMC4wLjggKi9cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCB7IENvbnRyYWN0LCBDb250cmFjdEZhY3RvcnksIFNpZ25lciB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcImV0aGVycy9wcm92aWRlcnNcIjtcbmltcG9ydCB7IFVuc2lnbmVkVHJhbnNhY3Rpb24gfSBmcm9tIFwiZXRoZXJzL3V0aWxzL3RyYW5zYWN0aW9uXCI7XG5pbXBvcnQgeyBCaWdOdW1iZXJpc2ggfSBmcm9tIFwiZXRoZXJzL3V0aWxzXCI7XG5cbmltcG9ydCB7IFRyYW5zYWN0aW9uT3ZlcnJpZGVzIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IEFnZ3JlZ2F0b3JGYWNhZGUgfSBmcm9tIFwiLi9BZ2dyZWdhdG9yRmFjYWRlXCI7XG5cbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdG9yRmFjYWRlRmFjdG9yeSBleHRlbmRzIENvbnRyYWN0RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25lcj86IFNpZ25lcikge1xuICAgIHN1cGVyKF9hYmksIF9ieXRlY29kZSwgc2lnbmVyKTtcbiAgfVxuXG4gIGRlcGxveShcbiAgICBfYWdncmVnYXRvcjogc3RyaW5nLFxuICAgIF9kZWNpbWFsczogQmlnTnVtYmVyaXNoLFxuICAgIF9kZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgIG92ZXJyaWRlcz86IFRyYW5zYWN0aW9uT3ZlcnJpZGVzXG4gICk6IFByb21pc2U8QWdncmVnYXRvckZhY2FkZT4ge1xuICAgIHJldHVybiBzdXBlci5kZXBsb3koXG4gICAgICBfYWdncmVnYXRvcixcbiAgICAgIF9kZWNpbWFscyxcbiAgICAgIF9kZXNjcmlwdGlvbixcbiAgICAgIG92ZXJyaWRlc1xuICAgICkgYXMgUHJvbWlzZTxBZ2dyZWdhdG9yRmFjYWRlPjtcbiAgfVxuICBnZXREZXBsb3lUcmFuc2FjdGlvbihcbiAgICBfYWdncmVnYXRvcjogc3RyaW5nLFxuICAgIF9kZWNpbWFsczogQmlnTnVtYmVyaXNoLFxuICAgIF9kZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgIG92ZXJyaWRlcz86IFRyYW5zYWN0aW9uT3ZlcnJpZGVzXG4gICk6IFVuc2lnbmVkVHJhbnNhY3Rpb24ge1xuICAgIHJldHVybiBzdXBlci5nZXREZXBsb3lUcmFuc2FjdGlvbihcbiAgICAgIF9hZ2dyZWdhdG9yLFxuICAgICAgX2RlY2ltYWxzLFxuICAgICAgX2Rlc2NyaXB0aW9uLFxuICAgICAgb3ZlcnJpZGVzXG4gICAgKTtcbiAgfVxuICBhdHRhY2goYWRkcmVzczogc3RyaW5nKTogQWdncmVnYXRvckZhY2FkZSB7XG4gICAgcmV0dXJuIHN1cGVyLmF0dGFjaChhZGRyZXNzKSBhcyBBZ2dyZWdhdG9yRmFjYWRlO1xuICB9XG4gIGNvbm5lY3Qoc2lnbmVyOiBTaWduZXIpOiBBZ2dyZWdhdG9yRmFjYWRlRmFjdG9yeSB7XG4gICAgcmV0dXJuIHN1cGVyLmNvbm5lY3Qoc2lnbmVyKSBhcyBBZ2dyZWdhdG9yRmFjYWRlRmFjdG9yeTtcbiAgfVxuICBzdGF0aWMgY29ubmVjdChcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgc2lnbmVyT3JQcm92aWRlcjogU2lnbmVyIHwgUHJvdmlkZXJcbiAgKTogQWdncmVnYXRvckZhY2FkZSB7XG4gICAgcmV0dXJuIG5ldyBDb250cmFjdChhZGRyZXNzLCBfYWJpLCBzaWduZXJPclByb3ZpZGVyKSBhcyBBZ2dyZWdhdG9yRmFjYWRlO1xuICB9XG59XG5cbmNvbnN0IF9hYmkgPSBbXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJfYWdncmVnYXRvclwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsXG4gICAgICAgIG5hbWU6IFwiX2RlY2ltYWxzXCIsXG4gICAgICAgIHR5cGU6IFwidWludDhcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgICBuYW1lOiBcIl9kZXNjcmlwdGlvblwiLFxuICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiY29uc3RydWN0b3JcIlxuICB9LFxuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImludDI1NlwiLFxuICAgICAgICBuYW1lOiBcImN1cnJlbnRcIixcbiAgICAgICAgdHlwZTogXCJpbnQyNTZcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJyb3VuZElkXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleGVkOiBmYWxzZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJ1cGRhdGVkQXRcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiQW5zd2VyVXBkYXRlZFwiLFxuICAgIHR5cGU6IFwiZXZlbnRcIlxuICB9LFxuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJyb3VuZElkXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleGVkOiB0cnVlLFxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgICBuYW1lOiBcInN0YXJ0ZWRCeVwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogZmFsc2UsXG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwic3RhcnRlZEF0XCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcIk5ld1JvdW5kXCIsXG4gICAgdHlwZTogXCJldmVudFwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwiYWdncmVnYXRvclwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImNvbnRyYWN0IEFnZ3JlZ2F0b3JJbnRlcmZhY2VcIixcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwiZGVjaW1hbHNcIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50OFwiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcInVpbnQ4XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgfVxuICAgIF0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICBuYW1lOiBcIl9yb3VuZElkXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcImdldEFuc3dlclwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImludDI1NlwiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50ODBcIixcbiAgICAgICAgbmFtZTogXCJfcm91bmRJZFwiLFxuICAgICAgICB0eXBlOiBcInVpbnQ4MFwiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcImdldFJvdW5kRGF0YVwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQ4MFwiLFxuICAgICAgICBuYW1lOiBcInJvdW5kSWRcIixcbiAgICAgICAgdHlwZTogXCJ1aW50ODBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImludDI1NlwiLFxuICAgICAgICBuYW1lOiBcImFuc3dlclwiLFxuICAgICAgICB0eXBlOiBcImludDI1NlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICBuYW1lOiBcInN0YXJ0ZWRBdFwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJ1cGRhdGVkQXRcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50ODBcIixcbiAgICAgICAgbmFtZTogXCJhbnN3ZXJlZEluUm91bmRcIixcbiAgICAgICAgdHlwZTogXCJ1aW50ODBcIlxuICAgICAgfVxuICAgIF0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICBuYW1lOiBcIl9yb3VuZElkXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcImdldFRpbWVzdGFtcFwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwibGF0ZXN0QW5zd2VyXCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiaW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiaW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwibGF0ZXN0Um91bmRcIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcImxhdGVzdFJvdW5kRGF0YVwiLFxuICAgIG91dHB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQ4MFwiLFxuICAgICAgICBuYW1lOiBcInJvdW5kSWRcIixcbiAgICAgICAgdHlwZTogXCJ1aW50ODBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImludDI1NlwiLFxuICAgICAgICBuYW1lOiBcImFuc3dlclwiLFxuICAgICAgICB0eXBlOiBcImludDI1NlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICBuYW1lOiBcInN0YXJ0ZWRBdFwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJ1cGRhdGVkQXRcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50ODBcIixcbiAgICAgICAgbmFtZTogXCJhbnN3ZXJlZEluUm91bmRcIixcbiAgICAgICAgdHlwZTogXCJ1aW50ODBcIlxuICAgICAgfVxuICAgIF0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGlucHV0czogW10sXG4gICAgbmFtZTogXCJsYXRlc3RUaW1lc3RhbXBcIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcInZlcnNpb25cIixcbiAgICBvdXRwdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9XG5dO1xuXG5jb25zdCBfYnl0ZWNvZGUgPVxuICBcIjB4NjA4MDYwNDA1MjM0ODAxNTYxMDAxMDU3NjAwMDgwZmQ1YjUwNjA0MDUxNjEwYjI0MzgwMzgwNjEwYjI0ODMzOTgxODEwMTYwNDA1MjYwNjA4MTEwMTU2MTAwMzM1NzYwMDA4MGZkNWI4MTUxNjAyMDgzMDE1MTYwNDA4MDg1MDE4MDUxOTE1MTkzOTU5Mjk0ODMwMTkyOTE4NDY0MDEwMDAwMDAwMDgyMTExNTYxMDA1ZTU3NjAwMDgwZmQ1YjkwODMwMTkwNjAyMDgyMDE4NTgxMTExNTYxMDA3MzU3NjAwMDgwZmQ1YjgyNTE2NDAxMDAwMDAwMDA4MTExODI4MjAxODgxMDE3MTU2MTAwOGQ1NzYwMDA4MGZkNWI4MjUyNTA4MTUxNjAyMDkxODIwMTkyOTA5MTAxOTA4MDgzODM2MDAwNWI4MzgxMTAxNTYxMDBiYTU3ODE4MTAxNTE4MzgyMDE1MjYwMjAwMTYxMDBhMjU2NWI1MDUwNTA1MDkwNTA5MDgxMDE5MDYwMWYxNjgwMTU2MTAwZTc1NzgwODIwMzgwNTE2MDAxODM2MDIwMDM2MTAxMDAwYTAzMTkxNjgxNTI2MDIwMDE5MTUwNWI1MDYwNDA1MjUwNTA2MDAwODA1NDYwMDE2MDAxNjBhMDFiMDMxOTE2NjAwMTYwMDE2MGEwMWIwMzg2MTYxNzYwZmY2MGEwMWIxOTE2NjAwMTYwYTAxYjYwZmY4NjE2MDIxNzkwNTU1MDgwNTE2MTAxMmU5MDYwMDE5MDYwMjA4NDAxOTA2MTAxMzc1NjViNTA1MDUwNTA2MTAxZDI1NjViODI4MDU0NjAwMTgxNjAwMTE2MTU2MTAxMDAwMjAzMTY2MDAyOTAwNDkwNjAwMDUyNjAyMDYwMDAyMDkwNjAxZjAxNjAyMDkwMDQ4MTAxOTI4MjYwMWYxMDYxMDE3ODU3ODA1MTYwZmYxOTE2ODM4MDAxMTc4NTU1NjEwMWE1NTY1YjgyODAwMTYwMDEwMTg1NTU4MjE1NjEwMWE1NTc5MTgyMDE1YjgyODExMTE1NjEwMWE1NTc4MjUxODI1NTkxNjAyMDAxOTE5MDYwMDEwMTkwNjEwMThhNTY1YjUwNjEwMWIxOTI5MTUwNjEwMWI1NTY1YjUwOTA1NjViNjEwMWNmOTE5MDViODA4MjExMTU2MTAxYjE1NzYwMDA4MTU1NjAwMTAxNjEwMWJiNTY1YjkwNTY1YjYxMDk0MzgwNjEwMWUxNjAwMDM5NjAwMGYzZmU2MDgwNjA0MDUyMzQ4MDE1NjEwMDEwNTc2MDAwODBmZDViNTA2MDA0MzYxMDYxMDBjOTU3NjAwMDM1NjBlMDFjODA2MzcyODRlNDE2MTE2MTAwODE1NzgwNjNiNWFiNThkYzExNjEwMDViNTc4MDYzYjVhYjU4ZGMxNDYxMDIzNDU3ODA2M2I2MzM2MjBjMTQ2MTAyNTE1NzgwNjNmZWFmOTY4YzE0NjEwMjZlNTc2MTAwYzk1NjViODA2MzcyODRlNDE2MTQ2MTAxNDc1NzgwNjM4MjA1YmY2YTE0NjEwMWM0NTc4MDYzOWE2ZmM4ZjUxNDYxMDFjYzU3NjEwMGM5NTY1YjgwNjM1MGQyNWJjZDExNjEwMGIyNTc4MDYzNTBkMjViY2QxNDYxMDExZDU3ODA2MzU0ZmQ0ZDUwMTQ2MTAxMzc1NzgwNjM2NjhhMGYwMjE0NjEwMTNmNTc2MTAwYzk1NjViODA2MzI0NWE3YmZjMTQ2MTAwY2U1NzgwNjMzMTNjZTU2NzE0NjEwMGZmNTc1YjYwMDA4MGZkNWI2MTAwZDY2MTAyNzY1NjViNjA0MDgwNTE3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY5MDkyMTY4MjUyNTE5MDgxOTAwMzYwMjAwMTkwZjM1YjYxMDEwNzYxMDI5MjU2NWI2MDQwODA1MTYwZmY5MDkyMTY4MjUyNTE5MDgxOTAwMzYwMjAwMTkwZjM1YjYxMDEyNTYxMDJiMzU2NWI2MDQwODA1MTkxODI1MjUxOTA4MTkwMDM2MDIwMDE5MGYzNWI2MTAxMjU2MTAzNGQ1NjViNjEwMTI1NjEwMzUyNTY1YjYxMDE0ZjYxMDNiYjU2NWI2MDQwODA1MTYwMjA4MDgyNTI4MzUxODE4MzAxNTI4MzUxOTE5MjgzOTI5MDgzMDE5MTg1MDE5MDgwODM4MzYwMDA1YjgzODExMDE1NjEwMTg5NTc4MTgxMDE1MTgzODIwMTUyNjAyMDAxNjEwMTcxNTY1YjUwNTA1MDUwOTA1MDkwODEwMTkwNjAxZjE2ODAxNTYxMDFiNjU3ODA4MjAzODA1MTYwMDE4MzYwMjAwMzYxMDEwMDBhMDMxOTE2ODE1MjYwMjAwMTkxNTA1YjUwOTI1MDUwNTA2MDQwNTE4MDkxMDM5MGYzNWI2MTAxMjU2MTA0NjY1NjViNjEwMWY1NjAwNDgwMzYwMzYwMjA4MTEwMTU2MTAxZTI1NzYwMDA4MGZkNWI1MDM1NjlmZmZmZmZmZmZmZmZmZmZmZmZmZjE2NjEwNGNmNTY1YjYwNDA4MDUxNjlmZmZmZmZmZmZmZmZmZmZmZmZmZjk2ODcxNjgxNTI2MDIwODEwMTk1OTA5NTUyODQ4MTAxOTM5MDkzNTI2MDYwODQwMTkxOTA5MTUyOTA5MjE2NjA4MDgyMDE1MjkwNTE5MDgxOTAwMzYwYTAwMTkwZjM1YjYxMDEyNTYwMDQ4MDM2MDM2MDIwODExMDE1NjEwMjRhNTc2MDAwODBmZDViNTAzNTYxMDRmMjU2NWI2MTAxMjU2MDA0ODAzNjAzNjAyMDgxMTAxNTYxMDI2NzU3NjAwMDgwZmQ1YjUwMzU2MTA1OTc1NjViNjEwMWY1NjEwNjBhNTY1YjYwMDA1NDczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2ODE1NjViNjAwMDU0NzQwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA5MDA0NjBmZjE2ODE1NjViNjAwMDgwNjAwMDkwNTQ5MDYxMDEwMDBhOTAwNDczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY2MzUwZDI1YmNkNjA0MDUxODE2M2ZmZmZmZmZmMTY2MGUwMWI4MTUyNjAwNDAxNjAyMDYwNDA1MTgwODMwMzgxODY4MDNiMTU4MDE1NjEwMzFjNTc2MDAwODBmZDViNTA1YWZhMTU4MDE1NjEwMzMwNTczZDYwMDA4MDNlM2Q2MDAwZmQ1YjUwNTA1MDUwNjA0MDUxM2Q2MDIwODExMDE1NjEwMzQ2NTc2MDAwODBmZDViNTA1MTkwNTA5MDU2NWI2MDAyODE1NjViNjAwMDgwNjAwMDkwNTQ5MDYxMDEwMDBhOTAwNDczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY2MzY2OGEwZjAyNjA0MDUxODE2M2ZmZmZmZmZmMTY2MGUwMWI4MTUyNjAwNDAxNjAyMDYwNDA1MTgwODMwMzgxODY4MDNiMTU4MDE1NjEwMzFjNTc2MDAwODBmZDViNjAwMTgwNTQ2MDQwODA1MTYwMjA2MDAyODQ4NjE2MTU2MTAxMDAwMjdmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjAxOTA5NDE2OTM5MDkzMDQ2MDFmODEwMTg0OTAwNDg0MDI4MjAxODQwMTkwOTI1MjgxODE1MjkyOTE4MzAxODI4MjgwMTU2MTA0NWU1NzgwNjAxZjEwNjEwNDMzNTc2MTAxMDA4MDgzNTQwNDAyODM1MjkxNjAyMDAxOTE2MTA0NWU1NjViODIwMTkxOTA2MDAwNTI2MDIwNjAwMDIwOTA1YjgxNTQ4MTUyOTA2MDAxMDE5MDYwMjAwMTgwODMxMTYxMDQ0MTU3ODI5MDAzNjAxZjE2ODIwMTkxNWI1MDUwNTA1MDUwODE1NjViNjAwMDgwNjAwMDkwNTQ5MDYxMDEwMDBhOTAwNDczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY2MzgyMDViZjZhNjA0MDUxODE2M2ZmZmZmZmZmMTY2MGUwMWI4MTUyNjAwNDAxNjAyMDYwNDA1MTgwODMwMzgxODY4MDNiMTU4MDE1NjEwMzFjNTc2MDAwODBmZDViNjAwMDgwNjAwMDgwNjAwMDYxMDRlMDg2NjEwNmJlNTY1YjkzOWE5Mjk5NTA5MDk3NTA5NTUwOTA5MzUwOTE1MDUwNTY1YjYwMDA4MDU0NjA0MDgwNTE3ZmI1YWI1OGRjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA4MTUyNjAwNDgxMDE4NTkwNTI5MDUxNzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmOTA5MjE2OTE2M2I1YWI1OGRjOTE2MDI0ODA4MjAxOTI2MDIwOTI5MDkxOTA4MjkwMDMwMTgxODY4MDNiMTU4MDE1NjEwNTY1NTc2MDAwODBmZDViNTA1YWZhMTU4MDE1NjEwNTc5NTczZDYwMDA4MDNlM2Q2MDAwZmQ1YjUwNTA1MDUwNjA0MDUxM2Q2MDIwODExMDE1NjEwNThmNTc2MDAwODBmZDViNTA1MTkyOTE1MDUwNTY1YjYwMDA4MDU0NjA0MDgwNTE3ZmI2MzM2MjBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA4MTUyNjAwNDgxMDE4NTkwNTI5MDUxNzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmOTA5MjE2OTE2M2I2MzM2MjBjOTE2MDI0ODA4MjAxOTI2MDIwOTI5MDkxOTA4MjkwMDMwMTgxODY4MDNiMTU4MDE1NjEwNTY1NTc2MDAwODBmZDViNjAwMDgwNjAwMDgwNjAwMDYxMDZhZDYwMDA4MDkwNTQ5MDYxMDEwMDBhOTAwNDczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY2MzY2OGEwZjAyNjA0MDUxODE2M2ZmZmZmZmZmMTY2MGUwMWI4MTUyNjAwNDAxNjAyMDYwNDA1MTgwODMwMzgxODY4MDNiMTU4MDE1NjEwNjdjNTc2MDAwODBmZDViNTA1YWZhMTU4MDE1NjEwNjkwNTczZDYwMDA4MDNlM2Q2MDAwZmQ1YjUwNTA1MDUwNjA0MDUxM2Q2MDIwODExMDE1NjEwNmE2NTc2MDAwODBmZDViNTA1MTYxMDZiZTU2NWI5NDUwOTQ1MDk0NTA5NDUwOTQ1MDkwOTE5MjkzOTQ1NjViNjAwMDgwNTQ2MDQwODA1MTdmYjVhYjU4ZGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2OWZmZmZmZmZmZmZmZmZmZmZmZmZmODUxNjYwMDQ4MjAxNTI5MDUxODM5MjgzOTI4MzkyODM5MjczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2OTE2M2I1YWI1OGRjOTE2MDI0ODA4MzAxOTI2MDIwOTI5MTkwODI5MDAzMDE4MTg2ODAzYjE1ODAxNTYxMDc0MTU3NjAwMDgwZmQ1YjUwNWFmYTE1ODAxNTYxMDc1NTU3M2Q2MDAwODAzZTNkNjAwMGZkNWI1MDUwNTA1MDYwNDA1MTNkNjAyMDgxMTAxNTYxMDc2YjU3NjAwMDgwZmQ1YjUwNTE2MDAwNTQ2MDQwODA1MTdmYjYzMzYyMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2OWZmZmZmZmZmZmZmZmZmZmZmZmZmOGExNjYwMDQ4MjAxNTI5MDUxOTI5NjUwNzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmOTA5MTE2OTE2M2I2MzM2MjBjOTE2MDI0ODA4MjAxOTI2MDIwOTI5MDkxOTA4MjkwMDMwMTgxODY4MDNiMTU4MDE1NjEwN2VkNTc2MDAwODBmZDViNTA1YWZhMTU4MDE1NjEwODAxNTczZDYwMDA4MDNlM2Q2MDAwZmQ1YjUwNTA1MDUwNjA0MDUxM2Q2MDIwODExMDE1NjEwODE3NTc2MDAwODBmZDViNTA1MTYwNDA4MDUxODA4MjAxOTA5MTUyNjAwZjgxNTI3ZjRlNmYyMDY0NjE3NDYxMjA3MDcyNjU3MzY1NmU3NDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDIwODIwMTUyNjdmZmZmZmZmZmZmZmZmZmZmOTA5MTE2OTI1MDgyNjEwOGZlNTc2MDQwNTE3ZjA4YzM3OWEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA4MTUyNjAwNDAxODA4MDYwMjAwMTgyODEwMzgyNTI4MzgxODE1MTgxNTI2MDIwMDE5MTUwODA1MTkwNjAyMDAxOTA4MDgzODM2MDAwNWI4MzgxMTAxNTYxMDhjMzU3ODE4MTAxNTE4MzgyMDE1MjYwMjAwMTYxMDhhYjU2NWI1MDUwNTA1MDkwNTA5MDgxMDE5MDYwMWYxNjgwMTU2MTA4ZjA1NzgwODIwMzgwNTE2MDAxODM2MDIwMDM2MTAxMDAwYTAzMTkxNjgxNTI2MDIwMDE5MTUwNWI1MDkyNTA1MDUwNjA0MDUxODA5MTAzOTBmZDViNTA5NDk1OTI5NDUwOTI1MDgyOTE4NTkxNTA1NmZlYTI2NDY5NzA2NjczNTgyMjEyMjBhNTgxMWFkNzA1OTgxZGQzZjBmZWJjMTYyNjQ0YTU3OGU3YjQzNzU2OTYyMmFiMWE2MDU2ZTVhZWZiOGU5ZTIwNjQ3MzZmNmM2MzQzMDAwNjA2MDAzM1wiO1xuIl19