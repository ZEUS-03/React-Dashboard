import React from "react";
import {
  LinkedinOutlined,
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-[#3d7196] py-4 mt-10 text-white">
      <div className="container mx-auto flex justify-around items-center">
        <div className="flex text-xl">
          <a href="#" className="mr-2">
            <LinkedinOutlined />
          </a>
          <a href="#" className="mr-2">
            <InstagramOutlined />
          </a>
          <a href="#" className="mr-2">
            <TwitterOutlined />
          </a>
          <a href="#">
            <FacebookOutlined />
          </a>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <a href="#" className="mb-2 mr-5">
              Contact Us
            </a>
            <a href="#" className="mb-2 mr-5">
              Privacy Policy
            </a>
            <a href="#" className="mb-2 mr-5">
              Terms of Use
            </a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="mb-2 mr-5">
              Help Center
            </a>
            <a href="#" className="mb-2 mr-5">
              About Us
            </a>
            <a href="#" className="mb-2 mr-5">
              FAQs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
