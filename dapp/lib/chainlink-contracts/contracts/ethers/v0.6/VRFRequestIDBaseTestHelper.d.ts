/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface VRFRequestIDBaseTestHelperInterface extends Interface {
  functions: {
    makeRequestId_: TypedFunctionDescription<{
      encode([_keyHash, _vRFInputSeed]: [Arrayish, BigNumberish]): string;
    }>;

    makeVRFInputSeed_: TypedFunctionDescription<{
      encode([_keyHash, _userSeed, _requester, _nonce]: [
        Arrayish,
        BigNumberish,
        string,
        BigNumberish
      ]): string;
    }>;
  };

  events: {};
}

export class VRFRequestIDBaseTestHelper extends Contract {
  connect(
    signerOrProvider: Signer | Provider | string
  ): VRFRequestIDBaseTestHelper;
  attach(addressOrName: string): VRFRequestIDBaseTestHelper;
  deployed(): Promise<VRFRequestIDBaseTestHelper>;

  on(
    event: EventFilter | string,
    listener: Listener
  ): VRFRequestIDBaseTestHelper;
  once(
    event: EventFilter | string,
    listener: Listener
  ): VRFRequestIDBaseTestHelper;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): VRFRequestIDBaseTestHelper;
  removeAllListeners(
    eventName: EventFilter | string
  ): VRFRequestIDBaseTestHelper;
  removeListener(
    eventName: any,
    listener: Listener
  ): VRFRequestIDBaseTestHelper;

  interface: VRFRequestIDBaseTestHelperInterface;

  functions: {
    makeRequestId_(
      _keyHash: Arrayish,
      _vRFInputSeed: BigNumberish
    ): Promise<string>;

    makeVRFInputSeed_(
      _keyHash: Arrayish,
      _userSeed: BigNumberish,
      _requester: string,
      _nonce: BigNumberish
    ): Promise<BigNumber>;
  };

  makeRequestId_(
    _keyHash: Arrayish,
    _vRFInputSeed: BigNumberish
  ): Promise<string>;

  makeVRFInputSeed_(
    _keyHash: Arrayish,
    _userSeed: BigNumberish,
    _requester: string,
    _nonce: BigNumberish
  ): Promise<BigNumber>;

  filters: {};

  estimate: {
    makeRequestId_(
      _keyHash: Arrayish,
      _vRFInputSeed: BigNumberish
    ): Promise<BigNumber>;

    makeVRFInputSeed_(
      _keyHash: Arrayish,
      _userSeed: BigNumberish,
      _requester: string,
      _nonce: BigNumberish
    ): Promise<BigNumber>;
  };
}
