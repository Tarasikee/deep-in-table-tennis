import { CustomLink } from './CustomLink'
import Image from 'next/image'

export function Navbar() {
    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <Image src="/logo.png" alt="logo" width={40} height={40} />
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
                            </svg>
                        </button>
                    </div>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <CustomLink href="/">
                                Home
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink href="/profile">
                                Profile
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink href="/leaderboard">
                                Leaderboard
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink className="justify-between" href="/matches">
                                Matches
                                <span className="badge">New</span>
                            </CustomLink>
                        </li>
                        <li>
                            <CustomLink href="/logout">
                                Logout
                            </CustomLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
