import Link from 'next/link';
import Image from 'next/image';

function DarkLogo() {
  return (
    <Link href="/index.jsx">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="inline-block align-middle leading-[1]">
        <Image
          src="/images/chez.png"
          alt="Logo"
          width={70}
          height={70}
        />
      </a>
    </Link>
  );
}

export default DarkLogo;
