import { BrowserProvider } from 'ethers';
import { SiweMessage } from 'siwe';

console.log(SiweMessage);

const domain = window.location.host;
console.log(domain);
const origin = window.location.origin;
console.log(origin);
const provider = new BrowserProvider(window.ethereum);

const BACKEND_ADDR = "http://localhost:3000";

async function createSiweMessage(address, statement) {
    const res = await fetch(`${BACKEND_ADDR}/nonce`, {
        credentials: 'include',
    });
    
    const message = new SiweMessage({
        domain,
        address,
        statement,
        uri: origin,
        version: '1',
        chainId: '1',
        nonce: await res.text(),
        expirationTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    });
    console.log(message);
    return message.prepareMessage();
}

function connectWallet() {
    provider.send('eth_requestAccounts', [])
        .catch(() => console.log('user rejected request'));
}

async function signInWithEthereum() {
    const signer = await provider.getSigner();

    const message = await createSiweMessage(
        await signer.getAddress(),
        'Sign in with Ethereum to the app.'
    );
    const signature = await signer.signMessage(message);

    const res = await fetch(`${BACKEND_ADDR}/verify`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, signature }),
        credentials: 'include'
    });
    console.log(await res.text());
}


async function getInformation() {
    const res = await fetch(`${BACKEND_ADDR}/personal_information`, {
        credentials: 'include',
    });
    const data =await res.text();
     // Assuming format "You are authenticated and your address is: 0x123..."
    const FirstMessage = data.split(": ")[0];
    const address = data.split(": ")[1];
    
   console.log(address , FirstMessage);
    return { FirstMessage, address };
    
   
}

async function updateInfo() {
    const { FirstMessage , address} = await getInformation();
    console.log("this is coming",address, FirstMessage);
    infodetail.textContent = FirstMessage;
    console.log(infodetail.textContent);
    addressElement.textContent = address;
    console.log(addressElement.textContent);

}

const connectWalletBtn = document.getElementById('connectWalletBtn');
const siweBtn = document.getElementById('siweBtn');
const infoBtn = document.getElementById('infoBtn');
const addressElement = document.getElementById('addressId');
const infodetail = document.getElementById('info');
connectWalletBtn.onclick = connectWallet;
siweBtn.onclick = signInWithEthereum;
infoBtn.onclick = updateInfo;
