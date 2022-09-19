import EmeraldPass from "../EmeraldPass.cdc"

pub fun main(user: Address): Bool {
  return EmeraldPass.isActive(user: user)
}
 