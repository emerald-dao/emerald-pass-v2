import EmeraldPass from "../EmeraldPass.cdc"
import FUSD from "../utility/FUSD.cdc"
import FungibleToken from "../utility/FungibleToken.cdc"
import FlowToken from "../utility/FlowToken.cdc"

transaction(time: UFix64, amount: UFix64) {

  let Vault: &EmeraldPass.Vault
  let Payment: @FungibleToken.Vault

  prepare(signer: AuthAccount) {
    if signer.borrow<&EmeraldPass.Vault>(from: EmeraldPass.VaultStoragePath) == nil {
      signer.save(<- EmeraldPass.createVault(), to: EmeraldPass.VaultStoragePath)
      signer.link<&EmeraldPass.Vault{EmeraldPass.VaultPublic}>(EmeraldPass.VaultPublicPath, target: EmeraldPass.VaultStoragePath)
    }

    self.Vault = signer.borrow<&EmeraldPass.Vault>(from: EmeraldPass.VaultStoragePath)!

    // FUSD
    // let fusdVault = signer.borrow<&FUSD.Vault>(from: /storage/fusdVault)!
    // self.Payment <- fusdVault.withdraw(amount: amount)

    // Flow Token
    let flowTokenVault = signer.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)!
    self.Payment <- flowTokenVault.withdraw(amount: amount)
  }

  execute {
    self.Vault.purchase(payment: <- self.Payment, time: time)
  }
}