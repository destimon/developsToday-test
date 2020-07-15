import Link from 'next/link'
import React, { ReactNode } from 'react';
import { Button } from '@material-ui/core';

interface Props {
    className?: string,
    href: string,
    hrefAs?: string,
    children: ReactNode
}

const ButtonLink: React.FC<Props> = ({ className, href, hrefAs, children }) => (
  <Button>
    <Link href={href} as={hrefAs}>
      <a className={className}>
        {children}
      </a>
    </Link>
  </Button>
)

export default ButtonLink;