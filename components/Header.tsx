import React from "react"
import { CiSearch } from "react-icons/ci"

const Header: React.FC = () => {
    return (
        <div className='w-full flex justify-between items-center py-5'>
            <div>
                <h2>AssetTracker</h2>
                <p>Track your favorite crypto assets</p>
            </div>

            <CiSearch />
        </div>
    )
}

export default Header
