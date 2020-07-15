import Link from 'next/link'
import React, { ReactNode } from 'react';

interface Props {
    className?: string,
    href: string,
    hrefAs?: string,
    children: ReactNode
}

const ButtonLink: React.FC<Props> = ({ className, href, hrefAs, children }) => (
  <Link href={href} as={hrefAs}>
    <a className={className}>
      {children}
    </a>
  </Link>
)

export default ButtonLink;