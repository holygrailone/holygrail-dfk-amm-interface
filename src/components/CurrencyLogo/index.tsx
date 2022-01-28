import { ChainId, Currency, WNATIVE } from '@sushiswap/sdk'
import React, { FunctionComponent, useMemo } from 'react'

import Logo from '../Logo'
import { WrappedTokenInfo } from '../../state/lists/wrappedTokenInfo'
import useHttpLocations from '../../hooks/useHttpLocations'

const BLOCKCHAIN = {
  [ChainId.MAINNET]: 'ethereum',
  [ChainId.BSC]: 'binanace',
  [ChainId.CELO]: 'celo',
  [ChainId.FANTOM]: 'fantom',
  [ChainId.HARMONY]: 'harmony',
  [ChainId.MATIC]: 'polygon',
  [ChainId.XDAI]: 'xdai',
  // [ChainId.OKEX]: 'okex',
}

function getCurrencySymbol(currency) {
  if (currency.symbol === 'WBTC') {
    return 'btc'
  }
  if (currency.symbol === 'WETH') {
    return 'eth'
  }
  if (currency.symbol === 'WONE') {
    return 'one'
  }
  return currency.symbol.toLowerCase()
}

export function getCurrencyLogoUrls(currency) {
  const urls = []

  if (currency.symbol === 'HLY') {
    urls.push(`https://holygrail.one/hly.png`)
  } else {
    urls.push(`https://raw.githubusercontent.com/sushiswap/icons/master/token/${getCurrencySymbol(currency)}.jpg`)
    if (currency.chainId in BLOCKCHAIN) {
      urls.push(
        `https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/${BLOCKCHAIN[currency.chainId]}/assets/${
          currency.address
        }/logo.png`
      )
      urls.push(
        `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${
          BLOCKCHAIN[currency.chainId]
        }/assets/${currency.address}/logo.png`
      )
    }
  }

  return urls
}

const AvalancheLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/avax.jpg'
const BinanceCoinLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/bnb.jpg'
const EthereumLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg'
const FantomLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/ftm.jpg'
const HarmonyLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/one.jpg'
const HecoLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/heco.jpg'
const MaticLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg'
const MoonbeamLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg'
const OKExLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/okt.jpg'
const xDaiLogo =
  'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/xdai/assets/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d/logo.png'
const CeloLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/celo.jpg'
const PalmLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/palm.jpg'
const MovrLogo = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/movr.jpg'

