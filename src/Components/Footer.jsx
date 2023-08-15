import React from 'react'
import { BsMouse } from "react-icons/bs";

export const Footer = () => {
    return (
        <div id="footer" className="container footer-container">
          <h1>
            That's all{" "}
            <a href="#header">
              <h2>
                <BsMouse /> - scroll up -
              </h2>
            </a>
          </h1>
        </div>
      );
}
