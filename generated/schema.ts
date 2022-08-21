// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Slicer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("slicerVersion", Value.fromBigInt(BigInt.zero()));
    this.set("address", Value.fromBytes(Bytes.empty()));
    this.set("slices", Value.fromBigInt(BigInt.zero()));
    this.set("minimumSlices", Value.fromBigInt(BigInt.zero()));
    this.set("createdAtTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("releaseTimelock", Value.fromBigInt(BigInt.zero()));
    this.set("transferableTimelock", Value.fromBigInt(BigInt.zero()));
    this.set("isImmutable", Value.fromBoolean(false));
    this.set("acceptsAllCurrencies", Value.fromBoolean(false));
    this.set("protocolFee", Value.fromBigInt(BigInt.zero()));
    this.set("royaltyPercentage", Value.fromBigInt(BigInt.zero()));
    this.set("royaltyReceiver", Value.fromString(""));
    this.set("creator", Value.fromString(""));
    this.set("controller", Value.fromString(""));
    this.set("productsModuleBalance", Value.fromBigInt(BigInt.zero()));
    this.set("productsModuleReleased", Value.fromBigInt(BigInt.zero()));
    this.set("childrenSlicers", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Slicer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Slicer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Slicer", id.toString(), this);
    }
  }

  static load(id: string): Slicer | null {
    return changetype<Slicer | null>(store.get("Slicer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get slicerVersion(): BigInt {
    let value = this.get("slicerVersion");
    return value!.toBigInt();
  }

  set slicerVersion(value: BigInt) {
    this.set("slicerVersion", Value.fromBigInt(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get slices(): BigInt {
    let value = this.get("slices");
    return value!.toBigInt();
  }

  set slices(value: BigInt) {
    this.set("slices", Value.fromBigInt(value));
  }

  get minimumSlices(): BigInt {
    let value = this.get("minimumSlices");
    return value!.toBigInt();
  }

  set minimumSlices(value: BigInt) {
    this.set("minimumSlices", Value.fromBigInt(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get releaseTimelock(): BigInt {
    let value = this.get("releaseTimelock");
    return value!.toBigInt();
  }

  set releaseTimelock(value: BigInt) {
    this.set("releaseTimelock", Value.fromBigInt(value));
  }

  get transferableTimelock(): BigInt {
    let value = this.get("transferableTimelock");
    return value!.toBigInt();
  }

  set transferableTimelock(value: BigInt) {
    this.set("transferableTimelock", Value.fromBigInt(value));
  }

  get isImmutable(): boolean {
    let value = this.get("isImmutable");
    return value!.toBoolean();
  }

  set isImmutable(value: boolean) {
    this.set("isImmutable", Value.fromBoolean(value));
  }

  get acceptsAllCurrencies(): boolean {
    let value = this.get("acceptsAllCurrencies");
    return value!.toBoolean();
  }

  set acceptsAllCurrencies(value: boolean) {
    this.set("acceptsAllCurrencies", Value.fromBoolean(value));
  }

  get protocolFee(): BigInt {
    let value = this.get("protocolFee");
    return value!.toBigInt();
  }

  set protocolFee(value: BigInt) {
    this.set("protocolFee", Value.fromBigInt(value));
  }

  get royaltyPercentage(): BigInt {
    let value = this.get("royaltyPercentage");
    return value!.toBigInt();
  }

  set royaltyPercentage(value: BigInt) {
    this.set("royaltyPercentage", Value.fromBigInt(value));
  }

  get royaltyReceiver(): string {
    let value = this.get("royaltyReceiver");
    return value!.toString();
  }

  set royaltyReceiver(value: string) {
    this.set("royaltyReceiver", Value.fromString(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get controller(): string {
    let value = this.get("controller");
    return value!.toString();
  }

  set controller(value: string) {
    this.set("controller", Value.fromString(value));
  }

  get productsModuleBalance(): BigInt {
    let value = this.get("productsModuleBalance");
    return value!.toBigInt();
  }

  set productsModuleBalance(value: BigInt) {
    this.set("productsModuleBalance", Value.fromBigInt(value));
  }

  get productsModuleReleased(): BigInt {
    let value = this.get("productsModuleReleased");
    return value!.toBigInt();
  }

  set productsModuleReleased(value: BigInt) {
    this.set("productsModuleReleased", Value.fromBigInt(value));
  }

  get childrenSlicers(): Array<string> {
    let value = this.get("childrenSlicers");
    return value!.toStringArray();
  }

  set childrenSlicers(value: Array<string>) {
    this.set("childrenSlicers", Value.fromStringArray(value));
  }

  get currencies(): Array<string> {
    let value = this.get("currencies");
    return value!.toStringArray();
  }

  set currencies(value: Array<string>) {
    this.set("currencies", Value.fromStringArray(value));
  }

  get payees(): Array<string> {
    let value = this.get("payees");
    return value!.toStringArray();
  }

  set payees(value: Array<string>) {
    this.set("payees", Value.fromStringArray(value));
  }

  get products(): Array<string> {
    let value = this.get("products");
    return value!.toStringArray();
  }

  set products(value: Array<string>) {
    this.set("products", Value.fromStringArray(value));
  }

  get TokenListings(): Array<string> {
    let value = this.get("TokenListings");
    return value!.toStringArray();
  }

  set TokenListings(value: Array<string>) {
    this.set("TokenListings", Value.fromStringArray(value));
  }
}

export class Payee extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Payee entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Payee entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Payee", id.toString(), this);
    }
  }

  static load(id: string): Payee | null {
    return changetype<Payee | null>(store.get("Payee", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get created(): Array<string> {
    let value = this.get("created");
    return value!.toStringArray();
  }

  set created(value: Array<string>) {
    this.set("created", Value.fromStringArray(value));
  }

  get controlled(): Array<string> {
    let value = this.get("controlled");
    return value!.toStringArray();
  }

  set controlled(value: Array<string>) {
    this.set("controlled", Value.fromStringArray(value));
  }

  get royaltyReceived(): Array<string> {
    let value = this.get("royaltyReceived");
    return value!.toStringArray();
  }

  set royaltyReceived(value: Array<string>) {
    this.set("royaltyReceived", Value.fromStringArray(value));
  }

  get slicers(): Array<string> {
    let value = this.get("slicers");
    return value!.toStringArray();
  }

  set slicers(value: Array<string>) {
    this.set("slicers", Value.fromStringArray(value));
  }

  get currencies(): Array<string> {
    let value = this.get("currencies");
    return value!.toStringArray();
  }

  set currencies(value: Array<string>) {
    this.set("currencies", Value.fromStringArray(value));
  }

  get purchases(): Array<string> {
    let value = this.get("purchases");
    return value!.toStringArray();
  }

  set purchases(value: Array<string>) {
    this.set("purchases", Value.fromStringArray(value));
  }
}

export class Currency extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Currency entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Currency entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Currency", id.toString(), this);
    }
  }

  static load(id: string): Currency | null {
    return changetype<Currency | null>(store.get("Currency", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get slicers(): Array<string> {
    let value = this.get("slicers");
    return value!.toStringArray();
  }

  set slicers(value: Array<string>) {
    this.set("slicers", Value.fromStringArray(value));
  }

  get payees(): Array<string> {
    let value = this.get("payees");
    return value!.toStringArray();
  }

  set payees(value: Array<string>) {
    this.set("payees", Value.fromStringArray(value));
  }

  get products(): Array<string> {
    let value = this.get("products");
    return value!.toStringArray();
  }

  set products(value: Array<string>) {
    this.set("products", Value.fromStringArray(value));
  }
}

export class Product extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("slicer", Value.fromString(""));
    this.set("categoryIndex", Value.fromBigInt(BigInt.zero()));
    this.set("isRemoved", Value.fromBoolean(false));
    this.set("isFree", Value.fromBoolean(false));
    this.set("isInfinite", Value.fromBoolean(false));
    this.set("availableUnits", Value.fromBigInt(BigInt.zero()));
    this.set("maxUnitsPerBuyer", Value.fromBigInt(BigInt.zero()));
    this.set("creator", Value.fromBytes(Bytes.empty()));
    this.set("data", Value.fromBytes(Bytes.empty()));
    this.set("createdAtTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("extAddress", Value.fromBytes(Bytes.empty()));
    this.set("extValue", Value.fromBigInt(BigInt.zero()));
    this.set("extCheckSig", Value.fromBytes(Bytes.empty()));
    this.set("extExecSig", Value.fromBytes(Bytes.empty()));
    this.set("extData", Value.fromBytes(Bytes.empty()));
    this.set("totalPurchases", Value.fromBigInt(BigInt.zero()));
    this.set("subProducts", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Product entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Product entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Product", id.toString(), this);
    }
  }

  static load(id: string): Product | null {
    return changetype<Product | null>(store.get("Product", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get slicer(): string {
    let value = this.get("slicer");
    return value!.toString();
  }

  set slicer(value: string) {
    this.set("slicer", Value.fromString(value));
  }

  get categoryIndex(): BigInt {
    let value = this.get("categoryIndex");
    return value!.toBigInt();
  }

  set categoryIndex(value: BigInt) {
    this.set("categoryIndex", Value.fromBigInt(value));
  }

  get isRemoved(): boolean {
    let value = this.get("isRemoved");
    return value!.toBoolean();
  }

  set isRemoved(value: boolean) {
    this.set("isRemoved", Value.fromBoolean(value));
  }

  get isFree(): boolean {
    let value = this.get("isFree");
    return value!.toBoolean();
  }

  set isFree(value: boolean) {
    this.set("isFree", Value.fromBoolean(value));
  }

  get isInfinite(): boolean {
    let value = this.get("isInfinite");
    return value!.toBoolean();
  }

  set isInfinite(value: boolean) {
    this.set("isInfinite", Value.fromBoolean(value));
  }

  get availableUnits(): BigInt {
    let value = this.get("availableUnits");
    return value!.toBigInt();
  }

  set availableUnits(value: BigInt) {
    this.set("availableUnits", Value.fromBigInt(value));
  }

  get maxUnitsPerBuyer(): BigInt {
    let value = this.get("maxUnitsPerBuyer");
    return value!.toBigInt();
  }

  set maxUnitsPerBuyer(value: BigInt) {
    this.set("maxUnitsPerBuyer", Value.fromBigInt(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value!.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get data(): Bytes {
    let value = this.get("data");
    return value!.toBytes();
  }

  set data(value: Bytes) {
    this.set("data", Value.fromBytes(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get extAddress(): Bytes {
    let value = this.get("extAddress");
    return value!.toBytes();
  }

  set extAddress(value: Bytes) {
    this.set("extAddress", Value.fromBytes(value));
  }

  get extValue(): BigInt {
    let value = this.get("extValue");
    return value!.toBigInt();
  }

  set extValue(value: BigInt) {
    this.set("extValue", Value.fromBigInt(value));
  }

  get extCheckSig(): Bytes {
    let value = this.get("extCheckSig");
    return value!.toBytes();
  }

  set extCheckSig(value: Bytes) {
    this.set("extCheckSig", Value.fromBytes(value));
  }

  get extExecSig(): Bytes {
    let value = this.get("extExecSig");
    return value!.toBytes();
  }

  set extExecSig(value: Bytes) {
    this.set("extExecSig", Value.fromBytes(value));
  }

  get extData(): Bytes {
    let value = this.get("extData");
    return value!.toBytes();
  }

  set extData(value: Bytes) {
    this.set("extData", Value.fromBytes(value));
  }

  get totalPurchases(): BigInt {
    let value = this.get("totalPurchases");
    return value!.toBigInt();
  }

  set totalPurchases(value: BigInt) {
    this.set("totalPurchases", Value.fromBigInt(value));
  }

  get subProducts(): Array<string> {
    let value = this.get("subProducts");
    return value!.toStringArray();
  }

  set subProducts(value: Array<string>) {
    this.set("subProducts", Value.fromStringArray(value));
  }

  get prices(): Array<string> {
    let value = this.get("prices");
    return value!.toStringArray();
  }

  set prices(value: Array<string>) {
    this.set("prices", Value.fromStringArray(value));
  }

  get purchases(): Array<string> {
    let value = this.get("purchases");
    return value!.toStringArray();
  }

  set purchases(value: Array<string>) {
    this.set("purchases", Value.fromStringArray(value));
  }
}

export class PayeeSlicer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("payee", Value.fromString(""));
    this.set("slicer", Value.fromString(""));
    this.set("slices", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PayeeSlicer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PayeeSlicer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PayeeSlicer", id.toString(), this);
    }
  }

  static load(id: string): PayeeSlicer | null {
    return changetype<PayeeSlicer | null>(store.get("PayeeSlicer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get payee(): string {
    let value = this.get("payee");
    return value!.toString();
  }

  set payee(value: string) {
    this.set("payee", Value.fromString(value));
  }

  get slicer(): string {
    let value = this.get("slicer");
    return value!.toString();
  }

  set slicer(value: string) {
    this.set("slicer", Value.fromString(value));
  }

  get slices(): BigInt {
    let value = this.get("slices");
    return value!.toBigInt();
  }

  set slices(value: BigInt) {
    this.set("slices", Value.fromBigInt(value));
  }

  get currencyPayments(): Array<string> {
    let value = this.get("currencyPayments");
    return value!.toStringArray();
  }

  set currencyPayments(value: Array<string>) {
    this.set("currencyPayments", Value.fromStringArray(value));
  }

  get purchases(): Array<string> {
    let value = this.get("purchases");
    return value!.toStringArray();
  }

  set purchases(value: Array<string>) {
    this.set("purchases", Value.fromStringArray(value));
  }
}

export class PayeeCurrency extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("payee", Value.fromString(""));
    this.set("currency", Value.fromString(""));
    this.set("toWithdraw", Value.fromBigInt(BigInt.zero()));
    this.set("toPayToProtocol", Value.fromBigInt(BigInt.zero()));
    this.set("withdrawn", Value.fromBigInt(BigInt.zero()));
    this.set("paidToProtocol", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PayeeCurrency entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PayeeCurrency entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PayeeCurrency", id.toString(), this);
    }
  }

  static load(id: string): PayeeCurrency | null {
    return changetype<PayeeCurrency | null>(store.get("PayeeCurrency", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get payee(): string {
    let value = this.get("payee");
    return value!.toString();
  }

  set payee(value: string) {
    this.set("payee", Value.fromString(value));
  }

  get currency(): string {
    let value = this.get("currency");
    return value!.toString();
  }

  set currency(value: string) {
    this.set("currency", Value.fromString(value));
  }

  get toWithdraw(): BigInt {
    let value = this.get("toWithdraw");
    return value!.toBigInt();
  }

  set toWithdraw(value: BigInt) {
    this.set("toWithdraw", Value.fromBigInt(value));
  }

  get toPayToProtocol(): BigInt {
    let value = this.get("toPayToProtocol");
    return value!.toBigInt();
  }

  set toPayToProtocol(value: BigInt) {
    this.set("toPayToProtocol", Value.fromBigInt(value));
  }

  get withdrawn(): BigInt {
    let value = this.get("withdrawn");
    return value!.toBigInt();
  }

  set withdrawn(value: BigInt) {
    this.set("withdrawn", Value.fromBigInt(value));
  }

  get paidToProtocol(): BigInt {
    let value = this.get("paidToProtocol");
    return value!.toBigInt();
  }

  set paidToProtocol(value: BigInt) {
    this.set("paidToProtocol", Value.fromBigInt(value));
  }

  get slicerPayments(): Array<string> {
    let value = this.get("slicerPayments");
    return value!.toStringArray();
  }

  set slicerPayments(value: Array<string>) {
    this.set("slicerPayments", Value.fromStringArray(value));
  }
}

export class CurrencySlicer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("currency", Value.fromString(""));
    this.set("slicer", Value.fromString(""));
    this.set("released", Value.fromBigInt(BigInt.zero()));
    this.set("releasedToProtocol", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CurrencySlicer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save CurrencySlicer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("CurrencySlicer", id.toString(), this);
    }
  }

  static load(id: string): CurrencySlicer | null {
    return changetype<CurrencySlicer | null>(store.get("CurrencySlicer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get currency(): string {
    let value = this.get("currency");
    return value!.toString();
  }

  set currency(value: string) {
    this.set("currency", Value.fromString(value));
  }

  get slicer(): string {
    let value = this.get("slicer");
    return value!.toString();
  }

  set slicer(value: string) {
    this.set("slicer", Value.fromString(value));
  }

  get released(): BigInt {
    let value = this.get("released");
    return value!.toBigInt();
  }

  set released(value: BigInt) {
    this.set("released", Value.fromBigInt(value));
  }

  get releasedToProtocol(): BigInt {
    let value = this.get("releasedToProtocol");
    return value!.toBigInt();
  }

  set releasedToProtocol(value: BigInt) {
    this.set("releasedToProtocol", Value.fromBigInt(value));
  }

  get payeePayments(): Array<string> {
    let value = this.get("payeePayments");
    return value!.toStringArray();
  }

  set payeePayments(value: Array<string>) {
    this.set("payeePayments", Value.fromStringArray(value));
  }

  get purchases(): Array<string> {
    let value = this.get("purchases");
    return value!.toStringArray();
  }

  set purchases(value: Array<string>) {
    this.set("purchases", Value.fromStringArray(value));
  }
}

export class PayeeSlicerCurrency extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("payeeSlicer", Value.fromString(""));
    this.set("payeeCurrency", Value.fromString(""));
    this.set("currencySlicer", Value.fromString(""));
    this.set("paidForProducts", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PayeeSlicerCurrency entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PayeeSlicerCurrency entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PayeeSlicerCurrency", id.toString(), this);
    }
  }

  static load(id: string): PayeeSlicerCurrency | null {
    return changetype<PayeeSlicerCurrency | null>(
      store.get("PayeeSlicerCurrency", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get payeeSlicer(): string {
    let value = this.get("payeeSlicer");
    return value!.toString();
  }

  set payeeSlicer(value: string) {
    this.set("payeeSlicer", Value.fromString(value));
  }

  get payeeCurrency(): string {
    let value = this.get("payeeCurrency");
    return value!.toString();
  }

  set payeeCurrency(value: string) {
    this.set("payeeCurrency", Value.fromString(value));
  }

  get currencySlicer(): string {
    let value = this.get("currencySlicer");
    return value!.toString();
  }

  set currencySlicer(value: string) {
    this.set("currencySlicer", Value.fromString(value));
  }

  get paidForProducts(): BigInt {
    let value = this.get("paidForProducts");
    return value!.toBigInt();
  }

  set paidForProducts(value: BigInt) {
    this.set("paidForProducts", Value.fromBigInt(value));
  }
}

export class ProductPrices extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("product", Value.fromString(""));
    this.set("currency", Value.fromString(""));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("dynamicPricing", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ProductPrices entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ProductPrices entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ProductPrices", id.toString(), this);
    }
  }

  static load(id: string): ProductPrices | null {
    return changetype<ProductPrices | null>(store.get("ProductPrices", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get product(): string {
    let value = this.get("product");
    return value!.toString();
  }

  set product(value: string) {
    this.set("product", Value.fromString(value));
  }

  get currency(): string {
    let value = this.get("currency");
    return value!.toString();
  }

  set currency(value: string) {
    this.set("currency", Value.fromString(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get dynamicPricing(): boolean {
    let value = this.get("dynamicPricing");
    return value!.toBoolean();
  }

  set dynamicPricing(value: boolean) {
    this.set("dynamicPricing", Value.fromBoolean(value));
  }
}

export class ProductPurchase extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("product", Value.fromString(""));
    this.set("buyerSlicer", Value.fromString(""));
    this.set("currencySlicer", Value.fromString(""));
    this.set("buyer", Value.fromString(""));
    this.set("quantity", Value.fromBigInt(BigInt.zero()));
    this.set("paymentEth", Value.fromBigInt(BigInt.zero()));
    this.set("paymentCurrency", Value.fromBigInt(BigInt.zero()));
    this.set("lastPurchasedAtTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("totalPurchases", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ProductPurchase entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ProductPurchase entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ProductPurchase", id.toString(), this);
    }
  }

  static load(id: string): ProductPurchase | null {
    return changetype<ProductPurchase | null>(store.get("ProductPurchase", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get product(): string {
    let value = this.get("product");
    return value!.toString();
  }

  set product(value: string) {
    this.set("product", Value.fromString(value));
  }

  get buyerSlicer(): string {
    let value = this.get("buyerSlicer");
    return value!.toString();
  }

  set buyerSlicer(value: string) {
    this.set("buyerSlicer", Value.fromString(value));
  }

  get currencySlicer(): string {
    let value = this.get("currencySlicer");
    return value!.toString();
  }

  set currencySlicer(value: string) {
    this.set("currencySlicer", Value.fromString(value));
  }

  get buyer(): string {
    let value = this.get("buyer");
    return value!.toString();
  }

  set buyer(value: string) {
    this.set("buyer", Value.fromString(value));
  }

  get quantity(): BigInt {
    let value = this.get("quantity");
    return value!.toBigInt();
  }

  set quantity(value: BigInt) {
    this.set("quantity", Value.fromBigInt(value));
  }

  get paymentEth(): BigInt {
    let value = this.get("paymentEth");
    return value!.toBigInt();
  }

  set paymentEth(value: BigInt) {
    this.set("paymentEth", Value.fromBigInt(value));
  }

  get paymentCurrency(): BigInt {
    let value = this.get("paymentCurrency");
    return value!.toBigInt();
  }

  set paymentCurrency(value: BigInt) {
    this.set("paymentCurrency", Value.fromBigInt(value));
  }

  get lastPurchasedAtTimestamp(): BigInt {
    let value = this.get("lastPurchasedAtTimestamp");
    return value!.toBigInt();
  }

  set lastPurchasedAtTimestamp(value: BigInt) {
    this.set("lastPurchasedAtTimestamp", Value.fromBigInt(value));
  }

  get totalPurchases(): BigInt {
    let value = this.get("totalPurchases");
    return value!.toBigInt();
  }

  set totalPurchases(value: BigInt) {
    this.set("totalPurchases", Value.fromBigInt(value));
  }

  get purchaseData(): Array<string> {
    let value = this.get("purchaseData");
    return value!.toStringArray();
  }

  set purchaseData(value: Array<string>) {
    this.set("purchaseData", Value.fromStringArray(value));
  }
}

export class PurchaseData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("productPurchase", Value.fromString(""));
    this.set("quantity", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PurchaseData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PurchaseData entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PurchaseData", id.toString(), this);
    }
  }

  static load(id: string): PurchaseData | null {
    return changetype<PurchaseData | null>(store.get("PurchaseData", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get productPurchase(): string {
    let value = this.get("productPurchase");
    return value!.toString();
  }

  set productPurchase(value: string) {
    this.set("productPurchase", Value.fromString(value));
  }

  get quantity(): BigInt {
    let value = this.get("quantity");
    return value!.toBigInt();
  }

  set quantity(value: BigInt) {
    this.set("quantity", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class TokenListing extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("slicer", Value.fromString(""));
    this.set("contract", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("isERC721", Value.fromBoolean(false));
    this.set("quantity", Value.fromBigInt(BigInt.zero()));
    this.set("lastEditedAtTimestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenListing entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TokenListing entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TokenListing", id.toString(), this);
    }
  }

  static load(id: string): TokenListing | null {
    return changetype<TokenListing | null>(store.get("TokenListing", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get slicer(): string {
    let value = this.get("slicer");
    return value!.toString();
  }

  set slicer(value: string) {
    this.set("slicer", Value.fromString(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get isERC721(): boolean {
    let value = this.get("isERC721");
    return value!.toBoolean();
  }

  set isERC721(value: boolean) {
    this.set("isERC721", Value.fromBoolean(value));
  }

  get quantity(): BigInt {
    let value = this.get("quantity");
    return value!.toBigInt();
  }

  set quantity(value: BigInt) {
    this.set("quantity", Value.fromBigInt(value));
  }

  get lastEditedAtTimestamp(): BigInt {
    let value = this.get("lastEditedAtTimestamp");
    return value!.toBigInt();
  }

  set lastEditedAtTimestamp(value: BigInt) {
    this.set("lastEditedAtTimestamp", Value.fromBigInt(value));
  }
}
