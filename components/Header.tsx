import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

const Header = () => {
  return (
    <header className="py-3 px-4 border-header-bottom border-b">
      <div className="flex justify-between">
        <div>
          <Image src={"/assets/Logo.png"} alt="logo" width={38} height={38} />
        </div>
        <div className="flex space-x-3">
          <div className="p-1 border rounded-xl border-button-secondary">
            <Button>Join Waitlist</Button>
          </div>
          <Image
            src={"/assets/list-1.svg"}
            alt="burger menu"
            width={38}
            height={38}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
