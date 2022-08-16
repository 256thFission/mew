import Image from 'next/image';
import Link from 'next/link';

function About() {
  const subTitle = 'text-[18px] leading-[32px] text-secondary uppercase';
  const title = 'lm:text-[42px] lm:leading-[50px] text-[32px] text-black mb-[35px] lg:max-w-[460px]';
  const desc = 'text-[14px] leading-[25px] text-secondary mb-[80px] lg:max-w-[490px]';
  const aboutImage = 'flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]';
  return (
    <div id="about" className="about-area md:pt-[150px] pt-[50px]">
      <div className="container max-lg:max-w-full fixed-lg:pr-0">
        <div className="lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse">
          <div className="about-content max-md:pt-10">
            <span className={subTitle}>About</span>
            <h2 className={title}>
              Connecting Forward Thinking Students with
              Nonprofits In Need
            </h2>
            <h3 className="text-secondary text-2xl mb-12">
              We know that good design means
              {' '}
              <br />
              {' '}
              good business
            </h3>
            <p className={desc}>
              Blah Blah blop, Loris ipsum or smth, THis is where the text An wrote will probably go
            </p>
            <Link href="/events">
              <a className="boxed-btn text-[18px] leading-[30px]">
                Get started
              </a>
            </Link>
          </div>
          <div className={aboutImage}>
            <Image
              src="/images/about/1.jpg"
              alt="Service Image"
              width={390}
              height={760}
              quality={70}
              layout="fixed"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
