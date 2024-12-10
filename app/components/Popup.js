import Image from "next/image";
import Link from "next/link";

export default function Popup({ setIsOpen, isOpen }) {
  return (
    <div
      className={`${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} fixed left-0 top-0 z-[1000] h-screen w-full transition-all duration-500`}
    >
      <div
        onClick={() => setIsOpen(false)}
        className="absolute left-0 top-0 z-[0] h-full w-full bg-[#18042D80]"
      ></div>
      <div className="container flex items-center justify-center">
        <div className="relative z-[1] flex w-5/12 flex-col items-center rounded-[2.5rem] bg-night-purple py-[3rem] lg:w-2/3 md:w-full">
          <Image
            src="/close.svg"
            alt="Close popup"
            width={48}
            height={48}
            className="absolute right-[1.5rem] top-[1.5rem] h-auto w-[3rem] max-w-none cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          <div className="flex w-4/5 flex-col items-center">
            <h2 className="heading-2 mb-[1.5rem] text-center">Info</h2>
            <p className="paragraph mb-[2rem] text-center">
              Welcome to a place where vision meets groove, where perception
              riffs on creativity, and every click takes you deeper into the
              visual show. Each section invites you to explore, question, and
              marvel at the illusions and principles that shape our visual
              world.
            </p>
            <p className="paragraph mb-[2rem] text-center">
              Brought to life by Studio Square43, this site is a labor of love
              for the curious and the creative. We crafted every element to keep
              you swinging through a mix of bold design and dynamic discoveries.
            </p>
            <p className="paragraph mb-[3rem] text-center">
              Got ideas, questions, or just want to say hello? We'd love to hear
              from you. Studio Square43 thrives on collaboration and curiosity,
              so don't be shy—reach out and let's connect. Thanks for stopping
              by!
            </p>
            <Link
              href="https://square43.com"
              target="_blank"
              className="mb-[2.5rem]"
            >
              <Image
                src="/square-logo.svg"
                alt="Logo"
                width={226}
                height={25}
                className="h-auto w-[14.125rem] max-w-none"
              />
            </Link>
            <p className="paragraph mb-[0.5rem] text-center">GET IN TOUCH</p>
            <div className="flex w-full justify-center gap-[1rem]">
              <Link
                href="https://www.instagram.com/square43studio/"
                target="_blank"
                className="relative"
              >
                <Image
                  src="/footer/instagramY.svg"
                  alt="instagram"
                  width={40}
                  height={40}
                  className="h-auto w-[2.5rem] lg:w-[3.429rem]"
                />
                <Image
                  src="/footer/instagram.svg"
                  alt="instagram"
                  width={40}
                  height={40}
                  className="absolute left-0 top-0 h-auto w-[2.5rem] opacity-0 transition duration-500 hover:opacity-100 lg:w-[3.429rem]"
                />
              </Link>
              <Link
                className="relative"
                href="https://www.linkedin.com/company/square43"
                target="_blank"
              >
                <Image
                  src="/footer/linkedinY.svg"
                  alt="linkedin"
                  width={40}
                  height={40}
                  className="h-auto w-[2.5rem] lg:w-[3.429rem]"
                />
                <Image
                  src="/footer/linkedin.svg"
                  alt="instagram"
                  width={40}
                  height={40}
                  className="absolute left-0 top-0 h-auto w-[2.5rem] opacity-0 transition duration-500 hover:opacity-100 lg:w-[3.429rem]"
                />
              </Link>
              <Link
                className="relative"
                href="mailto:studio@square43.com"
                target="_blank"
              >
                <Image
                  src="/footer/mailY.svg"
                  alt="mail"
                  width={40}
                  height={40}
                  className="h-auto w-[2.5rem] lg:w-[3.429rem]"
                />
                <Image
                  src="/footer/mail.svg"
                  alt="instagram"
                  width={40}
                  height={40}
                  className="absolute left-0 top-0 h-auto w-[2.5rem] opacity-0 transition duration-500 hover:opacity-100 lg:w-[3.429rem]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