const LOGO: { readonly [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: EthereumLogo,
  [ChainId.FANTOM]: FantomLogo,
  [ChainId.FANTOM_TESTNET]: FantomLogo,
  [ChainId.MATIC]: MaticLogo,
  [ChainId.MATIC_TESTNET]: MaticLogo,
  [ChainId.XDAI]: xDaiLogo,
  [ChainId.BSC]: BinanceCoinLogo,
  [ChainId.BSC_TESTNET]: BinanceCoinLogo,
  [ChainId.MOONBEAM_TESTNET]: MoonbeamLogo,
  [ChainId.AVALANCHE]: AvalancheLogo,
  [ChainId.AVALANCHE_TESTNET]: AvalancheLogo,
  [ChainId.HECO]: HecoLogo,
  [ChainId.HECO_TESTNET]: HecoLogo,
  [ChainId.HARMONY]: HarmonyLogo,
  [ChainId.HARMONY_TESTNET]: HarmonyLogo,
  [ChainId.OKEX]: OKExLogo,
  [ChainId.OKEX_TESTNET]: OKExLogo,
  [ChainId.ARBITRUM]: EthereumLogo,
  [ChainId.ARBITRUM_TESTNET]: EthereumLogo,
  [ChainId.CELO]: CeloLogo,
  [ChainId.PALM]: PalmLogo,
  [ChainId.PALM_TESTNET]: PalmLogo,
  [ChainId.MOONRIVER]: MovrLogo,
}

interface CurrencyLogoProps {
  currency?: Currency
  size?: string | number
  style?: React.CSSProperties
  className?: string
  squared?: boolean
}

const unknown = 'https://raw.githubusercontent.com/sushiswap/icons/master/token/unknown.png'

const onelogo = 'https://beta.defikingdoms.com/static/media/harmony-logo.3e8bb7c0.png'

const wonelogo = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FWONE.png?alt=media'

const jewelogo = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FJEWEL.png?alt=media'

const busdlogo = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FBUSD.png?alt=media'

const hlylogo = 'https://holygrail.one/hly.png'

const viperlogo = 'https://dvwecb5klcqus.cloudfront.net/venomswap/logos/venomswap-128x128.png'

const xyalogo = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FXYA.png?alt=media'

const ustlogo = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FUST.png?alt=media'

const lunalogo = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FLUNA.png?alt=media'

const mislogo = 'https://user-images.githubusercontent.com/90807212/136670698-9295534d-504a-4c00-96b6-10b7cc6eac19.png'

const avaxlogo = 'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=014'

const yfilogo = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2F1YFI.png?alt=media'

const dslalogo = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2F1DSLA.png?alt=media'

const superbirdlogo = 'https://superbid.io/static/assets/tokenomics/superbid_logo.svg'

const unilogo = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2F1UNI.png?alt=media'

const babyjew =
  'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FBABYJEWEL.png?alt=media'

const sushilogo =
  'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2F1SUSHI.png?alt=media'

const bscbnb = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FBNB.png?alt=media'

const bsccake = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FbscCAKE.png?alt=media'

const bscmatic =
  'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FbscMATIC.png?alt=media'

const coink = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FCOINK.png?alt=media'

const bscwisb = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FbscWISB.png?alt=media'

const cosmic = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FCOSMIC.png?alt=media'

const fox = 'https://cdn.discordapp.com/attachments/886494799320997889/887094958358687754/fox.png'

const wise = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2F1WISE.png?alt=media'

const lumen =
  'https://firebasestorage.googleapis.com/v0/b/tranquility-city.appspot.com/o/LUMEN.png?alt=media&token=a5d40e99-b1f0-4807-a4f9-cb13d4a89d90'

const oswap = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FOSWAP.png?alt=media'

const matic = 'https://cryptologos.cc/logos/polygon-matic-logo.png?v=014'

const kuro = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FKURO.png?alt=media'

const rain = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2FRAIN.png?alt=media'

const snxlogo = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2F1SNX.png?alt=media'

const inchlogo = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2F11INCH.png?alt=media'

const aavelogo = 'https://firebasestorage.googleapis.com/v0/b/defi-kingdoms.appspot.com/o/tokens%2F1AAVE.png?alt=media'

const ftmlogo = 'https://cloudflare-ipfs.com/ipfs/QmRJgxRqXUpHeskg48qeehUK97FzCAY7espZhTAVdrh9B9'

const usdclogo = 'https://cloudflare-ipfs.com/ipfs/QmYD5pwxPxBHT7pubcMGsw6XEPNS9Q62YGE4sK2XqFoqPR'

const usdtlogo = 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png'

const dailogo = 'https://assets.spookyswap.finance/tokens/DAI.png'

const crvlogo = 'https://assets.spookyswap.finance/tokens/CRV.png'

const wbtclogo = 'https://assets.spookyswap.finance/tokens/wBTC.png'

const wethlogo = 'https://assets.spookyswap.finance/tokens/wETH.png'

const linklogo = 'https://cloudflare-ipfs.com/ipfs/QmUdtBEt4zaex8NYA5St9iSdnq6JKtJw2ArHpyr49W4XuL'

const CurrencyLogo: FunctionComponent<CurrencyLogoProps> = ({
  currency,
  size = '24px',
  style,
  className = '',
  ...rest
}) => {
  const uriLocations = useHttpLocations(
    currency instanceof WrappedTokenInfo ? currency.logoURI || currency.tokenInfo.logoURI : undefined
  )

  const srcs = useMemo(() => {
    if (!currency) {
      return [unknown]
    }

    if (currency.isNative || currency.equals(WNATIVE[currency.chainId])) {
      return [LOGO[currency.chainId], unknown]
    }

    if (currency.isToken) {
      const defaultUrls = [...getCurrencyLogoUrls(currency)]
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, ...defaultUrls, unknown]
      }
      return defaultUrls
    }
  }, [currency, uriLocations])

  if (currency.symbol === 'ONE') {
    return <img src={onelogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'WONE') {
    return <img src={wonelogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'HLY') {
    return <img src={hlylogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'JEWEL') {
    return <img src={jewelogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'VIPER') {
    return <img src={viperlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'XYA') {
    return <img src={xyalogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'MIS') {
    return <img src={mislogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === '11INCH') {
    return <img src={inchlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === '1AAVE') {
    return <img src={aavelogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === '1WISE') {
    return <img src={wise} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === '1DSLA') {
    return <img src={dslalogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === '1SNX') {
    return <img src={snxlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === '1SUPERBID') {
    return <img src={superbirdlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === '1UNI') {
    return <img src={unilogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === '1YFI') {
    return <img src={yfilogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'WMATIC') {
    return <img src={matic} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === '1SUSHI') {
    return <img src={sushilogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'BABYJEWEL') {
    return <img src={babyjew} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'bscBNB') {
    return <img src={bscbnb} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'bscBUSD') {
    return <img src={busdlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'BUSD') {
    return <img src={busdlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'bscCAKE') {
    return <img src={bsccake} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'bscMatic') {
    return <img src={bscmatic} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'bscWISB') {
    return <img src={bscwisb} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'COINK') {
    return <img src={coink} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'COSMIC') {
    return <img src={cosmic} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'FOX') {
    return <img src={fox} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'KURO') {
    return <img src={kuro} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'LUMEN') {
    return <img src={lumen} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'oSWAP') {
    return <img src={oswap} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'RAIN') {
    return <img src={rain} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'UST') {
    return <img src={ustlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'LUNA') {
    return <img src={lunalogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'AVAX') {
    return <img src={avaxlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'FTM') {
    return <img src={ftmlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'USDC') {
    return <img src={usdclogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === '1USDC') {
    return <img src={usdclogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'USDT') {
    return <img src={usdtlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === '1USDT') {
    return <img src={usdtlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'LINK') {
    return <img src={linklogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'CRV') {
    return <img src={crvlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'DAI') {
    return <img src={dailogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === '1DAI') {
    return <img src={dailogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'WBTC') {
    return <img src={wbtclogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === '1WBTC') {
    return <img src={wbtclogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === 'WETH') {
    return <img src={wethlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  if (currency.symbol === '1ETH') {
    return <img src={wethlogo} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
  }

  return <Logo srcs={srcs} width={size} height={size} alt={currency?.symbol} className={className} {...rest} />
}

export default CurrencyLogo
