import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  ProductsPaid as ProductsPaidEvent,
  TokenSliced as TokenSlicedEvent,
  TriggeredRelease as TriggeredReleaseEvent,
  Unpaused as UnpausedEvent,
} from "../generated/Slice/Slice"
import {
  OwnershipTransferred,
  Paused,
  ProductsPaid,
  TokenSliced,
  TriggeredRelease,
  Unpaused,
} from "../generated/schema"
import { log, Address, Bytes, ByteArray } from "@graphprotocol/graph-ts"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.save()
}

export function handleProductsPaid(event: ProductsPaidEvent): void {
  let entity = new ProductsPaid(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  // let bytesAddresses: Bytes[]
  // let addrArray = event.params.slicerAddresses
  // for (let i = 0; i < addrArray.length; i++) {
  //   bytesAddresses[i] = addrArray[i]
  // }
  entity.slicerAddresses = event.params.slicerAddresses as Array<Bytes>
  entity.productIds = event.params.productIds
  entity.quantities = event.params.quantities
  entity.totalPaid = event.params.totalPaid
  entity.save()
}

export function handleTokenSliced(event: TokenSlicedEvent): void {
  let entity = new TokenSliced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  // let bytesAddresses = event.params.payees as Array<Bytes>
  // let addrArray = event.params.payees
  // for (let i = 0; i < addrArray.length; i++) {
  //   bytesAddresses[i] = ByteArray.fromHexString(addrArray[i].toHexString())
  // }

  entity.slicerAddress = event.params.slicerAddress
  entity.tokenId = event.params.tokenId
  entity.payees = event.params.payees as Array<Bytes>
  entity.shares = event.params.shares
  entity.save()
}

export function handleTriggeredRelease(event: TriggeredReleaseEvent): void {
  let entity = new TriggeredRelease(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.totalReleased = event.params.totalReleased
  entity.slicerPercentage = event.params.slicerPercentage
  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.save()
}
