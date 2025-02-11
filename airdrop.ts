import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js"
import wallet from "./dev-wallet.json"

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection to devnet SOL tokens
const connection = new Connection("https://api.devnet.solana.com");

(async () => {
    try {
        const slot = await connection.getSlot();
        console.log(`Current Slot: ${slot}`);
        // We're going to claim 2 devnet SOL tokens
        console.log(`Attempting 2 SOL airdrop to ${keypair.publicKey}`);
        const txhash = await connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);
        console.log(`Success! Check out your TX here: 
        https://explorer.solana.com/tx/${txhash}?cluster=custom`);
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();