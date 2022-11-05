import Image from 'next/image';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';

function Team({ teamItems }) {
  const teamMemberImage = 'rounded-lg relative before:hover:absolute before:hover:bg-[#111111] before:hover:w-full before:hover:h-full before:hover:top-0 before:hover:left-0 before:opacity-[0.5] before:duration-500 before:pointer-events-none before:z-[1]';
  return (
    <div className="team-area md:py-155 py-[55px] border-[#dfdfdf] border-b">
      <div className="container">
        <h2 className="lm:text-[42px] text-[32px] lm:leading-[20px] mb-[60px]">
          Our KVU Team
        </h2>
        <div className="grid sm:grid-cols-12 lg:gap-x-[40px] fixed-md:gap-x-[20px] gap-[20px]">
          {teamItems?.map((teamItem, i) => {
            const TwitterIcon = FaIcons[teamItem?.twitterIcon];
            const FacebookIcon = FaIcons[teamItem?.facebookIcon];
            const InstagramIcon = FaIcons[teamItem?.instagramIcon];
            const LinkedinIcon = FaIcons[teamItem?.linkedinIcon];
            return (
              <div
                className="md:col-span-3 fixed-lm:col-span-6 fixed-sm:col-span-6 rounded-lg"
                key={i}
              >
                <div className="team-member overflow-hidden group rounded-lg rounded-b-lg ">
                  <div className={teamMemberImage}>
                    <Link href="/about">
                      <a>
                        <Image
                          src={teamItem?.image}
                          alt={teamItem?.title}
                          width={343}
                          height={409}
                          layout="responsive"
                          objectFit="cover"
                          quality={70}
                          priority
                          className="rounded-lg"
                        />
                      </a>
                    </Link>
                    <div className=" rounded-sm team-social-wrap duration-500 absolute bottom-[15px] right-[-2000px] z-[1] group-hover:right-[20px]">
                      <ul className="team-social flex bg-white p-[15px] bg-opacity-75 rounded-[2px] text-[#999999]">
                        <li className="duration-200 hover:text-black mr-[20px]">
                          <span>{teamItem?.maslow}</span>

                        </li>

                        <li className="duration-300 hover:text-black">
                          <Link href={teamItem?.discordlink}>
                            <a>
                              <LinkedinIcon />
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-member-content pt-[25px] rounded-lg">
                    <h3>

                        <a className="transition-all hover:text-[#caac6b] text-[24px] leading-[31px]">
                          {teamItem?.memberName}
                        </a>
                    </h3>
                    <span className="designation text-secondary leading-6 block text-[14px] mt-[5px]">
                      {teamItem?.designation}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
