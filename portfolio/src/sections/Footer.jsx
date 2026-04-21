import SocialLinks from "../components/SocialLinks";


const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between  pb-3 text-sm text-neutral-400 c-space">

      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Marketing Firm z branży Meblarskiej </p>
      </div>
      <div>
        <SocialLinks showTitle={false} iconSize={20} />
      </div>
      <p>© 2026 WSZELKIE PRAWA ZASTRZEŻONE POMEBLOWANI</p>
    </section>
  );
};

export default Footer;
