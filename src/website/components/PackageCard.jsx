import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import * as Tabler from "react-icons/tb";

const PackageCard = ({
  tier,
  title,
  salePrice,
  price,
  desc,
  features,
  ...restProps
}) => {
  const generateWhatsAppLink = () => {
    const message = encodeURIComponent(
      `Hello, I am interested in ${tier} ${title} Package. Can you provide more details?`
    );
    const phoneNumber = "923172271459";
    return `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}&type=phone_number&app_absent=0`;
  };

  return (
    <div className="package_card" {...restProps}>
      <div className="package_header">
        <span className="package_tier">{tier} Plan</span>
        <h5 className="package_title">{title}</h5>

        <div className="package_price">
          <span>
            ${parseInt(salePrice).toFixed(2)}
            <p className="sale_price">${parseInt(price).toFixed(2)}</p>
          </span>
        </div>
      </div>
      <div className="package_body">
        <p className="package_discount_rate">
          Try Out {tier} Save{" "}
          <span>
            {(
              ((parseInt(price) - parseInt(salePrice)) / parseInt(price)) *
              100
            ).toFixed(1)}
            %
          </span>
        </p>
        {/*<p className="package_desc">{desc}</p>*/}
        <ul className="package_features">
          {features.map((feature, index) => (
            <li key={index} className={feature.value ? "" : "disabled"}>
              {feature.value ? <Tabler.TbCheck /> : <Tabler.TbX />}
              <p className="package_features_text">{feature.label}</p>
            </li>
          ))}
        </ul>
        <Button to={generateWhatsAppLink()} target="_blank">
          <span>Choose Package</span>
          <Tabler.TbChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
