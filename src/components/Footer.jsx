import { logo } from "../assets";
import styles from "../style";
import { footerLinks , socialMedia } from "../constants";

const Footer = () => (
  <section>
      <div data-aos="fade-up" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} className="w-[265px] h-[72px] object-contain">
          </img>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make payment more safe and securely.</p>
          </div>
          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerLink) => (
              <div key={footerLink} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                  <h4 className="text-white font-poppins font-semibold text-[20px] mb-3">
                    {footerLink.title}
                  </h4>
                  <ul>
                    {footerLink.links.map((link, index) => (
                      <li key={link.name} className="text-dimWhite font-medium mb-3 text-[18px] font-poppins leading-[30px] hover:text-secondary">{link.name}</li>
                    ))}
                  </ul>
              </div>
            )
          )}
          </div>
        </div>
      </div>
      <div className="w-full mb-10 flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3a3268]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 PayKaro. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>

)


export default Footer