const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-10">
      <p className="text-xs text-muted-foreground font-body">
        © {new Date().getFullYear()} Beppe Stasi
      </p>
    </footer>
  );
};

export default Footer;
