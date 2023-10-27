import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (

    <footer className="footer-area md:pt-[220px] pt-[30px]  ">
      <div className="footer-top ">
        <div className="custom-container">
          <div className="lm:grid xl:grid-cols-5 lm:grid-cols-12 xl:gap-x-[30px] gap-[30px] ">
            <div className="max-lg:col-span-12">
              <div className="footer-logo">
                <Image
                  src="/images/logo/footer-logo.jpg"
                  alt="Logo"
                  width={70}
                  height={70}
                />
              </div>
            </div>
            <div className="fixed-lg:col-span-3 fixed-md:col-span-4 fixed-lm:col-span-6 max-sm:pt-[35px]">
              <div className="footer-widget-item">
                <h2 className="title">Contact</h2>
                <ul className="contact-info mt-[25px]">
                  <li>
                    No Address Yet!
                  </li>
                  <li>
                    <Link href="mailto:kernvolunteersunited@gmail.com">
                      <a className="hover:text-black transition-all">
                        kernvolunteersunited@gmail.com
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+0084-661-747-1003">
                      <a className="hover:text-black transition-all">
                        (661)- 747-1003
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="fixed-lg:col-span-3 fixed-md:col-span-3 fixed-lm:col-span-6 max-sm:pt-[30px]">
              <div className="footer-widget-item">
                <h2 className="title">Quick Links</h2>
                <ul className="footer-list mt-[25px]">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/contact">About Us</Link>
                  </li>
                  <li>
                    <Link href="/multiform">Event Sign up</Link>
                  </li>
                  <li>
                    <Link href="/about">Feedback</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="fixed-lg:col-span-3 fixed-md:col-span-3 fixed-lm:col-span-6 max-sm:pt-[30px]">
              {/*<div className="footer-widget-item">*/}
              {/*  <h2 className="title">Help Center</h2>*/}
              {/*  <ul className="footer-list mt-[25px]">*/}
              {/*    <li>*/}
              {/*      <Link href="/about">FAQs</Link>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      <Link href="/about">*/}
              {/*        Terms & Conditions*/}
              {/*      </Link>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      <Link href="/about">*/}
              {/*        Privacy Policy*/}
              {/*      </Link>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      <Link href="/contact">Help</Link>*/}
              {/*    </li>*/}

              {/*  </ul>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="custom-container">
          <div className="inner-container border-[#dfdfdf] border-t md:mt-[95px] mt-[50px] py-9">
            <div className="md:grid md:grid-cols-12 flex flex-col">
              <div className="md:col-span-4 max-lm:order-last max-lm:pt-[10px]">
                <div className="copyright flex-wrap md:justify-start justify-center md:mb-0 mb-[10px]">
                  ©Aug,2022
                  {' '}
                  <span className="mx-1" />
                  Made with © by
                  <div className="text-[#f53400] mx-1" />
                  <Link href="https://www.youtube.com/watch?v=iik25wqIuFo">
                    <a target="_blank">
                      <span> Phillip Lin</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="md:col-span-6">
                <ul className="footer-social-link md:mb-0 mb-[10px]">
                  <li>
                    <Link href="https://twitter.com/">
                      <a>Twitter</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://facebook.com/">
                      <a>Facebook</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://instagram.com/">
                      <a>Instagram</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-2">
                {/*<ul className="footer-language flex md:justify-end justify-center">*/}
                {/*  <li className="mr-8">*/}
                {/*    <Link href="/about">*/}
                {/*      <a className="text-[#30373E] text-[14px] leading-6 uppercase transition-all hover:text-[#263a4f]">*/}
                {/*        Eng*/}
                {/*      </a>*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <Link href="/about">*/}
                {/*      <a className="text-[#30373E] text-[14px] leading-6 uppercase transition-all hover:text-[#263a4f]">*/}
                {/*        Fre*/}
                {/*      </a>*/}
                {/*    </Link>*/}
                {/*  </li>*/}
                {/*</ul>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
