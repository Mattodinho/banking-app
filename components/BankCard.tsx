import { formatAmount } from '@/lib/utils'
import { Link } from 'lucide-react'
import React from 'react'

const BankCard =  ({userName, showBalance,account =true}:CreditCardProps) => {
  return (
    <div className='flex flex-col'>
        <link href='/' className="bank-card">
        <div className="bank-card_content">
                <div >
                   <h1 className='text-16 font-semibold text-white'> {account.name || userName}</h1>
                   <p className='font-ibm-plex-serif font-black text-white'>
                    {formatAmount(account.currentBalance)}
                   </p>
                </div>
                <article className='flex flex-col gap-2'>
                    <div className='flex justify-between'></div>
                    <h1>{userName}</h1>

                </article>
        </div>
       </Link>
    </div>
  )
}

export default BankCard