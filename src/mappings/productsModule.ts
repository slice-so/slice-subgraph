import {
  Slicer as SlicerEntity,
  Payee,
  Product,
  PayeeSlicer,
  ProductPurchase,
  ProductPrices,
  PayeeSlicerCurrency,
  TokenListing
} from "../../generated/schema"
import {
  ProductAdded as ProductAddedEvent,
  ProductInfoChanged as ProductInfoChangedEvent,
  ProductRemoved as ProductRemovedEvent,
  ProductPaid as ProductPaidEvent,
  ReleasedToSlicer as ReleasedToSlicerEvent,
  ERC721ListingChanged as ERC721ListingChangedEvent,
  ERC1155ListingChanged as ERC1155ListingChangedEvent
} from "../../generated/ProductsModule/ProductsModule"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"

export function handleProductAdded(event: ProductAddedEvent): void {
  let slicerId = event.params.slicerId.toHex()
  let productId = event.params.productId.toHex()
  let categoryIndex = event.params.categoryIndex
  let isFree = event.params.isFree
  let isMultiple = event.params.isMultiple
  let isInfinite = event.params.isInfinite
  let availableUnits = event.params.availableUnits
  let creator = event.params.creator
  let data = event.params.data
  let subSlicerProducts = event.params.subSlicerProducts
  let currencyPrices = event.params.currencyPrices
  let externalCall = event.params.externalCall
  let address0 = new Bytes(20) as Address

  let product = new Product(slicerId + "-" + productId)

  product.slicer = slicerId
  product.categoryIndex = categoryIndex
  product.isFree = isFree
  product.isInfinite = isInfinite
  product.isMultiple = isMultiple
  product.availableUnits = availableUnits
  product.creator = creator
  product.data = data
  product.createdAtTimestamp = event.block.timestamp
  if (externalCall.externalAddress != address0) {
    product.extAddress = externalCall.externalAddress
    product.extCheckSig = externalCall.checkFunctionSignature
    product.extExecSig = externalCall.execFunctionSignature
    product.extValue = externalCall.value
    product.extData = externalCall.data
  }

  for (let i = 0; i < subSlicerProducts.length; i++) {
    let subSlicerId = subSlicerProducts[i].subSlicerId.toHex()
    let subProductId = subSlicerProducts[i].subProductId.toHex()
    product.subProducts.push(subSlicerId + "-" + subProductId)
  }

  for (let i = 0; i < currencyPrices.length; i++) {
    let currency = currencyPrices[i].currency.toHexString()
    let productPrice = new ProductPrices(productId + "-" + currency)
    productPrice.product = productId
    productPrice.currency = currency
    productPrice.price = currencyPrices[i].value
    productPrice.dynamicPricing = currencyPrices[i].dynamicPricing
    productPrice.save()
  }

  product.save()
}

export function handleProductInfoChanged(event: ProductInfoChangedEvent): void {
  let slicerId = event.params.slicerId.toHex()
  let productId = event.params.productId.toHex()
  let isFree = event.params.isFree
  let isInfinite = event.params.isInfinite
  let availableUnits = event.params.newUnits
  let currencyPrices = event.params.currencyPrices

  let product = Product.load(slicerId + "-" + productId)!

  product.isFree = isFree
  product.isInfinite = isInfinite
  product.availableUnits = availableUnits

  for (let i = 0; i < currencyPrices.length; i++) {
    let currency = currencyPrices[i].currency.toHexString()
    let productPrice = ProductPrices.load(productId + "-" + currency)
    if (!productPrice) {
      productPrice = new ProductPrices(productId + "-" + currency)
      productPrice.product = productId
      productPrice.currency = currency
    }
    productPrice.price = currencyPrices[i].value
    productPrice.dynamicPricing = currencyPrices[i].dynamicPricing
    productPrice.save()
  }

  product.save()
}

export function handleProductRemoved(event: ProductRemovedEvent): void {
  let slicerId = event.params.slicerId.toHex()
  let productId = event.params.productId.toHex()

  let product = Product.load(slicerId + "-" + productId)!

  product.categoryIndex = BigInt.fromI32(0)
  product.isFree = false
  product.isInfinite = false
  product.isMultiple = false
  product.availableUnits = BigInt.fromI32(0)
  product.data = new Bytes(0)
  product.extAddress = new Bytes(0)
  product.extValue = BigInt.fromI32(0)
  product.extCheckSig = new Bytes(0)
  product.extExecSig = new Bytes(0)
  product.extData = new Bytes(0)
  product.subProducts = []
  product.prices = []
  product.save()
}

