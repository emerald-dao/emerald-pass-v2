import EmeraldPass from "../EmeraldPass.cdc"
 
transaction() {

  prepare(signer: AuthAccount) {
    signer.save(<- EmeraldPass.createVault(), to: EmeraldPass.VaultStoragePath)
    signer.link<&EmeraldPass.Vault{EmeraldPass.VaultPublic}>(EmeraldPass.VaultPublicPath, target: EmeraldPass.VaultStoragePath)
  }

  execute {}
  
}