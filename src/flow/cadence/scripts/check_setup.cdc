import EmeraldPass from "../EmeraldPass.cdc"

pub fun main(user: Address): Bool {
  return getAccount(user).getCapability(EmeraldPass.VaultPublicPath)
          .borrow<&EmeraldPass.Vault{EmeraldPass.VaultPublic}>() != nil
}
 