const Footer = () => {
  return (
    <footer className="py-8 px-8 text-center">
      <p className="text-xs text-muted-foreground font-body letter-spaced">
        © {new Date().getFullYear()} Beppe Stasi
      </p>
    </footer>
  );
};

export default Footer;
