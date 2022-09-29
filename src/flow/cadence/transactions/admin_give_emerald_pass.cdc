import EmeraldPass from "../EmeraldPass.cdc"
 
transaction(recipient: Address) {
  let Admin: &EmeraldPass.Admin
  prepare(admin: AuthAccount) {
    self.Admin = admin.borrow<&EmeraldPass.Admin>(from: /storage/EmeraldPassAdmin)!
  }

  execute {
    let month: UFix64 = 2629743.0
    self.Admin.giveUserTime(user: recipient, time: month)
  }
}