import React from "react"
import Image from "next/image"
import { Token } from "@/types/token"

type Props = {
    token: Token
}

const AssetItem: React.FC<Props> = ({ token }) => {
    return (
        <div className='flex py-2 px-5'>
            <p>{`#${token.id}`}</p>

            <Image src={""} alt={token.name} />

            <div>
                <p>{token.name}</p>
                <p>{token.max_supply}</p>
            </div>

            <p>{token.quote.USD.price}</p>

            <p>{token.quote.USD.percent_change_1h}</p>
        </div>
    )
}

export default AssetItem
