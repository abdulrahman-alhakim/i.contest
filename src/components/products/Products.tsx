import React, { useState } from 'react';
import ProductMpx200 from './MPX200/ProductMpx200';
import ProductMpx1000 from './MPX-Container/ProductMpx1000';
import ProductMpx1000X from './MPX1000/ProductMpx1000X';
import ProductFuelCells from './FuelCells/ProductFuelCells';
import ProductChargingStation1 from './Charging-Stations1/ProductChargingStation1';
import ProductChargingStation2 from './Charging-Stations2/ProductChargingStation2';
import ProductChargingStation3 from './Charging-Stations3/ProductChargingStation3';


const Products = () => {

  const [activeTab, setActiveTab] = useState('v-pills-mpx200');


  const buttonStyles = {
    active: {
      backgroundColor: '#d1e7dd', // Dark teal
      fontWeight: 'bold',
      color: '#00796b',
      border: '2px solid #00796b',
    },
    inactive: {
      backgroundColor: '#00796b ', // Light teal
      color: 'white',
    },
  };

  return (
    <div className="row">

      <div>
        <h2 className="text-light p-2 m-2 text-center" style={{ backgroundColor: "#00796b", border: "2px solid", borderRadius: "10px" }}>
          PRODUCTS
        </h2>
      </div>
      <div className="d-flex flex-column flex-md-row align-items-start p-3">

        {/* Mobile first: nav-pills above tabs */}
        <div className="col-12 col-md-2 nav flex-row flex-md-column nav-pills mx-2 mb-3 mb-md-0" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button
            className="nav-link mb-2 w-100"
            id="v-pills-mpx200-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-mpx200"
            type="button"
            role="tab"
            aria-controls="v-pills-mpx200"
            aria-selected={activeTab === 'v-pills-mpx200'}
            onClick={() => setActiveTab('v-pills-mpx200')}
            style={activeTab === 'v-pills-mpx200' ? buttonStyles.active : buttonStyles.inactive}
          >
            MPX 200
          </button>
          <button
            className="nav-link mb-2 w-100"
            id="v-pills-chargingStation-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-chargingStation"
            type="button"
            role="tab"
            aria-controls="v-pills-chargingStation"
            aria-selected={activeTab === 'v-pills-chargingStation'}
            onClick={() => setActiveTab('v-pills-chargingStation')}
            style={activeTab === 'v-pills-chargingStation' ? buttonStyles.active : buttonStyles.inactive}
          >
            MPX 1000
          </button>
          <button
            className="nav-link mb-2 w-100"
            id="v-pills-mpx1000-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-mpx1000"
            type="button"
            role="tab"
            aria-controls="v-pills-mpx1000"
            aria-selected={activeTab === 'v-pills-mpx1000'}
            onClick={() => setActiveTab('v-pills-mpx1000')}
            style={activeTab === 'v-pills-mpx1000' ? buttonStyles.active : buttonStyles.inactive}
          >
            Model MPX-Container-20HQ
          </button>
          <button
            className="nav-link mb-2 w-100"
            id="v-pills-5g-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-5g"
            type="button"
            role="tab"
            aria-controls="v-pills-5g"
            aria-selected={activeTab === 'v-pills-5g'}
            onClick={() => setActiveTab('v-pills-5g')}
            style={activeTab === 'v-pills-5g' ? buttonStyles.active : buttonStyles.inactive}
          >
            5G Infrastructure
          </button>
          <button
            className="nav-link mb-2 w-100"
            id="v-pills-vacCharger-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-vacCharger"
            type="button"
            role="tab"
            aria-controls="v-pills-vacCharger"
            aria-selected={activeTab === 'v-pills-vacCharger'}
            onClick={() => setActiveTab('v-pills-vacCharger')}
            style={activeTab === 'v-pills-vacCharger' ? buttonStyles.active : buttonStyles.inactive}
          >
            Electrical Vehicle AC Charger
          </button>
          <button
            className="nav-link mb-2 w-100"
            id="v-pills-vdcCharger-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-vdcCharger"
            type="button"
            role="tab"
            aria-controls="v-pills-vdcCharger"
            aria-selected={activeTab === 'v-pills-vdcCharger'}
            onClick={() => setActiveTab('v-pills-vdcCharger')}
            style={activeTab === 'v-pills-vdcCharger' ? buttonStyles.active : buttonStyles.inactive}
          >
            Electrical Vehicle DC Charge Station
          </button>
          <button
            className="nav-link mb-2 w-100"
            id="v-pills-vhighPower-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-vhighPower"
            type="button"
            role="tab"
            aria-controls="v-pills-vhighPower"
            aria-selected={activeTab === 'v-pills-vhighPower'}
            onClick={() => setActiveTab('v-pills-vhighPower')}
            style={activeTab === 'v-pills-vhighPower' ? buttonStyles.active : buttonStyles.inactive}
          >
            Stand-alone Battery Integrated High Power Charging Station
          </button>
          <button
            className="nav-link mb-2 w-100"
            id="v-pills-fuelCells-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-fuelCells"
            type="button"
            role="tab"
            aria-controls="v-pills-fuelCells"
            aria-selected={activeTab === 'v-pills-fuelCells'}
            onClick={() => setActiveTab('v-pills-fuelCells')}
            style={activeTab === 'v-pills-fuelCells' ? buttonStyles.active : buttonStyles.inactive}
          >
            Fuel Cells
          </button>
          <button
            className="nav-link mb-2 w-100"
            id="v-pills-ems-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-ems"
            type="button"
            role="tab"
            aria-controls="v-pills-ems"
            aria-selected={activeTab === 'v-pills-ems'}
            onClick={() => setActiveTab('v-pills-ems')}
            style={activeTab === 'v-pills-ems' ? buttonStyles.active : buttonStyles.inactive}
          >
            EMS
          </button>
        </div>
        <div className="tab-content col-12 col-md-10" id="v-pills-tabContent">
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
            5G Infrastructure
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
            className={`tab-pane fade ${activeTab === 'v-pills-ems' ? 'show active' : ''}`}
            id="v-pills-ems"
            role="tabpanel"
            aria-labelledby="v-pills-ems-tab"
          >
            EMS
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;
