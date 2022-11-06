import className from 'classnames';
import Image from 'next/image';
import Services from '../components/home-page/services';
import About from '../components/home-page/about';
import { getAllItems } from '../public/lib/items-util';
import PageBanner from '../components/page-banner/index';
import Team from '../components/team/index';
import { VerticalFeatureRow } from '../components/features/VerticalFeatureRow';

function Contact() {
  return (
    <div className="mt-20 flex flex-wrap items-center max-w-screen-lg mx-auto px-1">
      <div className="  w-full sm:w-1/2 text-align-left sm:px-6 ">
        <h3 className="text-3xl text-gray-900 font-semibold">Contact us:</h3>
        <div className="mt-6 text-xl leading-9">
          Email: kernvolunteersunited@gmail.com
          {' '}
          <br />
          Phone number: (661) 567-7923
          <br />
          Discord: https://discord.gg/fT8zpmE4yW
          {' '}
        </div>
          <h2 className="font-semibold">
          If you are a non-profit organization wanting to post events on our platform, contact our email to get a login key!
          </h2>
      </div>

      <div className="  p-2 border-4 border-Tanish">
        <Image src="/images/baloony.jpg" alt="this is a baloon photo" width="400" height="400" />
      </div>
    </div>
  );
}

export default Contact;
