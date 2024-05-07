import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { CONTRACT_ABI } from "./contractABI";

const contractAddress = "0xc71CF1CCf6Da3721016a6950587D5a159B73CD6F";

export const contract = getContract({
    client: client,
    chain: chain,
    address: contractAddress,
    abi: CONTRACT_ABI,
});