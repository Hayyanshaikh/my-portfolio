import Media from './Media.jsx';
import Modal from '../components/Modal.jsx';
import Select from '../components/Select.jsx';
import Input from '../../website/components/Input.jsx';
import Checkbox from '../components/Checkbox.jsx';
import QuillEditor from '../../website/components/QuillEditor.jsx';
import { useSelector, useDispatch } from "react-redux";
import Button from '../../website/components/Button.jsx';

const AddPrice = () => {
	
  const tiers = [
    { value: 'basic', label: 'Basic' },
    { value: 'standard', label: 'Standard' },
    { value: 'premium', label: 'Premium' },
  ];
	return (
		<div className="tier_wrapper">
				<h4 className="sub_heading">Pricing Package</h4>
			  <div className="tier_grid">
				  <div className="tier_form">
				    <h3>Basic Package</h3>
				    <Select
				      id="selectTierBasic"
				      label="Select Tier"
				      name="selectTierBasic"
				      options={tiers}
				      className="custom-select"
				    />
				    <Input
				      icon={<Tabler.TbFileDescription />}
				      label="Package Title"
				      id="basic_package_title"
				      name="basic_package_title"
				      placeholder="Enter package title"
				      className="w-full"
				      type="text"
				    />
				    <Input
				      icon={<Tabler.TbCoin />}
				      label="Price"
				      id="basic_price"
				      name="basic_price"
				      placeholder="Enter price"
				      className="w-full"
				      type="text"
				    />
				    <Input
				      icon={<Tabler.TbCoin />}
				      label="Sale Price"
				      id="basic_sale_price"
				      name="basic_sale_price"
				      placeholder="Enter Sale price"
				      className="w-full"
				      type="text"
				    />
				    <h3>Select Features</h3>
				    <ul className="tier_feature_list">
				      <li>
				        {/*<Checkbox label="Unlimited access" />*/}
				      </li>
				      <li>
				        {/*<Checkbox label="Collaborative diary" />*/}
				      </li>
				      <li>
				        {/*<Checkbox label="Confirmation & Reminders of appointments" />*/}
				      </li>
				      <li>
				        {/*<Checkbox label="Online appointment booking" />*/}
				      </li>
				      <li>
				        {/*<Checkbox label="Free reservations" />*/}
				      </li>
				      <li>
				        {/*<Checkbox label="Integration with the agency website" />*/}
				      </li>
				    </ul>
				  </div>
				  <div className="tier_form">
				    <h3>Standard Package</h3>
				    <Select
				      id="selectTierStandard"
				      label="Select Tier"
				      name="selectTierStandard"
				      options={tiers}
				      className="custom-select"
				    />
				    <Input
				      icon={<Tabler.TbFileDescription />}
				      label="Package Title"
				      id="standard_package_title"
				      name="standard_package_title"
				      placeholder="Enter package title"
				      className="w-full"
				      type="text"
				    />
				    <Input
				      icon={<Tabler.TbCoin />}
				      label="Price"
				      id="standard_price"
				      name="standard_price"
				      placeholder="Enter price"
				      className="w-full"
				      type="text"
				    />
				    <Input
				      icon={<Tabler.TbCoin />}
				      label="Sale Price"
				      id="standard_sale_price"
				      name="standard_sale_price"
				      placeholder="Enter Sale price"
				      className="w-full"
				      type="text"
				    />
				    <h3>Select Features</h3>
				    <ul className="tier_feature_list">
				      <li>
				        {/*<Checkbox label="Unlimited access" />*/}
				      </li>
				      <li>
				        {/*<Checkbox label="Collaborative diary" />*/}
				      </li>
				      <li>
				        {/*<Checkbox label="Confirmation & Reminders of appointments" />*/}
				      </li>
				      <li>
				        {/*<Checkbox label="Online appointment booking" />*/}
				      </li>
				      <li>
				        {/*<Checkbox label="Free reservations" />*/}
				      </li>
				      <li>
				        {/*<Checkbox label="Integration with the agency website" />*/}
				      </li>
				    </ul>
				  </div>
				  <div className="tier_form">
				    <h3>Premium Package</h3>
				    <Select
				      id="selectTierPremium"
				      label="Select Tier"
				      name="selectTierPremium"
				      options={tiers}
				      className="custom-select"
				    />
				    <Input
				      icon={<Tabler.TbFileDescription />}
				      label="Package Title"
				      id="premium_package_title"
				      name="premium_package_title"
				      placeholder="Enter package title"
				      className="w-full"
				      type="text"
				    />
				    <Input
				      icon={<Tabler.TbCoin />}
				      label="Price"
				      id="premium_price"
				      name="premium_price"
				      placeholder="Enter price"
				      className="w-full"
				      type="text"
				    />
				    <Input
				      icon={<Tabler.TbCoin />}
				      label="Sale Price"
				      id="premium_sale_price"
				      name="premium_sale_price"
				      placeholder="Enter Sale price"
				      className="w-full"
				      type="text"
				    />
				    <h3>Select Features</h3>
				    <ul className="tier_feature_list">
				      <li>
				        {/*<Checkbox label="Unlimited access" />*/}
				      </li>
				      <li>
				        {/*<Checkbox label="Collaborative diary" />*/}
				      </li>
				      <li>
				        {/*<Checkbox label="Confirmation & Reminders of appointments" />*/}
				      </li>
				      <li>
				        {/*<Checkbox label="Online appointment booking" />*/}
				      </li>
				      <li>
				        {/*<Checkbox label="Free reservations" />*/}
				      </li>
				      <li>
				        {/*<Checkbox label="Integration with the agency website" />*/}
				      </li>
				    </ul>
				  </div>
				</div>
			</div>
	)
}

export default AddPrice