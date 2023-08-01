import SVG from 'react-inlinesvg';
import { FaDiscord, FaHeadset, FaBug } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';

function Contact() {
  return (
    <div className="wave-container">

      <div className=" flex-wrap items-center ">
        <div className="columns-3 text-secondary items-center max-w-screen-xl mx-auto pt-10 min-h-max ">
          <div className="glassy contact_box">
            <HiOutlineMailOpen size="3em" />
            <h3>Inquiries</h3>
            <body className="mt-4">
              Intrested in working with us?
              Nonprofits, schools, and other organizations can contact us here:
              {' '}
              <br />
              <br/>
              Email us at
              {' '}
              <a href="mailto:kernvolunteersunited@gmail.com" className="underline">KernVolunteersUnited@gmail.com </a>
              {' '}
              <br />
              Call us at
              {' '}
              <a href="tel:661-747-1003" className="underline">(661)-747-1003</a>
            </body>
          </div>
          <div className="  glassy contact_box">
            <FaDiscord size="3em" />
            <h3>Discord</h3>
            <body className="mt-4">
            Stay up to date with our community on Discord!
                {' '}
                <br />
            Student volunteer leaders can register in our server
                {' '}
            <br/>
            <br/>
            <a href="https://discord.gg/2Y5QrQJ" className="underline">Link: https://discord.gg/fT8zpmE4yW</a>

            </body>
          </div>
          <div className="glassy contact_box mt-4">
            <FaHeadset size="3em" />
            <h3>Support</h3>
            <body className="self-start ml-4 mt-4">
              Looking for help with our site?
              {' '}
              <br />

              {' '}
              Experiencing an annoying bug?
              {/*<FaBug />*/}

              {' '}
              <br />
              {' '}
              <br />
              Email an expert at
              {' '}
              <a href="mailto:thephilliplin@gmail.com" className="underline"> BOEING 747 @ gmail. com</a>
            </body>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
