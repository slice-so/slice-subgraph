// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ERC1155ListingChanged extends ethereum.Event {
  get params(): ERC1155ListingChanged__Params {
    return new ERC1155ListingChanged__Params(this);
  }
}

export class ERC1155ListingChanged__Params {
  _event: ERC1155ListingChanged;

  constructor(event: ERC1155ListingChanged) {
    this._event = event;
  }

  get slicerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get contractAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get currentAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ERC721ListingChanged extends ethereum.Event {
  get params(): ERC721ListingChanged__Params {
    return new ERC721ListingChanged__Params(this);
  }
}

export class ERC721ListingChanged__Params {
  _event: ERC721ListingChanged;

  constructor(event: ERC721ListingChanged) {
    this._event = event;
  }

  get slicerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get contractAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get isActive(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ProductAdded extends ethereum.Event {
  get params(): ProductAdded__Params {
    return new ProductAdded__Params(this);
  }
}

export class ProductAdded__Params {
  _event: ProductAdded;

  constructor(event: ProductAdded) {
    this._event = event;
  }

  get slicerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get productId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get categoryIndex(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get isFree(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }

  get isMultiple(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }

  get isInfinite(): boolean {
    return this._event.parameters[5].value.toBoolean();
  }

  get availableUnits(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[7].value.toAddress();
  }

  get data(): Bytes {
    return this._event.parameters[8].value.toBytes();
  }

  get subSlicerProducts(): Array<ProductAddedSubSlicerProductsStruct> {
    return this._event.parameters[9].value.toTupleArray<
      ProductAddedSubSlicerProductsStruct
    >();
  }

  get currencyPrices(): Array<ProductAddedCurrencyPricesStruct> {
    return this._event.parameters[10].value.toTupleArray<
      ProductAddedCurrencyPricesStruct
    >();
  }

  get externalCall(): ProductAddedExternalCallStruct {
    return changetype<ProductAddedExternalCallStruct>(
      this._event.parameters[11].value.toTuple()
    );
  }
}

export class ProductAddedSubSlicerProductsStruct extends ethereum.Tuple {
  get subSlicerId(): BigInt {
    return this[0].toBigInt();
  }

  get subProductId(): BigInt {
    return this[1].toBigInt();
  }
}

export class ProductAddedCurrencyPricesStruct extends ethereum.Tuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }

  get dynamicPricing(): boolean {
    return this[1].toBoolean();
  }

  get currency(): Address {
    return this[2].toAddress();
  }
}

export class ProductAddedExternalCallStruct extends ethereum.Tuple {
  get data(): Bytes {
    return this[0].toBytes();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }

  get externalAddress(): Address {
    return this[2].toAddress();
  }

  get checkFunctionSignature(): Bytes {
    return this[3].toBytes();
  }

  get execFunctionSignature(): Bytes {
    return this[4].toBytes();
  }
}

export class ProductInfoChanged extends ethereum.Event {
  get params(): ProductInfoChanged__Params {
    return new ProductInfoChanged__Params(this);
  }
}

export class ProductInfoChanged__Params {
  _event: ProductInfoChanged;

  constructor(event: ProductInfoChanged) {
    this._event = event;
  }

  get slicerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get productId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get isFree(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }

  get isInfinite(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }

  get newUnits(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get currencyPrices(): Array<ProductInfoChangedCurrencyPricesStruct> {
    return this._event.parameters[5].value.toTupleArray<
      ProductInfoChangedCurrencyPricesStruct
    >();
  }
}

export class ProductInfoChangedCurrencyPricesStruct extends ethereum.Tuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }

  get dynamicPricing(): boolean {
    return this[1].toBoolean();
  }

  get currency(): Address {
    return this[2].toAddress();
  }
}

export class ProductPaid extends ethereum.Event {
  get params(): ProductPaid__Params {
    return new ProductPaid__Params(this);
  }
}

export class ProductPaid__Params {
  _event: ProductPaid;

  constructor(event: ProductPaid) {
    this._event = event;
  }

