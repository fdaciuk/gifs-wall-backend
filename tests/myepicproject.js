const anchor = require("@project-serum/anchor")

const main = async () => {
  console.log("🚀 Starting test...")

  anchor.setProvider(anchor.AnchorProvider.env())
  const program = anchor.workspace.Myepicproject
  const tx = await program.rpc.startStuffOff()
  console.log("📝 Your transaction signature", tx)
}

const runMain = async () => {
  try {
    await main()
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

runMain()
