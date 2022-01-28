import { ChainId } from '@sushiswap/sdk'
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk'
import { t } from '@lingui/macro'
import { useActiveWeb3React } from '../../../hooks'
import { useCallback } from 'react'
import { useLingui } from '@lingui/react'

const DEFAULT_NETWORK = {
  [ChainId.MAINNET]: 'ethereum',
  [ChainId.FANTOM]: 'fantom',
  [ChainId.HARMONY]: 'harmony',
  [ChainId.BSC]: 'bsc',
  [ChainId.MATIC]: 'matic',
}

const DEFAULT_CRYPTO_CURRENCY = {
  [ChainId.MAINNET]: 'ETH',
  [ChainId.FANTOM]: 'FTM',
  [ChainId.HARMONY]: 'ONE',
  [ChainId.BSC]: 'BNB',
  [ChainId.MATIC]: 'MATIC',
}

export default function Buy() {
  const { account, chainId } = useActiveWeb3React()
  const { i18n } = useLingui()
  const onClick = useCallback(() => {
    if (!(chainId in DEFAULT_NETWORK)) {
      return
    }

    const widget = new RampInstantSDK({
      userAddress: account,
      hostAppName: 'HLY',
      hostLogoUrl: 'https://holygrail.one/hly.png',
      defaultAsset: DEFAULT_CRYPTO_CURRENCY[chainId],
    })

    widget.show()
  }, [account, chainId])

  return (
    <a
      id={`buy-link`}
      onClick={onClick}
      className="p-2 cursor-pointer text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    >
      {i18n._(t`Buy`)}
    </a>
  )
}