  get slicerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get productId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get currency(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get paymentEth(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get paymentCurrency(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class ProductRemoved extends ethereum.Event {
  get params(): ProductRemoved__Params {
    return new ProductRemoved__Params(this);
  }
}

export class ProductRemoved__Params {
  _event: ProductRemoved;

  constructor(event: ProductRemoved) {
    this._event = event;
  }

  get slicerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get productId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ReleasedToSlicer extends ethereum.Event {
  get params(): ReleasedToSlicer__Params {
    return new ReleasedToSlicer__Params(this);
  }
}

export class ReleasedToSlicer__Params {
  _event: ReleasedToSlicer;

  constructor(event: ReleasedToSlicer) {
    this._event = event;
  }

  get slicerId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get ethToRelease(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ProductsModule__productPriceResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class ProductsModule__validatePurchaseResult {
  value0: BigInt;
  value1: Bytes;

  constructor(value0: BigInt, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }
}

export class ProductsModule extends ethereum.SmartContract {
  static bind(address: Address): ProductsModule {
    return new ProductsModule("ProductsModule", address);
  }

  _getCurrencyPrice(
    currency: Address,
    weiPrice: BigInt,
    twapInterval: i32
  ): BigInt {
    let result = super.call(
      "_getCurrencyPrice",
      "_getCurrencyPrice(address,uint256,int16):(uint256)",
      [
        ethereum.Value.fromAddress(currency),
        ethereum.Value.fromUnsignedBigInt(weiPrice),
        ethereum.Value.fromI32(twapInterval)
      ]
    );

    return result[0].toBigInt();
  }

  try__getCurrencyPrice(
    currency: Address,
    weiPrice: BigInt,
    twapInterval: i32
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_getCurrencyPrice",
      "_getCurrencyPrice(address,uint256,int16):(uint256)",
      [
        ethereum.Value.fromAddress(currency),
        ethereum.Value.fromUnsignedBigInt(weiPrice),
        ethereum.Value.fromI32(twapInterval)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _getPool(currency: Address): Address {
    let result = super.call("_getPool", "_getPool(address):(address)", [
      ethereum.Value.fromAddress(currency)
    ]);

    return result[0].toAddress();
  }

  try__getPool(currency: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("_getPool", "_getPool(address):(address)", [
      ethereum.Value.fromAddress(currency)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ethBalance(slicerId: BigInt): BigInt {
    let result = super.call("ethBalance", "ethBalance(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(slicerId)
    ]);

    return result[0].toBigInt();
  }

  try_ethBalance(slicerId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ethBalance", "ethBalance(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(slicerId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  productPrice(
    slicerId: BigInt,
    productId: BigInt,
    currency: Address
  ): ProductsModule__productPriceResult {
    let result = super.call(
      "productPrice",
      "productPrice(uint256,uint32,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(slicerId),
        ethereum.Value.fromUnsignedBigInt(productId),
        ethereum.Value.fromAddress(currency)
      ]
    );

    return new ProductsModule__productPriceResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_productPrice(
    slicerId: BigInt,
    productId: BigInt,
    currency: Address
  ): ethereum.CallResult<ProductsModule__productPriceResult> {
    let result = super.tryCall(
      "productPrice",
      "productPrice(uint256,uint32,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(slicerId),
        ethereum.Value.fromUnsignedBigInt(productId),
        ethereum.Value.fromAddress(currency)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ProductsModule__productPriceResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  validatePurchase(
    slicerId: BigInt,
    productId: BigInt
  ): ProductsModule__validatePurchaseResult {
    let result = super.call(
      "validatePurchase",
      "validatePurchase(uint256,uint32):(uint256,bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(slicerId),
        ethereum.Value.fromUnsignedBigInt(productId)
      ]
    );

    return new ProductsModule__validatePurchaseResult(
      result[0].toBigInt(),
      result[1].toBytes()
    );
  }

  try_validatePurchase(
    slicerId: BigInt,
    productId: BigInt
  ): ethereum.CallResult<ProductsModule__validatePurchaseResult> {
    let result = super.tryCall(
      "validatePurchase",
      "validatePurchase(uint256,uint32):(uint256,bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(slicerId),
        ethereum.Value.fromUnsignedBigInt(productId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ProductsModule__validatePurchaseResult(
        value[0].toBigInt(),
        value[1].toBytes()
      )
    );
  }

  validatePurchaseUnits(
    account: Address,
    slicerId: BigInt,
    productId: BigInt
  ): BigInt {
    let result = super.call(
      "validatePurchaseUnits",
      "validatePurchaseUnits(address,uint256,uint32):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(slicerId),
        ethereum.Value.fromUnsignedBigInt(productId)
      ]
    );

    return result[0].toBigInt();
  }

  try_validatePurchaseUnits(
    account: Address,
    slicerId: BigInt,
    productId: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "validatePurchaseUnits",
      "validatePurchaseUnits(address,uint256,uint32):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(slicerId),
        ethereum.Value.fromUnsignedBigInt(productId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class _togglePauseCall extends ethereum.Call {
  get inputs(): _togglePauseCall__Inputs {
    return new _togglePauseCall__Inputs(this);
  }

  get outputs(): _togglePauseCall__Outputs {
    return new _togglePauseCall__Outputs(this);
  }
}

export class _togglePauseCall__Inputs {
  _call: _togglePauseCall;

  constructor(call: _togglePauseCall) {
    this._call = call;
  }
}

export class _togglePauseCall__Outputs {
  _call: _togglePauseCall;

  constructor(call: _togglePauseCall) {
    this._call = call;
  }
}

export class AddProductCall extends ethereum.Call {
  get inputs(): AddProductCall__Inputs {
    return new AddProductCall__Inputs(this);
  }

  get outputs(): AddProductCall__Outputs {
    return new AddProductCall__Outputs(this);
  }
}

export class AddProductCall__Inputs {
  _call: AddProductCall;

  constructor(call: AddProductCall) {
    this._call = call;
  }

  get slicerId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get params(): AddProductCallParamsStruct {
    return changetype<AddProductCallParamsStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }

  get externalCall_(): AddProductCallExternalCall_Struct {
    return changetype<AddProductCallExternalCall_Struct>(
      this._call.inputValues[2].value.toTuple()
    );
  }
}

export class AddProductCall__Outputs {
  _call: AddProductCall;

  constructor(call: AddProductCall) {
    this._call = call;
  }
}

export class AddProductCallParamsStruct extends ethereum.Tuple {
  get subSlicerProducts(): Array<AddProductCallParamsSubSlicerProductsStruct> {
    return this[0].toTupleArray<AddProductCallParamsSubSlicerProductsStruct>();
  }

  get currencyPrices(): Array<AddProductCallParamsCurrencyPricesStruct> {
    return this[1].toTupleArray<AddProductCallParamsCurrencyPricesStruct>();
  }

  get data(): Bytes {
    return this[2].toBytes();
  }

  get purchaseData(): Bytes {
    return this[3].toBytes();
  }

  get availableUnits(): BigInt {
    return this[4].toBigInt();
  }

  get isFree(): boolean {
    return this[5].toBoolean();
  }

  get isMultiple(): boolean {
    return this[6].toBoolean();
  }

  get isInfinite(): boolean {
    return this[7].toBoolean();
  }
}

export class AddProductCallParamsSubSlicerProductsStruct extends ethereum.Tuple {
  get subSlicerId(): BigInt {
    return this[0].toBigInt();
  }

  get subProductId(): BigInt {
    return this[1].toBigInt();
  }
}

export class AddProductCallParamsCurrencyPricesStruct extends ethereum.Tuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }

  get dynamicPricing(): boolean {
    return this[1].toBoolean();
  }

  get currency(): Address {
    return this[2].toAddress();
  }
}

export class AddProductCallExternalCall_Struct extends ethereum.Tuple {
  get data(): Bytes {
    return this[0].toBytes();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }

  get externalAddress(): Address {
    return this[2].toAddress();
  }

  get checkFunctionSignature(): Bytes {
    return this[3].toBytes();
  }

  get execFunctionSignature(): Bytes {
    return this[4].toBytes();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class PayProductsCall extends ethereum.Call {
  get inputs(): PayProductsCall__Inputs {
    return new PayProductsCall__Inputs(this);
  }

  get outputs(): PayProductsCall__Outputs {
    return new PayProductsCall__Outputs(this);
  }
}

export class PayProductsCall__Inputs {
  _call: PayProductsCall;

  constructor(call: PayProductsCall) {
    this._call = call;
  }

  get buyer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get purchases(): Array<PayProductsCallPurchasesStruct> {
    return this._call.inputValues[1].value.toTupleArray<
      PayProductsCallPurchasesStruct
    >();
  }
}

export class PayProductsCall__Outputs {
  _call: PayProductsCall;

  constructor(call: PayProductsCall) {
    this._call = call;
  }
}

export class PayProductsCallPurchasesStruct extends ethereum.Tuple {
  get slicerId(): BigInt {
    return this[0].toBigInt();
  }

  get quantity(): BigInt {
    return this[1].toBigInt();
  }

  get currency(): Address {
    return this[2].toAddress();
  }

  get productId(): BigInt {
    return this[3].toBigInt();
  }
}

export class ReleaseEthToSlicerCall extends ethereum.Call {
  get inputs(): ReleaseEthToSlicerCall__Inputs {
    return new ReleaseEthToSlicerCall__Inputs(this);
  }

  get outputs(): ReleaseEthToSlicerCall__Outputs {
    return new ReleaseEthToSlicerCall__Outputs(this);
  }
}

export class ReleaseEthToSlicerCall__Inputs {
  _call: ReleaseEthToSlicerCall;

  constructor(call: ReleaseEthToSlicerCall) {
    this._call = call;
  }

  get slicerId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ReleaseEthToSlicerCall__Outputs {
  _call: ReleaseEthToSlicerCall;

  constructor(call: ReleaseEthToSlicerCall) {
    this._call = call;
  }
}

export class RemoveProductCall extends ethereum.Call {
  get inputs(): RemoveProductCall__Inputs {
    return new RemoveProductCall__Inputs(this);
  }

  get outputs(): RemoveProductCall__Outputs {
    return new RemoveProductCall__Outputs(this);
  }
}

export class RemoveProductCall__Inputs {
  _call: RemoveProductCall;

  constructor(call: RemoveProductCall) {
    this._call = call;
  }

  get slicerId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get productId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RemoveProductCall__Outputs {
  _call: RemoveProductCall;

  constructor(call: RemoveProductCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetProductInfoCall extends ethereum.Call {
  get inputs(): SetProductInfoCall__Inputs {
    return new SetProductInfoCall__Inputs(this);
  }

  get outputs(): SetProductInfoCall__Outputs {
    return new SetProductInfoCall__Outputs(this);
  }
}

export class SetProductInfoCall__Inputs {
  _call: SetProductInfoCall;

  constructor(call: SetProductInfoCall) {
    this._call = call;
  }

  get slicerId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get productId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get isFree(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }

  get isInfinite(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get newUnits(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get currencyPrices(): Array<SetProductInfoCallCurrencyPricesStruct> {
    return this._call.inputValues[5].value.toTupleArray<
      SetProductInfoCallCurrencyPricesStruct
    >();
  }
}

export class SetProductInfoCall__Outputs {
  _call: SetProductInfoCall;

  constructor(call: SetProductInfoCall) {
    this._call = call;
  }
}

export class SetProductInfoCallCurrencyPricesStruct extends ethereum.Tuple {
  get value(): BigInt {
    return this[0].toBigInt();
  }

  get dynamicPricing(): boolean {
    return this[1].toBoolean();
  }

  get currency(): Address {
    return this[2].toAddress();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}
