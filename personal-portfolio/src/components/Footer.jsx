import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto">
      <h2 className="text-lg font-medium text-center p-4 sm:text-xl">
        © {year} Jose Victor Carpena. All Rights Reserved.
      </h2>
    </footer>
  );
}

export default Footer;
