const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-10 lg:px-14 border-t border-border">
      <p className="text-[12px] text-muted-foreground font-body tracking-wider">
        © {new Date().getFullYear()} Beppe Stasi
      </p>
    </footer>
  );
};

export default Footer;
