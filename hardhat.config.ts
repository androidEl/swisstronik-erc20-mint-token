import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import dotenv from 'dotenv'
import '@nomicfoundation/hardhat-ethers'
import '@openzeppelin/hardhat-upgrades'

dotenv.config()

const config: HardhatUserConfig = {
  defaultNetwork: 'swisstronik',
  solidity: '0.8.20',
  networks: {
    swisstronik: {
      url: 'https://json-rpc.testnet.swisstronik.com/',
      accounts: [`0xb93832a4f2119373f2eb43e8e748500511cef74330fe15c60e2f75d0ecae7fca`],
    },
  },
}

export default config
