// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  useAuth();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <section>
              <input 
                type="text" 
                id="searchInput" 
                placeholder="Search by name..." 
                value={searchValue}
                onChange={handleSearchInputChange}
              />
              <div className="hero-content">
                {facultyData
                  .filter((faculty) =>
                    faculty.name.toLowerCase().includes(searchValue)
                  )
                  .map((faculty) => (
                    <div className="faculty-card" key={faculty.id}>
                      <div className="faculty-info">
                        <h3>{faculty.name}</h3>
                        <p>Owner: {faculty.Owner}</p>
                        <p>Price: {faculty.Price}</p>
                        <p>Company: {faculty.Company}</p>
                        <p>Contact: {faculty.Contact}</p>
                        
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};

const facultyData = [
  {
    id: 1,
    name: "Bottle",
    Owner: "Neha Sahu(Senior)",
    Price: "50",
    Company: "Cello",
    Contact: "9329623103"
  },
{
    id: 2,
    name: "Bag",
    Owner: "Laxmi Parmar(Senior)",
    Price: "250",
    Company: "Skybag",
    Contact: "8839685605",
  },
{
    id: 3,
    name: "Notebook",
    Owner: "Nidhi Sahu",
    Price: "100",
    Company : "Classmate",
    Contact: "7389893147",
  },
{
    id: 4,
    name: "Mattres",
    Owner: "Neha Soni",
    Price: "500",
    Company : "XYZ",
    Contact: "1230321456",
  },
{
    id: 5,
    name: "Bucket",
    Owner: "Laxmii",
    Price: "100",
    Company : "XYZ",
    Contact: "7389893147",
  },
{
    id: 6,
    name: "Mug",
    Owner: "Tanu",
    Price: "50",
    Company : "ABS",
    Contact: "7389893147",
  },
{
    id: 7,
    name: "Bycle",
    Owner: "Rishbh",
    Price: "2000",
    Company : "Hero",
    Contact: "7389893147",
  },
{
    id: 8,
    name: "Mobile",
    Owner: "Udit",
    Price: "10000",
    Company : "Realme",
    Contact: "7389893147",
  },
{
    id: 9,
    name: "Laptop",
    Owner: "Sumit Tiwari",
    Price: "50000",
    Company : "HP",
    Contact: "7389893147",
  },
{
    id: 10,
    name: "Power bank",
    Owner: "Laxmii",
    Price: "50",
    Company : "XYZ",
    Contact: "7389893147",
  },
{
    id: 11,
    name: "Charger",
    Owner: "Laxmii",
    Price: "100",
    Company : "C-Type",
    Contact: "7389893147",
  },
{
    id: 12,
    name: "Tiffin",
    Owner: "Sumit",
    Price: "100",
    Company : "XYZ",
    Contact: "7389893147",
  },
{
    id: 13,
    name: "Torch",
    Owner: "sumit",
    Price: "100",
    Company : "XYZ",
    Contact: "7389893147",
  },
{
    id: 14,
    name: "Watch",
    Owner: "Neha",
    Price: "100",
    Company : "XYZ",
    Contact: "7389893147",
  },
{
    id: 15,
    name: "Speaker",
    Owner: "Shriram",
    Price: "200",
    Company : "XYZ",
    Contact: "7389893147",
  },
{
    id: 16,
    name: "Hot water bag",
    Owner: "Nehu",
    Price: "150",
    Company : "XYZ",
    Contact: "7389893147",
  },
{
    id: 17,
    name: "Soap-Box",
    Owner: "Vitian Neha",
    Price: "40",
    Company : "XYZ",
    Contact: "7389893147",
  },
{
    id: 18,
    name: "Pen Pot",
    Owner: "Laxmii",
    Price: "100",
    Company : "XYZ",
    Contact: "7389893147",
  },
{
    id: 19,
    name: "Blue Lens",
    Owner: "Laxmii",
    Price: "500",
    Company : "XYZ",
    Contact: "7389893147",
  },
{
    id: 20,
    name: "Headphones",
    Owner: "Laxmii",
    Price: "100",
    Company : "XYZ",
    Contact: "7389893147",
  },
{
    id: 21,
    name: "Switch Board",
    Owner: "Laxmii",
    Price: "100",
    Company : "XYZ",
    Contact: "7389893147",
  },
{
    id: 22,
    name: "Cameras",
    Owner: "Laxmii",
    Price: "100",
    Company : "XYZ",
    Contact: "7389893147",
  },
  
  // Add more faculty data objects here
];
