import React, { useState } from 'react';
import ProductMpx200 from './MPX200/ProductMpx200';
import ProductMpx1000 from './MPX-Container/ProductMpx1000';
import ProductMpx1000X from './MPX1000/ProductMpx1000X';
import ProductFuelCells from './FuelCells/ProductFuelCells';
import ProductChargingStation1 from './Charging-Stations1/ProductChargingStation1';
import ProductChargingStation2 from './Charging-Stations2/ProductChargingStation2';
import ProductChargingStation3 from './Charging-Stations3/ProductChargingStation3';
import Ems from './EMS/Ems';
import FiveG from './5G/FiveG';

const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('v-pills-mpx200');
  const [dropdownLabel, setDropdownLabel] = useState<string>('MPX 200');

  const buttonStyles = {
    active: {
      backgroundColor: '#d1e7dd',
      fontWeight: 'bold',
      color: '#00796b',
      border: '2px solid #00796b',
      width: '100%', // Ensure full width on mobile
    },
    inactive: {
      backgroundColor: '#00796b ',
      color: 'white',
      width: '100%', // Ensure full width on mobile
    },
  };

  const handleTabChange = (tab: string, label: string) => {
    setActiveTab(tab);
    setDropdownLabel(label);
  };

  return (
    <div className="row">
      <div className="d-flex flex-column flex-md-row p-3 justify-content-center">
        {/* Mobile Dropdown */}
        <div className="col-12 d-md-none mb-3">
          <div className="dropdown">
            <button
              className="btn dropdown-toggle w-100 text-white"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{backgroundColor: "#00796b" }}
            >
              {dropdownLabel}
            </button>
            <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton" style={{backgroundColor: "#d1e7dd" }}>
              <li>
                <button
                  className="dropdown-item border-buttom border-primary"
                  onClick={() => handleTabChange('v-pills-mpx200', 'MPX 200')}
                >
                  MPX 200
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleTabChange('v-pills-chargingStation', 'MPX 1000')}
                >
                  MPX 1000
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleTabChange('v-pills-mpx1000', 'Model MPX-Container-20HQ')}
                >
                  Model MPX-Container-20HQ
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleTabChange('v-pills-5g', '5G Infrastructure')}
                >
                  5G Infrastructure
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleTabChange('v-pills-vacCharger', 'Electrical Vehicle AC Charger')}
                >
                  Electrical Vehicle AC Charger
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleTabChange('v-pills-vdcCharger', 'Electrical Vehicle DC Charge Station')}
                >
                  Electrical Vehicle DC Charge Station
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleTabChange('v-pills-vhighPower', 'Stand-alone Battery Integrated High Power Charging Station')}
                >
                  Battery Integrated High Power Charging Station
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleTabChange('v-pills-fuelCells', 'Fuel Cells')}
                >
                  Fuel Cells
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleTabChange('v-pills-ems', 'EMS')}
                >
                  EMS
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className="col-md-2 d-none d-md-block nav flex-column nav-pills mb-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button
            className="nav-link mb-2"
            id="v-pills-mpx200-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-mpx200"
            type="button"
            role="tab"
            aria-controls="v-pills-mpx200"
            aria-selected={activeTab === 'v-pills-mpx200'}
            onClick={() => handleTabChange('v-pills-mpx200', 'MPX 200')}
            style={{
              ...buttonStyles[activeTab === 'v-pills-mpx200' ? 'active' : 'inactive'],
              width: activeTab === 'v-pills-mpx200' && window.innerWidth >= 768 ? '100%' : '100%', // 100% on mobile, auto on desktop
            }}
          >
            MPX 200
          </button>
          <button
            className="nav-link mb-2"
            id="v-pills-chargingStation-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-chargingStation"
            type="button"
            role="tab"
            aria-controls="v-pills-chargingStation"
            aria-selected={activeTab === 'v-pills-chargingStation'}
            onClick={() => handleTabChange('v-pills-chargingStation', 'MPX 1000')}
            style={{
              ...buttonStyles[activeTab === 'v-pills-chargingStation' ? 'active' : 'inactive'],
              width: activeTab === 'v-pills-chargingStation' && window.innerWidth >= 768 ? '100%' : '100%', // 100% on mobile, auto on desktop
            }}
          >
            MPX 1000
          </button>
          <button
            className="nav-link mb-2"
            id="v-pills-mpx1000-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-mpx1000"
            type="button"
            role="tab"
            aria-controls="v-pills-mpx1000"
            aria-selected={activeTab === 'v-pills-mpx1000'}
            onClick={() => handleTabChange('v-pills-mpx1000', 'Model MPX-Container-20HQ')}
            style={{
              ...buttonStyles[activeTab === 'v-pills-mpx1000' ? 'active' : 'inactive'],
              width: activeTab === 'v-pills-mpx1000' && window.innerWidth >= 768 ? '100%' : '100%', // 100% on mobile, auto on desktop
            }}
          >
            Model MPX-Container-20HQ
          </button>
          <button
            className="nav-link mb-2"
            id="v-pills-5g-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-5g"
            type="button"
            role="tab"
            aria-controls="v-pills-5g"
            aria-selected={activeTab === 'v-pills-5g'}
            onClick={() => handleTabChange('v-pills-5g', '5G Infrastructure')}
            style={{
              ...buttonStyles[activeTab === 'v-pills-5g' ? 'active' : 'inactive'],
              width: activeTab === 'v-pills-5g' && window.innerWidth >= 768 ? '100%' : '100%', // 100% on mobile, auto on desktop
            }}
          >
            5G Infrastructure
          </button>
          <button
            className="nav-link mb-2"
            id="v-pills-vacCharger-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-vacCharger"
            type="button"
            role="tab"
            aria-controls="v-pills-vacCharger"
            aria-selected={activeTab === 'v-pills-vacCharger'}
            onClick={() => handleTabChange('v-pills-vacCharger', 'Electrical Vehicle AC Charger')}
            style={{
              ...buttonStyles[activeTab === 'v-pills-vacCharger' ? 'active' : 'inactive'],
              width: activeTab === 'v-pills-vacCharger' && window.innerWidth >= 768 ? '100%' : '100%', // 100% on mobile, auto on desktop
            }}
          >
            Electrical Vehicle AC Charger
          </button>
          <button
            className="nav-link mb-2"
            id="v-pills-vdcCharger-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-vdcCharger"
            type="button"
            role="tab"
            aria-controls="v-pills-vdcCharger"
            aria-selected={activeTab === 'v-pills-vdcCharger'}
            onClick={() => handleTabChange('v-pills-vdcCharger', 'Electrical Vehicle DC Charge Station')}
            style={{
              ...buttonStyles[activeTab === 'v-pills-vdcCharger' ? 'active' : 'inactive'],
              width: activeTab === 'v-pills-vdcCharger' && window.innerWidth >= 768 ? '100%' : '100%', // 100% on mobile, auto on desktop
            }}
          >
            Electrical Vehicle DC Charge Station
          </button>
          <button
            className="nav-link mb-2"
            id="v-pills-vhighPower-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-vhighPower"
            type="button"
            role="tab"
            aria-controls="v-pills-vhighPower"
            aria-selected={activeTab === 'v-pills-vhighPower'}
            onClick={() => handleTabChange('v-pills-vhighPower', 'Stand-alone Battery Integrated High Power Charging Station')}
            style={{
              ...buttonStyles[activeTab === 'v-pills-vhighPower' ? 'active' : 'inactive'],
              width: activeTab === 'v-pills-vhighPower' && window.innerWidth >= 768 ? '100%' : '100%', // 100% on mobile, auto on desktop
            }}
          >
            Battery Integrated High Power Charging Station
          </button>
          <button
            className="nav-link mb-2"
            id="v-pills-fuelCells-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-fuelCells"
            type="button"
            role="tab"
            aria-controls="v-pills-fuelCells"
            aria-selected={activeTab === 'v-pills-fuelCells'}
            onClick={() => handleTabChange('v-pills-fuelCells', 'Fuel Cells')}
            style={{
              ...buttonStyles[activeTab === 'v-pills-fuelCells' ? 'active' : 'inactive'],
              width: activeTab === 'v-pills-fuelCells' && window.innerWidth >= 768 ? '100%' : '100%', // 100% on mobile, auto on desktop
            }}
          >
            Fuel Cells
          </button>
          <button
            className="nav-link mb-2"
            id="v-pills-ems-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-ems"
            type="button"
            role="tab"
            aria-controls="v-pills-ems"
            aria-selected={activeTab === 'v-pills-ems'}
            onClick={() => handleTabChange('v-pills-ems', 'EMS')}
            style={{
              ...buttonStyles[activeTab === 'v-pills-ems' ? 'active' : 'inactive'],
              width: activeTab === 'v-pills-ems' && window.innerWidth >= 768 ? '100%' : '100%', // 100% on mobile, auto on desktop
            }}
          >
            EMS
          </button>
        </div>

        {/* Content area */}
        <div className="tab-content col-12 col-md-8" id="v-pills-tabContent">
          <div
            className={`tab-pane fade ${activeTab === 'v-pills-mpx200' ? 'show active' : ''}`}
            id="v-pills-mpx200"
            role="tabpanel"
            aria-labelledby="v-pills-mpx200-tab"
          >
            <ProductMpx200 />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'v-pills-chargingStation' ? 'show active' : ''}`}
            id="v-pills-chargingStation"
            role="tabpanel"
            aria-labelledby="v-pills-chargingStation-tab"
          >
            <ProductMpx1000X />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'v-pills-mpx1000' ? 'show active' : ''}`}
            id="v-pills-mpx1000"
            role="tabpanel"
            aria-labelledby="v-pills-mpx1000-tab"
          >
            <ProductMpx1000 />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'v-pills-5g' ? 'show active' : ''}`}
            id="v-pills-5g"
            role="tabpanel"
            aria-labelledby="v-pills-5g-tab"
          >
            {/* <FiveG/> */}
            <div className="d-flex flex-column flex-md-row p-3 justify-content-center align-items-center">
              <h1>Coming Soon ... </h1>
            </div>
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'v-pills-vacCharger' ? 'show active' : ''}`}
            id="v-pills-vacCharger"
            role="tabpanel"
            aria-labelledby="v-pills-vacCharger-tab"
          >
            <ProductChargingStation1 />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'v-pills-vdcCharger' ? 'show active' : ''}`}
            id="v-pills-vdcCharger"
            role="tabpanel"
            aria-labelledby="v-pills-vdcCharger-tab"
          >
            <ProductChargingStation2 />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'v-pills-vhighPower' ? 'show active' : ''}`}
            id="v-pills-vhighPower"
            role="tabpanel"
            aria-labelledby="v-pills-vhighPower-tab"
          >
            <ProductChargingStation3 />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'v-pills-fuelCells' ? 'show active' : ''}`}
            id="v-pills-fuelCells"
            role="tabpanel"
            aria-labelledby="v-pills-fuelCells-tab"
          >
            <ProductFuelCells />
          </div>
          <div
            className={`tab-pane fade ${activeTab === 'v-pills-ems' ? 'show active' : ''}` }
            id="v-pills-ems"
            role="tabpanel"
            aria-labelledby="v-pills-ems-tab"
          >
            {/* <Ems /> */}
            
            <div className="d-flex flex-column flex-md-row p-3 justify-content-center align-items-center">
              <h1>Coming Soon ... </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

