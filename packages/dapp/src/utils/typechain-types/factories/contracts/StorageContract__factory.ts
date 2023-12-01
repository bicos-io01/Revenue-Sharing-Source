/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  StorageContract,
  StorageContractInterface,
} from "../../contracts/StorageContract";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "funder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ContractFunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsSentToRevenueSharing",
    type: "event",
  },
  {
    inputs: [],
    name: "controller",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "fundContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_controller",
        type: "address",
      },
    ],
    name: "initializeController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "revenueSharingContract",
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
        name: "_revenueSharingContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdc",
        type: "address",
      },
    ],
    name: "setContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newThreshold",
        type: "uint256",
      },
    ],
    name: "setThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "threshold",
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
    name: "usdc",
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
] as const;

const _bytecode =
  "0x60806040526305f5e10060035534801561001857600080fd5b5061067b806100286000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063960bfe041161005b578063960bfe04146100fc578063d8952a491461010f578063f5276e4c14610122578063f77c47911461013557600080fd5b8063208aae5a1461008d5780633519a2f8146100bd5780633e413bee146100d257806342cde4e8146100e5575b600080fd5b6001546100a0906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100d06100cb366004610534565b610148565b005b6002546100a0906001600160a01b031681565b6100ee60035481565b6040519081526020016100b4565b6100d061010a366004610534565b610432565b6100d061011d366004610569565b610461565b6100d061013036600461059c565b6104b9565b6000546100a0906001600160a01b031681565b6002546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af115801561019f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c391906105be565b61020c5760405162461bcd60e51b81526020600482015260156024820152742aa9a221903a3930b739b332b9103330b4b632b21760591b60448201526064015b60405180910390fd5b60405181815233907f0939f6f4877faf071412e527bc4c6d0bd65ad077e52b57334f7765265647a7f19060200160405180910390a26002546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa15801561028a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ae91906105e0565b9050600354811061042e5760025460015460405163095ea7b360e01b81526001600160a01b0391821660048201526024810184905291169063095ea7b3906044016020604051808303816000875af115801561030e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033291906105be565b6103965760405162461bcd60e51b815260206004820152602f60248201527f5553444320617070726f76616c20746f20526576656e756553686172696e674360448201526e37b73a3930b1ba103330b4b632b21760891b6064820152608401610203565b60015460405163f726f71560e01b8152600481018390526001600160a01b039091169063f726f71590602401600060405180830381600087803b1580156103dc57600080fd5b505af11580156103f0573d6000803e3d6000fd5b505050507f881adf09c54e7bf747aad0ea1f2100013c801e9dca4fb31cc70ff6352810840b8160405161042591815260200190565b60405180910390a15b5050565b6000546001600160a01b0316331461045c5760405162461bcd60e51b8152600401610203906105f9565b600355565b6000546001600160a01b0316331461048b5760405162461bcd60e51b8152600401610203906105f9565b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055565b6000546001600160a01b0316156105125760405162461bcd60e51b815260206004820181905260248201527f436f6e74726f6c6c65722068617320616c7265616479206265656e207365742e6044820152606401610203565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006020828403121561054657600080fd5b5035919050565b80356001600160a01b038116811461056457600080fd5b919050565b6000806040838503121561057c57600080fd5b6105858361054d565b91506105936020840161054d565b90509250929050565b6000602082840312156105ae57600080fd5b6105b78261054d565b9392505050565b6000602082840312156105d057600080fd5b815180151581146105b757600080fd5b6000602082840312156105f257600080fd5b5051919050565b6020808252602c908201527f4f6e6c792074686520636f6e74726f6c6c65722063616e20706572666f726d2060408201526b3a3434b99030b1ba34b7b71760a11b60608201526080019056fea2646970667358221220d1565507830d3805d98bdcb05ce63514233fd90de59b81cdc3a6a9eca3939a4564736f6c63430008150033";

type StorageContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StorageContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StorageContract__factory extends ContractFactory {
  constructor(...args: StorageContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      StorageContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): StorageContract__factory {
    return super.connect(runner) as StorageContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StorageContractInterface {
    return new Interface(_abi) as StorageContractInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): StorageContract {
    return new Contract(address, _abi, runner) as unknown as StorageContract;
  }
}