import React from "react";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../utils/accordion.jsx";

const Value = () => {
  const [className,setClassName]=React.useState(null);
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left side */}
        <div className="v-left">
          <div className="img-container">
            <img src="./assets/value.png" alt="value" />
          </div>
        </div>

        {/* Right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best service to you!
            <br />
            We believe a good place to live can make your life better...
          </span>

          {/* Accordion Component */}
          <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
            {data.map(({ icon, heading, detail }, index) =>
           
             (
              <AccordionItem className={`accordionItem ${className}`} key={index} uuid={index}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionbtn">

                  <AccordionItemState>
                    {({expanded})=>expanded? setClassName("expanded"):setClassName("collapsed")}
                  </AccordionItemState>

                    <div className="flexCenter icon">{icon}</div>
                    <span className="primaryText">{heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;