export function handleProductPaid(event: ProductPaidEvent): void {
  let slicerId = event.params.slicerId.toHex()
  let productId = event.params.productId.toHex()
  let quantity = event.params.quantity
  let buyerAddress = event.params.buyer.toHexString()
  let currency = event.params.currency.toHexString()
  let paymentEth = event.params.paymentEth
  let paymentCurrency = event.params.paymentCurrency
  let address0 = new Bytes(20).toHexString()

  let product = Product.load(slicerId + "-" + productId)!
  let slicer = SlicerEntity.load(slicerId)!

  slicer.productsModuleBalance = slicer.productsModuleBalance.plus(paymentEth)
  slicer.save()

  product.totalPurchases = product.totalPurchases.plus(quantity)
  if (!product.isInfinite) {
    product.availableUnits = product.availableUnits.minus(quantity)
  }
  product.save()

  let payee = Payee.load(buyerAddress)
  if (!payee) {
    payee = new Payee(buyerAddress)
    payee.save()
  }

  let payeeSlicer = PayeeSlicer.load(buyerAddress + "-" + slicerId)
  if (!payeeSlicer) {
    payeeSlicer = new PayeeSlicer(buyerAddress + "-" + slicerId)
    payeeSlicer.payee = buyerAddress
    payeeSlicer.slicer = slicerId
    payeeSlicer.save()
  }

  if (paymentCurrency != BigInt.fromI32(0)) {
    let payeeSlicerCurrency = PayeeSlicerCurrency.load(
      buyerAddress + "-" + slicerId + "-" + currency
    )
    if (!payeeSlicerCurrency) {
      payeeSlicerCurrency = new PayeeSlicerCurrency(
        buyerAddress + "-" + slicerId + "-" + currency
      )
      payeeSlicerCurrency.payeeSlicer = buyerAddress + "-" + slicerId
      payeeSlicerCurrency.payeeCurrency = buyerAddress + "-" + currency
      payeeSlicerCurrency.currencySlicer = currency + "-" + slicerId
    }
    payeeSlicerCurrency.paidForProducts = payeeSlicerCurrency.paidForProducts.plus(
      paymentCurrency
    )
    payeeSlicerCurrency.save()
  }

  if (paymentEth != BigInt.fromI32(0)) {
    let payeeSlicerCurrency = PayeeSlicerCurrency.load(
      buyerAddress + "-" + slicerId + "-" + address0
    )
    if (!payeeSlicerCurrency) {
      payeeSlicerCurrency = new PayeeSlicerCurrency(
        buyerAddress + "-" + slicerId + "-" + address0
      )
      payeeSlicerCurrency.payeeSlicer = buyerAddress + "-" + slicerId
      payeeSlicerCurrency.payeeCurrency = buyerAddress + "-" + address0
      payeeSlicerCurrency.currencySlicer = address0 + "-" + slicerId
    }
    payeeSlicerCurrency.paidForProducts = payeeSlicerCurrency.paidForProducts.plus(
      paymentEth
    )
    payeeSlicerCurrency.save()
  }

  let pp = ProductPurchase.load(productId + "-" + buyerAddress)
  if (!pp) {
    pp = new ProductPurchase(productId + "-" + buyerAddress)
    pp.product = slicerId + "-" + productId
    pp.buyerSlicer = buyerAddress + "-" + slicerId
    pp.currencySlicer = currency + "-" + slicerId
    pp.buyer = buyerAddress
  }
  pp.quantity = pp.quantity.plus(quantity)
  pp.paymentEth = pp.paymentEth.plus(paymentEth)
  pp.paymentCurrency = pp.paymentCurrency.plus(paymentCurrency)
  pp.lastPurchasedAtTimestamp = event.block.timestamp
  pp.save()
}

export function handleReleasedToSlicer(event: ReleasedToSlicerEvent): void {
  let slicerId = event.params.slicerId.toHex()
  let ethToRelease = event.params.ethToRelease

  let slicer = SlicerEntity.load(slicerId)!

  slicer.productsModuleBalance = BigInt.fromI32(1)
  slicer.productsModuleReleased = slicer.productsModuleReleased.plus(
    ethToRelease
  )
}

export function handleERC721ListingChanged(
  event: ERC721ListingChangedEvent
): void {
  let slicerId = event.params.slicerId.toHex()
  let contract = event.params.contractAddress
  let tokenId = event.params.tokenId
  let isActive = event.params.isActive
  let contractAddress = contract.toHexString()
  let tokenIdHex = tokenId.toHex()

  let tokenListing = TokenListing.load(
    slicerId + "-" + contractAddress + "-" + tokenIdHex
  )
  if (!tokenListing) {
    tokenListing = new TokenListing(
      slicerId + "-" + contractAddress + "-" + tokenIdHex
    )
    tokenListing.slicer = slicerId
    tokenListing.contract = contract
    tokenListing.tokenId = tokenId
    tokenListing.isERC721 = true
  }
  if (isActive) {
    tokenListing.quantity = BigInt.fromI32(1)
  } else {
    tokenListing.quantity = BigInt.fromI32(0)
  }
  tokenListing.lastEditedAtTimestamp = event.block.timestamp

  tokenListing.save()
}

export function handleERC1155ListingChanged(
  event: ERC1155ListingChangedEvent
): void {
  let slicerId = event.params.slicerId.toHex()
  let contract = event.params.contractAddress
  let tokenId = event.params.tokenId
  let currentAmount = event.params.currentAmount
  let contractAddress = contract.toHexString()
  let tokenIdHex = tokenId.toHex()

  let tokenListing = TokenListing.load(
    slicerId + "-" + contractAddress + "-" + tokenIdHex
  )
  if (!tokenListing) {
    tokenListing = new TokenListing(
      slicerId + "-" + contractAddress + "-" + tokenIdHex
    )
    tokenListing.slicer = slicerId
    tokenListing.contract = contract
    tokenListing.tokenId = tokenId
  }
  tokenListing.quantity = currentAmount
  tokenListing.lastEditedAtTimestamp = event.block.timestamp

  tokenListing.save()
}
