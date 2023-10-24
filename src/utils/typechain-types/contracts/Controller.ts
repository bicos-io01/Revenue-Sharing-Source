/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface ControllerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "conversionContract"
      | "deployContracts"
      | "fundContract"
      | "revenueSharingContract"
      | "storageContract"
      | "swapRouter"
      | "ticketPurchaseContract"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "ContractDeployed" | "ContractFunded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "conversionContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deployContracts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fundContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revenueSharingContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "storageContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ticketPurchaseContract",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "conversionContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revenueSharingContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storageContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapRouter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ticketPurchaseContract",
    data: BytesLike
  ): Result;
}

export namespace ContractDeployedEvent {
  export type InputTuple = [contractName: string, contractAddress: AddressLike];
  export type OutputTuple = [contractName: string, contractAddress: string];
  export interface OutputObject {
    contractName: string;
    contractAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ContractFundedEvent {
  export type InputTuple = [sender: AddressLike, amount: BigNumberish];
  export type OutputTuple = [sender: string, amount: bigint];
  export interface OutputObject {
    sender: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Controller extends BaseContract {
  connect(runner?: ContractRunner | null): Controller;
  waitForDeployment(): Promise<this>;

  interface: ControllerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  conversionContract: TypedContractMethod<[], [string], "view">;

  deployContracts: TypedContractMethod<[], [void], "nonpayable">;

  fundContract: TypedContractMethod<[], [void], "payable">;

  revenueSharingContract: TypedContractMethod<[], [string], "view">;

  storageContract: TypedContractMethod<[], [string], "view">;

  swapRouter: TypedContractMethod<[], [string], "view">;

  ticketPurchaseContract: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "conversionContract"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "deployContracts"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "fundContract"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "revenueSharingContract"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "storageContract"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "swapRouter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ticketPurchaseContract"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "ContractDeployed"
  ): TypedContractEvent<
    ContractDeployedEvent.InputTuple,
    ContractDeployedEvent.OutputTuple,
    ContractDeployedEvent.OutputObject
  >;
  getEvent(
    key: "ContractFunded"
  ): TypedContractEvent<
    ContractFundedEvent.InputTuple,
    ContractFundedEvent.OutputTuple,
    ContractFundedEvent.OutputObject
  >;

  filters: {
    "ContractDeployed(string,address)": TypedContractEvent<
      ContractDeployedEvent.InputTuple,
      ContractDeployedEvent.OutputTuple,
      ContractDeployedEvent.OutputObject
    >;
    ContractDeployed: TypedContractEvent<
      ContractDeployedEvent.InputTuple,
      ContractDeployedEvent.OutputTuple,
      ContractDeployedEvent.OutputObject
    >;

    "ContractFunded(address,uint256)": TypedContractEvent<
      ContractFundedEvent.InputTuple,
      ContractFundedEvent.OutputTuple,
      ContractFundedEvent.OutputObject
    >;
    ContractFunded: TypedContractEvent<
      ContractFundedEvent.InputTuple,
      ContractFundedEvent.OutputTuple,
      ContractFundedEvent.OutputObject
    >;
  };
}
