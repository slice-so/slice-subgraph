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

    this.set("address", Value.fromBytes(Bytes.empty()));
    this.set("slices", Value.fromBigInt(BigInt.zero()));
    this.set("minimumSlices", Value.fromBigInt(BigInt.zero()));
    this.set("totalReceived", Value.fromBigInt(BigInt.zero()));
    this.set("isCollectible", Value.fromBoolean(false));
    this.set("creator", Value.fromString(""));
    this.set("createdAtTimestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Slicer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Slicer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
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

  get totalReceived(): BigInt {
    let value = this.get("totalReceived");
    return value!.toBigInt();
  }

  set totalReceived(value: BigInt) {
    this.set("totalReceived", Value.fromBigInt(value));
  }

  get isCollectible(): boolean {
    let value = this.get("isCollectible");
    return value!.toBoolean();
  }

  set isCollectible(value: boolean) {
    this.set("isCollectible", Value.fromBoolean(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
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

  get childrenSlicers(): Array<string> | null {
    let value = this.get("childrenSlicers");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set childrenSlicers(value: Array<string> | null) {
    if (!value) {
      this.unset("childrenSlicers");
    } else {
      this.set("childrenSlicers", Value.fromStringArray(<Array<string>>value));
    }
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get TokensReceived(): Array<string> | null {
    let value = this.get("TokensReceived");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set TokensReceived(value: Array<string> | null) {
    if (!value) {
      this.unset("TokensReceived");
    } else {
      this.set("TokensReceived", Value.fromStringArray(<Array<string>>value));
    }
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
        `Entities of type Payee must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
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

  get slc(): BigInt | null {
    let value = this.get("slc");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set slc(value: BigInt | null) {
    if (!value) {
      this.unset("slc");
    } else {
      this.set("slc", Value.fromBigInt(<BigInt>value));
    }
  }

  get slicers(): Array<string> {
    let value = this.get("slicers");
    return value!.toStringArray();
  }

  set slicers(value: Array<string>) {
    this.set("slicers", Value.fromStringArray(value));
  }

  get created(): Array<string> {
    let value = this.get("created");
    return value!.toStringArray();
  }

  set created(value: Array<string>) {
    this.set("created", Value.fromStringArray(value));
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
        `Entities of type PayeeSlicer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
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

  get released(): BigInt | null {
    let value = this.get("released");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set released(value: BigInt | null) {
    if (!value) {
      this.unset("released");
    } else {
      this.set("released", Value.fromBigInt(<BigInt>value));
    }
  }

  get totalPaid(): BigInt | null {
    let value = this.get("totalPaid");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalPaid(value: BigInt | null) {
    if (!value) {
      this.unset("totalPaid");
    } else {
      this.set("totalPaid", Value.fromBigInt(<BigInt>value));
    }
  }

  get totalPaidProducts(): BigInt | null {
    let value = this.get("totalPaidProducts");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalPaidProducts(value: BigInt | null) {
    if (!value) {
      this.unset("totalPaidProducts");
    } else {
      this.set("totalPaidProducts", Value.fromBigInt(<BigInt>value));
    }
  }

  get purchases(): Array<string> {
    let value = this.get("purchases");
    return value!.toStringArray();
  }

  set purchases(value: Array<string>) {
    this.set("purchases", Value.fromStringArray(value));
  }
}

export class Product extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("slicer", Value.fromString(""));
    this.set("categoryIndex", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("isUSD", Value.fromBoolean(false));
    this.set("isInfinite", Value.fromBoolean(false));
    this.set("isMultiple", Value.fromBoolean(false));
    this.set("availableUnits", Value.fromBigInt(BigInt.zero()));
    this.set("creator", Value.fromBytes(Bytes.empty()));
    this.set("data", Value.fromBytes(Bytes.empty()));
    this.set("totalPurchases", Value.fromBigInt(BigInt.zero()));
    this.set("subProducts", Value.fromStringArray(new Array(0)));
    this.set("createdAtTimestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Product entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Product must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
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

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get isUSD(): boolean {
    let value = this.get("isUSD");
    return value!.toBoolean();
  }

  set isUSD(value: boolean) {
    this.set("isUSD", Value.fromBoolean(value));
  }

  get isInfinite(): boolean {
    let value = this.get("isInfinite");
    return value!.toBoolean();
  }

  set isInfinite(value: boolean) {
    this.set("isInfinite", Value.fromBoolean(value));
  }

  get isMultiple(): boolean {
    let value = this.get("isMultiple");
    return value!.toBoolean();
  }

  set isMultiple(value: boolean) {
    this.set("isMultiple", Value.fromBoolean(value));
  }

  get availableUnits(): BigInt {
    let value = this.get("availableUnits");
    return value!.toBigInt();
  }

  set availableUnits(value: BigInt) {
    this.set("availableUnits", Value.fromBigInt(value));
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

  get purchases(): Array<string> {
    let value = this.get("purchases");
    return value!.toStringArray();
  }

  set purchases(value: Array<string>) {
    this.set("purchases", Value.fromStringArray(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }
}

export class ProductPurchase extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("product", Value.fromString(""));
    this.set("buyerSlicer", Value.fromString(""));
    this.set("buyer", Value.fromString(""));
    this.set("quantity", Value.fromBigInt(BigInt.zero()));
    this.set("lastPurchasedAtTimestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ProductPurchase entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ProductPurchase must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
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

  get lastPurchasedAtTimestamp(): BigInt {
    let value = this.get("lastPurchasedAtTimestamp");
    return value!.toBigInt();
  }

  set lastPurchasedAtTimestamp(value: BigInt) {
    this.set("lastPurchasedAtTimestamp", Value.fromBigInt(value));
  }
}

export class TokenReceived extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("slicer", Value.fromString(""));
    this.set("contract", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("quantity", Value.fromBigInt(BigInt.zero()));
    this.set("isERC721", Value.fromBoolean(false));
    this.set("lastReceivedAtTimestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenReceived entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenReceived must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenReceived", id.toString(), this);
    }
  }

  static load(id: string): TokenReceived | null {
    return changetype<TokenReceived | null>(store.get("TokenReceived", id));
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

  get quantity(): BigInt {
    let value = this.get("quantity");
    return value!.toBigInt();
  }

  set quantity(value: BigInt) {
    this.set("quantity", Value.fromBigInt(value));
  }

  get isERC721(): boolean {
    let value = this.get("isERC721");
    return value!.toBoolean();
  }

  set isERC721(value: boolean) {
    this.set("isERC721", Value.fromBoolean(value));
  }

  get lastReceivedAtTimestamp(): BigInt {
    let value = this.get("lastReceivedAtTimestamp");
    return value!.toBigInt();
  }

  set lastReceivedAtTimestamp(value: BigInt) {
    this.set("lastReceivedAtTimestamp", Value.fromBigInt(value));
  }
}
