import { ANALYTICS_URL } from '../../constants'
import { ChainId } from '@sushiswap/sdk'
import ExternalLink from '../ExternalLink'
import Polling from '../Polling'
import { t } from '@lingui/macro'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import { useLingui } from '@lingui/react'

const Footer = () => {
  const { chainId } = useActiveWeb3React()
  const { i18n } = useLingui()
  return (
    // <footer className="absolute bottom-0 flex items-center justify-between w-screen h-20 p-4 mx-auto text-center text-low-emphesis">
    <footer className="flex-shrink-0 w-full">
      <div className="flex items-center justify-between h-20 px-4">
        {chainId && chainId === ChainId.MATIC && (
          <ExternalLink
            id={`polygon-bridge-link`}
            href="https://wallet.matic.network/bridge/"
            className="text-low-emphesis"
          >
            {i18n._(t`Matic Bridge`)}
          </ExternalLink>
        )}
        {chainId && chainId === ChainId.HARMONY && (
          <ExternalLink
            id={`harmony-bridge-link`}
            href=" https://bridge.harmony.one/tokens"
            className="text-low-emphesis"
          >
            {i18n._(t`Harmony Bridge`)}
          </ExternalLink>
        )}
        {chainId && chainId === ChainId.XDAI && (
          <ExternalLink id={`xdai-bridge-link`} href=" https://omni.xdaichain.com/" className="text-low-emphesis">
            {i18n._(t`xDai Bridge`)}
          </ExternalLink>
        )}

        {chainId && chainId === ChainId.PALM && (
          <ExternalLink id={`palm-bridge-link`} href=" https://app.palm.io/bridge" className="text-low-emphesis">
            {i18n._(t`Palm Bridge`)}
          </ExternalLink>
        )}

        <Polling />
      </div>
    </footer>
  )
}

export default Footer
