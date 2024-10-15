"use client"

import AssetItem from "@/components/AssetItem"
import Header from "@/components/Header"
import { Token } from "@/types/token"
import { useQuery } from "@tanstack/react-query"

export default function Index() {
    const { isPending, error, data } = useQuery<Token[], Error>({
        queryKey: ["assets"],
        queryFn: async () => {
            const response = await fetch("/home/api")
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }

            return response.json().then((res) => res as Token[])
        },
    })

    if (isPending || !data) return "Loading..."

    if (error) return "An error has occurred: " + error.message

    return (
        <div className='flex flex-col justify-center items-center w-2/5'>
            <Header />

            {data.map((token, index) => {
                return <AssetItem key={index} token={token} />
            })}
        </div>
    )
}
