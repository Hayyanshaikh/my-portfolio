import * as Tabler from "react-icons/tb";
import useTitle from "../../hooks/useTitle.jsx";
import Checkbox from "../components/Checkbox.jsx";
import Select from "../components/Select.jsx";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../website/components/Input.jsx";
import Button from "../../website/components/Button.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectLoading, selectPrices } from "../../redux/slices/priceSlice.jsx";
import { selectPackages } from "../../redux/slices/packageSlice.jsx";
import { fetchPackages } from "../../redux/actions/packageAction.jsx";
import {
  addPrice,
  fetchPrices,
  updatePrice,
  deletePrice,
} from "../../redux/actions/priceAction.jsx";

const Prices = () => {
  useTitle("All Prices");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const prices = useSelector(selectPrices);
  const packages = useSelector(selectPackages);
  const price = prices.find((price) => price.id === id);
  const [selected, setSelected] = useState(Array(prices.length).fill(false));
  const [selectedAll, setSelectedAll] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    pkgId: "",
    pkgTitle: "",
    price: "",
    salePrice: "",
    features: [],
    tier: "",
  });

  useEffect(() => {
    dispatch(fetchPrices());
    dispatch(fetchPackages());
  }, []);

  useEffect(() => {
    if (price) {
      setFormData({
        pkgId: price.pkgId || "",
        pkgTitle: price.pkgTitle || "",
        price: price.price || "",
        salePrice: price.salePrice || "",
        features: price.features || "",
        tier: price.tier || "",
      });
    }
  }, [price]);

  const tiers = [
    { value: "basic", label: "Basic" },
    { value: "standard", label: "Standard" },
    { value: "premium", label: "Premium" },
  ];

  const pkgsOptions =
    packages &&
    packages.map((pkg) => ({
      label: pkg.title,
      value: pkg.id,
    }));

  const handleIsConstruction = (e) => {
    setFormData((prev) => ({ ...prev, featured: e.target.checked }));
  };

  const handleSelectAll = (e) => {
    setSelectedAll(!selectedAll);
    const updatedSelected = Array(prices.length).fill(e.target.checked);
    setSelected(updatedSelected);
  };

  const handleSelect = (index) => {
    setSelected((prevSelected) => {
      const updatedSelected = [...prevSelected];
      updatedSelected[index] = !updatedSelected[index];
      return updatedSelected;
    });
  };

  const handleSelectChange = (value, id) => {
  if (id === "tier") {
    setFormData((prevFormData) => ({
      ...prevFormData,
      tier: value,
    }));
  }
    
    const packageFeatures =
      packages &&
      packages.find((pkg) => {
        if (pkg.id === value) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            pkgId: value,
            pkgTitle: pkg.title,
          }));

          setFormData((prevFormData) => ({
            ...prevFormData,
            features: [],
          }));

          pkg.features.forEach((feature) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              features: [
                ...prevFormData.features,
                { value: false, label: feature },
              ],
            }));
          });

          return true;
        }
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckChange = (index) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures[index] = {
      ...updatedFeatures[index],
      value: !updatedFeatures[index].value,
    };
    setFormData((prevFormData) => ({
      ...prevFormData,
      features: updatedFeatures,
    }));
  };

  const handleAddPrice = async (e) => {
    e.preventDefault();
    // console.log(formData);
    if (!price) {
      await dispatch(addPrice(formData));
      setFormData({
        pkgId: "",
        priceTitle: "",
        price: "",
        salePrice: "",
        features: [],
        tier: "",
      });
    } else {
      await dispatch(updatePrice(id, formData));
    }
  };

  const handleDeletePrice = async (id) => {
    await dispatch(deletePrice(id));
  };

  return (
    <>
      <div className="admin_head">
        <h4>all Prices</h4>
        <div className="admin_head_actions">
          <Input
            icon={<Tabler.TbSearch />}
            id="searchPrices"
            name="searchPrices"
            placeholder="Search Price"
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapper_sidebar">
          <form onSubmit={handleAddPrice} className="sidebar_item">
            <h3 className="sidebar_heading">Basic Package</h3>
            <Select
              id="tier"
              label="Select Tier"
              name="tier"
              options={tiers}
              selected={formData.tier}
              onSelect={handleSelectChange}
            />
            <Select
              id="pkgId"
              label="Select Package Title"
              name="pkgId"
              options={pkgsOptions}
              selected={formData.pkgTitle}
              onSelect={handleSelectChange}
            />
            <Input
              icon={<Tabler.TbCoin />}
              label="Price"
              id="basic_price"
              name="price"
              placeholder="Enter price"
              className="w-full"
              type="text"
              value={formData.price}
              onChange={handleInputChange}
            />
            <Input
              icon={<Tabler.TbCoin />}
              label="Sale Price"
              id="basic_sale_price"
              name="salePrice"
              placeholder="Enter Sale price"
              className="w-full"
              type="text"
              value={formData.salePrice}
              onChange={handleInputChange}
            />
            <h3 className="sidebar_heading">Select Features</h3>
            <ul className="tier_feature_list">
              {formData.features.map((feature, key) => (
                <li key={key}>
                  <Checkbox
                    label={feature.label}
                    checked={feature.value}
                    onChange={() => handleCheckChange(key)}
                  />
                </li>
              ))}
            </ul>
            <Button type="submit">
              <span>{loading ? "Loading..." : price ? "Update" : "Save"}</span>
            </Button>
          </form>
        </div>
        <div className="wrapper_content">
          <table>
            <thead>
              <tr>
                <th>
                  <div>
                    <Checkbox
                      checked={selectedAll}
                      onChange={handleSelectAll}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <span>Package Title</span>
                    <button>
                      <Tabler.TbSelector />
                    </button>
                  </div>
                </th>
                <th>
                  <div>
                    <span>Package Price</span>
                    <button>
                      <Tabler.TbSelector />
                    </button>
                  </div>
                </th>
                <th>
                  <div>
                    <span>Created At</span>
                    <button>
                      <Tabler.TbSelector />
                    </button>
                  </div>
                </th>
                <th>
                  <div>
                    <span>Actions</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {prices.map((price, index) => (
                <tr key={price.id}>
                  <td>
                    <div>
                      <Checkbox
                        checked={selected[index]}
                        onChange={() => handleSelect(index)}
                      />
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>{price.pkgTitle}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>${price.price}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>{price.createdAt}</span>
                    </div>
                  </td>
                  
                  <td>
                    <div className="action_button">
                      <Link
                        to={`/hs-admin/prices/${price.id}`}
                        className="edit"
                      >
                        <Tabler.TbEdit />
                      </Link>
                      <button
                        onClick={() => handleDeletePrice(price.id)}
                        className="delete"
                      >
                        <Tabler.TbTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Prices;
