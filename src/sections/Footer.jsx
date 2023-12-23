import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constans"
import { copyrightSign } from "../assets/icons"

const Footer = () => {
  return (
    <footer className="max-container">

      <section className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">

        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="nike logo" width={150} height={45} />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm '>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((media)=>(
              <div key={media.alt} className="flex justify-center items-center w-10 h-10 bg-white rounded-full">
                <img src={media.src} alt={media.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-16 flex-wrap text-white-400">
            {footerLinks.map(section=>(
                <div key={section.title}>
                  <h4 className="text-white text-2xl font-montserrat leading-normal font-medium">
                    {section.title}</h4>
                  <ul>
                    {section.links.map(link=>(
                      <li key={link.name}
                      className="text-white-400 font-montserrat mt-2 hover:text-slate-gray">
                        <a href={link.link}>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
            ))}
        </div>

      </section>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>

    </footer>
  )
}

export default Footer