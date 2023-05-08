'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

type Props = {
    href?: string
    children?: ReactNode
    className?: string
}

export function CustomLink({ href = '', children = null, className = '' }: Props) {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link className={classNames(className, { 'active': isActive })} href={href}>
            {children}
        </Link>
    )
}
