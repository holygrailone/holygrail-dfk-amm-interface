import { ChainId, Currency, Percent } from '@sushiswap/sdk'
import React, { FC, useState } from 'react'

import Gas from '../../components/Gas'
import MyOrders from '../exchange-v1/limit-order/MyOrders'
import NavLink from '../../components/NavLink'
import Settings from '../../components/Settings'
import { currencyId } from '../../functions'
import { t } from '@lingui/macro'
import { useActiveWeb3React } from '../../hooks'
import { useLingui } from '@lingui/react'
import { useRouter } from 'next/router'

const getQuery = (input, output) => {
  if (!input && !output) return

  if (input && !output) {
    return { inputCurrency: input.address || 'ONE' }
  } else if (input && output) {
    return { inputCurrency: input.address, outputCurrency: output.address }
  }
}

interface ExchangeHeaderProps {
  input?: Currency
  output?: Currency
  allowedSlippage?: Percent
}

const ExchangeHeader: FC<ExchangeHeaderProps> = ({ input, output, allowedSlippage }) => {
  const { i18n } = useLingui()
  const { chainId } = useActiveWeb3React()
  const router = useRouter()
  const [animateWallet, setAnimateWallet] = useState(false)
  const isRemove = router.asPath.startsWith('/remove')
  const isLimitOrder = router.asPath.startsWith('/limit-order')

  return (
    <div className="flex items-center justify-between mb-4 space-x-3">
      <div className="grid grid-cols-2 rounded p-3px bg-dark-800 h-[46px]">
        <NavLink
          activeClassName="font-bold border rounded text-high-emphesis border-dark-800 bg-gradient-to-r bg-yellow hover:from-red hover:to-yellow"
          href={{
            pathname: '/swap',
            query: getQuery(input, output),
          }}
        >
          <a className="flex items-center justify-center px-4 text-base font-medium text-center rounded-md text-secondary hover:text-high-emphesis ">
            {i18n._(t`Swap`)}
          </a>
        </NavLink>
        {/* <NavLink
          activeClassName="font-bold border rounded text-high-emphesis border-dark-800 bg-gradient-to-r from-opaque-red to-opaque-yellow hover:from-blue hover:to-pink"
          href={{
            pathname: '/limit-order',
            query: getQuery(input, output),
          }}
        >
          <a className="flex items-center justify-center px-4 text-base font-medium text-center rounded-md text-secondary hover:text-high-emphesis">
            {i18n._(t`Limit`)}
          </a>
        </NavLink> */}
        <NavLink
          activeClassName="font-bold border rounded text-high-emphesis border-dark-800 bg-gradient-to-r bg-yellow hover:from-red hover:to-yellow"
          href={`/${!isRemove ? 'add' : 'remove'}${input ? `/${currencyId(input)}` : ''}${
            output ? `/${currencyId(output)}` : ''
          }`}
        >
          <a className="flex items-center justify-center px-4 text-base font-medium text-center rounded-md text-secondary hover:text-high-emphesis">
            {i18n._(t`Liquidity`)}
          </a>
        </NavLink>
      </div>
      <div className="flex items-center">
        <div className="grid grid-flow-col gap-1">
          {isLimitOrder && (
            <div className="items-center h-full w-full cursor-pointer hover:bg-dark-800 rounded px-3 py-1.5">
              <MyOrders />
            </div>
          )}
          <div className="relative flex items-center w-full h-full rounded hover:bg-dark-800">
            <Settings placeholderSlippage={allowedSlippage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExchangeHeader
