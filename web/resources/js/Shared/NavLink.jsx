import { Link } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

export default function NavLink({ href, active, children, ...props }) {
    const { url } = usePage()
    
    // If active prop is provided, use it; otherwise check current URL
    const isActive = active ?? url === href
    
    const linkStyle = {
        padding: '0.5rem 1rem',
        textDecoration: isActive ? 'underline' : 'none',
        fontWeight: isActive ? 'bold' : 'normal',

    }
    
    return (
        <Link href={href} style={linkStyle} {...props}>
            {children}
        </Link>
    )
}