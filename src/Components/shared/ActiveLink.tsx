 
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
}

const ActiveLink = ({ href, children }: ActiveLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive
          ? 'cursor-pointer rounded-full bg-[#1A2312] px-5 py-2 text-xs font-semibold text-[#C2F800] transition'
          : 'cursor-pointer rounded-full px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#1A2312] hover:text-[#C2F800]'
      }
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
 
