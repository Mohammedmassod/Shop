const Footer = () => {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  const yearText =
    startYear === currentYear ? startYear : `${startYear} - ${currentYear}`;
  const developer = "محمد مسعود";

  return (
    <footer className="pb-4 text-center">
      <div>
        © {yearText}
        <span className="mx-1">•</span>
        تطوير بواسطة
        <a
          href="http://mohammed.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Website developed by ${developer}`}
          className="pl-1 font-bold hover:underline hover:underline-offset-4"
        >
          {" "}
          {developer}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
