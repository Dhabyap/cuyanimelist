import Link from "next/link";

const Header = ({judul, href, titleHref}) => {
  return (
    <div className="flex justify-between p-4 items-center">
      <h1 className="text-2xl text-color-primary"> {judul} </h1>
      {
        href && titleHref 
        ?
      <Link href={href} className="text-xl underline hover:text-color-accent text-color-primary">
        {titleHref}
      </Link>
      :
      null
      }
    </div>
  );
};

export default Header;
