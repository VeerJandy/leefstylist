import Image from 'next/image'
import Link from 'next/link'

import logoImg from '~/assets/img/LeefstylistLogo.png'
import { Button } from '~/ui/button'

const Header = () => (
  <header className="bg-white/80 fixed z-header w-full backdrop-blur-lg backdrop-saturate-[180%]">
    <nav className="container flex h-16 items-center justify-between border-b border-light">
      <Link href="/" className="h-10">
        <Image src={logoImg} alt="logo" priority quality={100} />
      </Link>
      <Button color="white">Account</Button>
    </nav>
  </header>
)

export default Header
