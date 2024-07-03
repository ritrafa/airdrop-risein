https://explorer.solana.com/tx/5FG2kb3DsAtyMDZV2fJv9wJ9y9z8ASWVDAKww5CDtbdDuE8v1WmhfQkamNfaNv2NhStXPkb3NvE1JwzDVCfrvyiC?cluster=devnet

## Overview

This repository is a self-contained set of commands and sample frontend that interacts with the solana blockchain. IT was created by ritrafa for the RiseIn Bridge to Turbin3 bootcamp.

The following solana programs are used in this repo:
* Solana System Program (11111111111111111111111111111111) - used to transfer SOL in transfer.ts
* resturant-review (6J7kwxnGxCsFdMpDUh7KuJstojR8nrLGxq9ejsqciAyn) - used to write reviews in the frontend example
* wba_prereq (WBA52hW35HZU5R2swG57oehbN2fTr7nNhNDgfjnqUoZ) - used to write github names in enroll.ts

Additionally "@solana/web3.js" is used to generate keys and airdrop on devnet

## Install

Run the following commands to initilize and be able to use all features:

**In root directory:**

    yarn init -y 
    yarn add @types/node typescript @solana/web3.js bs58
    yarn add -D ts-node
    yarn add @coral-xyz/anchor@0.30.0
    yarn add @solana/web3.js@1.91.8  
    yarn add rpc-websockets@7.11.0   

**In frontend directory:**

    npm install
    npm audit fix --force
    npm run dev

## Commands

**In terminal:**

    yarn keygen
This will create a new keypair for you and return its private key into the terminal.

    yarn airdrop
This will request 2 sol on devnet to the dev-wallet (83Pgt1tsVUMS5q3DQwdwFTQsmVDsFXnU7LtPfWCrvQ7f)

    yarn transfer
This will send a small amount of sol from the dev-wallet in the repo to GEYAdA39wM6LC1W555DEbDF2S4QSGM5BJUvyQHwZRSGX

    yarn enroll
This will add a pda to the wba_prereq program adding ritrafa to the registry log

**In frontend (http://localhost:3000 after you run the next dev server):**

    Connect Wallet
    Submit a review
This uses the AddReview function of the resturant-review program 