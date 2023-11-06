import Link from "next/link"

export default function Navbar() {
    return (
        <ul className="flex justify-evenly text-2xl font-bold">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/api/auth/signin">Sign In</Link></li>
            <li><Link href="/api/auth/signout">Sign Out</Link></li>
            <li><Link href="/server">Server</Link></li>
            <li><Link href="/client">Client</Link></li>
            <li><Link href="/extra">Extra</Link></li>
        </ul>
    )
}