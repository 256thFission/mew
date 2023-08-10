import Link from 'next/link';
import Image from 'next/image';

function DarkLogo() {
  return (
    <Link href="/">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="inline-block align-middle leading-[1] pl-3">
        <Image
          src="/images/logo/KVUStandardLogo.svg"
          alt="Logo"
          width={150}
          height={150}
        />
      </a>
    </Link>
  );
}

export default DarkLogo;
