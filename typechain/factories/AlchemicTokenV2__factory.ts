/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AlchemicTokenV2,
  AlchemicTokenV2Interface,
} from "../AlchemicTokenV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_flashFee",
        type: "uint256",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "SetFlashMintFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BPS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CALLBACK_SUCCESS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SENTINEL_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "flashFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC3156FlashBorrower",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "flashLoan",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "flashMintFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "maxFlashLoan",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxFlashLoanAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "pauseMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
    ],
    name: "setFlashFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxFlashLoanAmount",
        type: "uint256",
      },
    ],
    name: "setMaxFlashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sentinel",
        type: "address",
      },
    ],
    name: "setSentinel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "setWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ee438038062001ee4833981016040819052620000349162000365565b6001805582518390839062000051906005906020850190620001f2565b50805162000067906006906020840190620001f2565b5050506200008b60008051602062001ea483398151915233620000f760201b60201c565b620000a660008051602062001ec483398151915233620000f7565b620000d060008051602062001ec483398151915260008051602062001ea483398151915262000107565b620000eb60008051602062001ea48339815191528062000107565b60095550620004159050565b62000103828262000152565b5050565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000103576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001ae3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b8280546200020090620003d8565b90600052602060002090601f0160209004810192826200022457600085556200026f565b82601f106200023f57805160ff19168380011785556200026f565b828001600101855582156200026f579182015b828111156200026f57825182559160200191906001019062000252565b506200027d92915062000281565b5090565b5b808211156200027d576000815560010162000282565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620002c057600080fd5b81516001600160401b0380821115620002dd57620002dd62000298565b604051601f8301601f19908116603f0116810190828211818310171562000308576200030862000298565b816040528381526020925086838588010111156200032557600080fd5b600091505b838210156200034957858201830151818301840152908201906200032a565b838211156200035b5760008385830101525b9695505050505050565b6000806000606084860312156200037b57600080fd5b83516001600160401b03808211156200039357600080fd5b620003a187838801620002ae565b94506020860151915080821115620003b857600080fd5b50620003c786828701620002ae565b925050604084015190509250925092565b600181811c90821680620003ed57607f821691505b602082108114156200040f57634e487b7160e01b600052602260045260246000fd5b50919050565b611a7f80620004256000396000f3fe608060405234801561001057600080fd5b50600436106102275760003560e01c8063613255ab11610130578063a140edb4116100b8578063d547741f1161007c578063d547741f146104d0578063d936547e146104e3578063d9d98ce414610506578063dd62ed3e14610519578063e68b14ff1461055257600080fd5b8063a140edb414610486578063a217fddf1461048f578063a457c2d714610497578063a6beee4a146104aa578063a9059cbb146104bd57600080fd5b80638237e538116100ff5780638237e53814610428578063907a267b1461044f57806391d1485414610462578063940a1dc01461047557806395d89b411461047e57600080fd5b8063613255ab146103c457806370a08231146103d757806375b238fc1461040057806379cc67901461041557600080fd5b80632e48152c116101b35780633950935111610182578063395093511461036557806340c10f191461037857806342966c681461038b57806353d6fd591461039e5780635cffe9de146103b157600080fd5b80632e48152c1461030d5780632f2ff15d14610330578063313ce5671461034357806336568abe1461035257600080fd5b806313430d92116101fa57806313430d921461029157806318160ddd146102c657806323b872dd146102ce578063248a9ca3146102e1578063249d39e91461030457600080fd5b806301ffc9a71461022c57806306fdde0314610254578063095ea7b31461026957806309dac0611461027c575b600080fd5b61023f61023a3660046115ca565b610565565b60405190151581526020015b60405180910390f35b61025c61059c565b60405161024b9190611620565b61023f610277366004611668565b61062e565b61028f61028a366004611694565b610644565b005b6102b87fd3eedd6d69d410e954f4c622838ecc3acae9fdcd83cad412075c85b09277065681565b60405190815260200161024b565b6004546102b8565b61023f6102dc3660046116b1565b6106a5565b6102b86102ef3660046116f2565b60009081526020819052604090206001015490565b6102b861271081565b61023f61031b366004611694565b60086020526000908152604090205460ff1681565b61028f61033e36600461170b565b610754565b6040516012815260200161024b565b61028f61036036600461170b565b61077f565b61023f610373366004611668565b6107fd565b61028f610386366004611668565b610839565b61028f6103993660046116f2565b6108a3565b61028f6103ac36600461173b565b6108ad565b61023f6103bf36600461176e565b61090c565b6102b86103d2366004611694565b610aac565b6102b86103e5366004611694565b6001600160a01b031660009081526002602052604090205490565b6102b8600080516020611a2a83398151915281565b61028f610423366004611668565b610ace565b6102b87f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd981565b61028f61045d3660046116f2565b610b14565b61023f61047036600461170b565b610b83565b6102b860095481565b61025c610bac565b6102b8600a5481565b6102b8600081565b61023f6104a5366004611668565b610bbb565b61028f6104b83660046116f2565b610c54565b61023f6104cb366004611668565b610c8d565b61028f6104de36600461170b565b610c9a565b61023f6104f1366004611694565b60076020526000908152604090205460ff1681565b6102b8610514366004611668565b610cc0565b6102b861052736600461180d565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b61028f61056036600461173b565b610d0d565b60006001600160e01b03198216637965db0b60e01b148061059657506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600580546105ab9061183b565b80601f01602080910402602001604051908101604052809291908181526020018280546105d79061183b565b80156106245780601f106105f957610100808354040283529160200191610624565b820191906000526020600020905b81548152906001019060200180831161060757829003601f168201915b5050505050905090565b600061063b338484610db6565b50600192915050565b61065c600080516020611a2a83398151915233610b83565b610678576040516282b42960e81b815260040160405180910390fd5b6106a27fd3eedd6d69d410e954f4c622838ecc3acae9fdcd83cad412075c85b09277065682610eda565b50565b60006106b2848484610ee4565b6001600160a01b03841660009081526003602090815260408083203384529091529020548281101561073c5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6107498533858403610db6565b506001949350505050565b60008281526020819052604090206001015461077081336110b4565b61077a8383611118565b505050565b6001600160a01b03811633146107ef5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610733565b6107f9828261119c565b5050565b3360008181526003602090815260408083206001600160a01b0387168452909152812054909161063b91859061083490869061188c565b610db6565b3360009081526007602052604090205460ff16610868576040516282b42960e81b815260040160405180910390fd5b3360009081526008602052604090205460ff161561089957604051634a613c4160e01b815260040160405180910390fd5b6107f98282611201565b6106a233826112e0565b6108c5600080516020611a2a83398151915233610b83565b6108e1576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03919091166000908152600760205260409020805460ff1916911515919091179055565b6000600260015414156109615760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610733565b60026001556001600160a01b038516301461098f57604051630134249960e71b815260040160405180910390fd5b61099885610aac565b8411156109b857604051630134249960e71b815260040160405180910390fd5b60006109c48686610cc0565b90506109d08786611201565b6040516323e30c8b60e01b81527f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd9906001600160a01b038916906323e30c8b90610a289033908b908b9088908c908c906004016118a4565b6020604051808303816000875af1158015610a47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6b9190611900565b14610a8957604051634a613c4160e01b815260040160405180910390fd5b610a9c87610a97838861188c565b6112e0565b5050600180805595945050505050565b60006001600160a01b0382163014610ac657506000919050565b5050600a5490565b6001600160a01b0382166000908152600360209081526040808320338452909152812054610afd908390611919565b9050610b0a833383610db6565b61077a83836112e0565b610b2c600080516020611a2a83398151915233610b83565b610b48576040516282b42960e81b815260040160405180910390fd5b60098190556040518181527f2a870645d0d1cf8866b52d71ff02db01b3e1dc4b70f53e2c4e85dbe60969b92e9060200160405180910390a150565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600680546105ab9061183b565b3360009081526003602090815260408083206001600160a01b038616845290915281205482811015610c3d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610733565b610c4a3385858403610db6565b5060019392505050565b610c6c600080516020611a2a83398151915233610b83565b610c88576040516282b42960e81b815260040160405180910390fd5b600a55565b600061063b338484610ee4565b600082815260208190526040902060010154610cb681336110b4565b61077a838361119c565b60006001600160a01b0383163014610ceb57604051630134249960e71b815260040160405180910390fd5b61271060095483610cfc9190611930565b610d06919061194f565b9392505050565b610d377fd3eedd6d69d410e954f4c622838ecc3acae9fdcd83cad412075c85b09277065633610b83565b610d53576040516282b42960e81b815260040160405180910390fd5b6001600160a01b038216600081815260086020908152604091829020805460ff19168515159081179091558251938452908301527fe8699cf681560fd07de85543bd994263f4557bdc5179dd702f256d15fd083e1d910160405180910390a15050565b6001600160a01b038316610e185760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610733565b6001600160a01b038216610e795760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610733565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6107f98282611118565b6001600160a01b038316610f485760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610733565b6001600160a01b038216610faa5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610733565b6001600160a01b038316600090815260026020526040902054818110156110225760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610733565b6001600160a01b0380851660009081526002602052604080822085850390559185168152908120805484929061105990849061188c565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110a591815260200190565b60405180910390a35b50505050565b6110be8282610b83565b6107f9576110d6816001600160a01b0316601461142e565b6110e183602061142e565b6040516020016110f2929190611971565b60408051601f198184030181529082905262461bcd60e51b825261073391600401611620565b6111228282610b83565b6107f9576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556111583390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6111a68282610b83565b156107f9576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b0382166112575760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610733565b8060046000828254611269919061188c565b90915550506001600160a01b0382166000908152600260205260408120805483929061129690849061188c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0382166113405760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610733565b6001600160a01b038216600090815260026020526040902054818110156113b45760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610733565b6001600160a01b03831660009081526002602052604081208383039055600480548492906113e3908490611919565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6060600061143d836002611930565b61144890600261188c565b67ffffffffffffffff811115611460576114606119e6565b6040519080825280601f01601f19166020018201604052801561148a576020820181803683370190505b509050600360fc1b816000815181106114a5576114a56119fc565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106114d4576114d46119fc565b60200101906001600160f81b031916908160001a90535060006114f8846002611930565b61150390600161188c565b90505b600181111561157b576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611537576115376119fc565b1a60f81b82828151811061154d5761154d6119fc565b60200101906001600160f81b031916908160001a90535060049490941c9361157481611a12565b9050611506565b508315610d065760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610733565b6000602082840312156115dc57600080fd5b81356001600160e01b031981168114610d0657600080fd5b60005b8381101561160f5781810151838201526020016115f7565b838111156110ae5750506000910152565b602081526000825180602084015261163f8160408501602087016115f4565b601f01601f19169190910160400192915050565b6001600160a01b03811681146106a257600080fd5b6000806040838503121561167b57600080fd5b823561168681611653565b946020939093013593505050565b6000602082840312156116a657600080fd5b8135610d0681611653565b6000806000606084860312156116c657600080fd5b83356116d181611653565b925060208401356116e181611653565b929592945050506040919091013590565b60006020828403121561170457600080fd5b5035919050565b6000806040838503121561171e57600080fd5b82359150602083013561173081611653565b809150509250929050565b6000806040838503121561174e57600080fd5b823561175981611653565b91506020830135801515811461173057600080fd5b60008060008060006080868803121561178657600080fd5b853561179181611653565b945060208601356117a181611653565b935060408601359250606086013567ffffffffffffffff808211156117c557600080fd5b818801915088601f8301126117d957600080fd5b8135818111156117e857600080fd5b8960208285010111156117fa57600080fd5b9699959850939650602001949392505050565b6000806040838503121561182057600080fd5b823561182b81611653565b9150602083013561173081611653565b600181811c9082168061184f57607f821691505b6020821081141561187057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561189f5761189f611876565b500190565b6001600160a01b03878116825286166020820152604081018590526060810184905260a06080820181905281018290526000828460c0840137600060c0848401015260c0601f19601f8501168301019050979650505050505050565b60006020828403121561191257600080fd5b5051919050565b60008282101561192b5761192b611876565b500390565b600081600019048311821515161561194a5761194a611876565b500290565b60008261196c57634e487b7160e01b600052601260045260246000fd5b500490565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516119a98160178501602088016115f4565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516119da8160288401602088016115f4565b01602801949350505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081611a2157611a21611876565b50600019019056fedf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42a2646970667358221220777eb42117b886110fe7227dcc9d6d3a4e50cc707cd597652de6062bc6e9890564736f6c634300080b0033df8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42d3eedd6d69d410e954f4c622838ecc3acae9fdcd83cad412075c85b092770656";

export class AlchemicTokenV2__factory extends ContractFactory {
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
    _name: string,
    _symbol: string,
    _flashFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AlchemicTokenV2> {
    return super.deploy(
      _name,
      _symbol,
      _flashFee,
      overrides || {}
    ) as Promise<AlchemicTokenV2>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _flashFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _flashFee,
      overrides || {}
    );
  }
  attach(address: string): AlchemicTokenV2 {
    return super.attach(address) as AlchemicTokenV2;
  }
  connect(signer: Signer): AlchemicTokenV2__factory {
    return super.connect(signer) as AlchemicTokenV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AlchemicTokenV2Interface {
    return new utils.Interface(_abi) as AlchemicTokenV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AlchemicTokenV2 {
    return new Contract(address, _abi, signerOrProvider) as AlchemicTokenV2;
  }
}