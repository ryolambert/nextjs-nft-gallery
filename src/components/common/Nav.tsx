import Link from 'next/link';

import Logo from './Logo';

const Nav: React.FC = () => {
  return (
    <nav className='fixed inset-x-0 top-0 z-40 my-0 flex h-20 w-full items-center justify-between bg-gradient-to-r from-zinc-900/50 to-black/50 px-4 shadow backdrop-blur'>
      <div className='w-full justify-between px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex w-full items-center justify-between'>
            <div className='flex shrink-0 items-center'>
              <Link href='/'>
                <Logo className='block h-12 w-auto' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
