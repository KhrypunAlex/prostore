const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="p-5 text-center">
        {currentYear} {process.env.NEXT_PUBLIC_APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;