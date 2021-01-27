import React, { ReactNode } from 'react'
import Head from 'next/head'
import CenteredTabs from './Tab';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="mt-2">
        <CenteredTabs />
      </nav>
    </header>
    { children}
    <footer className="text-right mt-5">
      <hr />
      <span>© 2021 y-moriwake</span>
    </footer>
  </div >
)

export default Layout
