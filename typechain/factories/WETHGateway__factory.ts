/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WETHGateway, WETHGatewayInterface } from "../WETHGateway";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "weth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "IllegalArgument",
    type: "error",
  },
  {
    inputs: [],
    name: "IllegalState",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "contract IWETH9",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alchemist",
        type: "address",
      },
      {
        internalType: "address",
        name: "yieldToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minimumAmountOut",
        type: "uint256",
      },
    ],
    name: "depositUnderlying",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alchemist",
        type: "address",
      },
    ],
    name: "refreshAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "alchemist",
        type: "address",
      },
      {
        internalType: "address",
        name: "yieldToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minimumAmountOut",
        type: "uint256",
      },
    ],
    name: "withdrawUnderlying",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610b6b380380610b6b83398101604081905261002f91610099565b61003833610049565b6001600160a01b03166080526100c9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100ab57600080fd5b81516001600160a01b03811681146100c257600080fd5b9392505050565b608051610a5e61010d600039600081816084015281816101650152818161022d01528181610320015281816103ac0152818161050101526106650152610a5e6000f3fe6080604052600436106100745760003560e01c80638da5cb5b1161004e5780638da5cb5b1461011d578063ad5c464814610153578063f2fde38b14610187578063fe65b98a146101a757600080fd5b80630df6cee0146100c85780636860e4e6146100e8578063715018a61461010857600080fd5b366100c357336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146100c1576040516282b42960e81b815260040160405180910390fd5b005b600080fd5b3480156100d457600080fd5b506100c16100e33660046107c7565b6101ba565b3480156100f457600080fd5b506100c1610103366004610822565b6104a7565b34801561011457600080fd5b506100c1610572565b34801561012957600080fd5b506000546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b34801561015f57600080fd5b506101377f000000000000000000000000000000000000000000000000000000000000000081565b34801561019357600080fd5b506100c16101a2366004610822565b6105a8565b6100c16101b53660046107c7565b610643565b604051635a5efc8b60e01b81526001600160a01b03858116600483015260009190871690635a5efc8b906024016101e060405180830381865afa158015610205573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022991906108af565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681602001516001600160a01b03161461028157604051630134249960e71b815260040160405180910390fd5b604051632e5a3b8f60e21b81523360048201526001600160a01b038681166024830152604482018690523060648301526084820184905287169063b968ee3c9060a4016020604051808303816000875af11580156102e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103079190610984565b506040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561036f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103939190610984565b604051632e1a7d4d60e01b8152600481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d90602401600060405180830381600087803b1580156103f857600080fd5b505af115801561040c573d6000803e3d6000fd5b5050604080516000808252602082019283905293506001600160a01b03881692508491610439919061099d565b60006040518083038185875af1925050503d8060008114610476576040519150601f19603f3d011682016040523d82523d6000602084013e61047b565b606091505b505090508061049d57604051634a613c4160e01b815260040160405180910390fd5b5050505050505050565b6000546001600160a01b031633146104da5760405162461bcd60e51b81526004016104d1906109d8565b60405180910390fd5b60405163095ea7b360e01b81526001600160a01b03828116600483015260001960248301527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303816000875af115801561054a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056e9190610a0d565b5050565b6000546001600160a01b0316331461059c5760405162461bcd60e51b81526004016104d1906109d8565b6105a66000610762565b565b6000546001600160a01b031633146105d25760405162461bcd60e51b81526004016104d1906109d8565b6001600160a01b0381166106375760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104d1565b61064081610762565b50565b34831461066357604051630134249960e71b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b1580156106be57600080fd5b505af11580156106d2573d6000803e3d6000fd5b5050604051635efd4dd760e11b81526001600160a01b038881166004830152602482018890528681166044830152606482018690528916935063bdfa9bae925060840190506020604051808303816000875af1158015610736573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075a9190610984565b505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038116811461064057600080fd5b600080600080600060a086880312156107df57600080fd5b85356107ea816107b2565b945060208601356107fa816107b2565b9350604086013592506060860135610811816107b2565b949793965091946080013592915050565b60006020828403121561083457600080fd5b813561083f816107b2565b9392505050565b6040516101e0810167ffffffffffffffff8111828210171561087857634e487b7160e01b600052604160045260246000fd5b60405290565b805160ff8116811461088f57600080fd5b919050565b805161088f816107b2565b8051801515811461088f57600080fd5b60006101e082840312156108c257600080fd5b6108ca610846565b6108d38361087e565b81526108e160208401610894565b60208201526108f260408401610894565b6040820152606083810151908201526080808401519082015260a0808401519082015260c0808401519082015260e08084015190820152610100808401519082015261012080840151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c061097981850161089f565b908201529392505050565b60006020828403121561099657600080fd5b5051919050565b6000825160005b818110156109be57602081860181015185830152016109a4565b818111156109cd576000828501525b509190910192915050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060208284031215610a1f57600080fd5b61083f8261089f56fea26469706673582212208f02bd13556e8c683b8081c6b737967601a4c792e9cfdb4997c09776e9ce192b64736f6c634300080b0033";

export class WETHGateway__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    weth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WETHGateway> {
    return super.deploy(weth, overrides || {}) as Promise<WETHGateway>;
  }
  getDeployTransaction(
    weth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(weth, overrides || {});
  }
  attach(address: string): WETHGateway {
    return super.attach(address) as WETHGateway;
  }
  connect(signer: Signer): WETHGateway__factory {
    return super.connect(signer) as WETHGateway__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WETHGatewayInterface {
    return new utils.Interface(_abi) as WETHGatewayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WETHGateway {
    return new Contract(address, _abi, signerOrProvider) as WETHGateway;
  }
}