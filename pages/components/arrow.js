import { FaAnglesRight } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

function Arrow() {
  return (
    <Link href="/contact">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="inline-block  justify-self-end  leading-[1] !ml-10 -!mt-50 z-40">
          <div>
              <span className="iconContainer mb-20">
              <FaAnglesRight size="3em" color="#44afa9" className="z-10 icon"/>
              <FaAnglesRight size="3em" color= "#F7824f" className="z-20 icon"/>

              </span>
          </div>
      </a>
    </Link>
  );
}

export default Arrow;
