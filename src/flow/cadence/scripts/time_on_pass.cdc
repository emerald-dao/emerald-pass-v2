import EmeraldPass from "../EmeraldPass.cdc"

pub fun main(user: Address): UFix64? {
  return EmeraldPass.getUserVault(user: user)?.endDate
}
 