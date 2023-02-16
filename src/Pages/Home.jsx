import { useState } from "react";
import Sectors from "../components/Sectors";

import { useGlobalContext } from "../store/GlobalContext";

import "../styles/home.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { name, setName, isTermsChecked, setIsTermsChecked, handleSubmit } =
    useGlobalContext();

  return (
    <main>
      <div className="main-container">
        <form onSubmit={handleSubmit} className="form">
          <h2>
            Please enter your name and pick the Sectors you are currently
            involved in
          </h2>
          <div className="input-group">
            <label>Name</label>
            <input
              className="w-100"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Sectors</label>
            <div className="select" onClick={() => setIsOpen(!isOpen)}>
              Select Category
              <span
                className="down-arrow"
                style={{
                  transform: `${isOpen ? "rotate(-90deg)" : "rotate(90deg)"}`,
                }}
              >
                <i class="fa-solid fa-play"></i>
              </span>
            </div>
            <Sectors isOpen={isOpen} />
          </div>

          <div className="input-group">
            <label>
              <input
                type="checkbox"
                onChange={() => setIsTermsChecked(!isTermsChecked)}
                checked={isTermsChecked}
                required
              />
            </label>
            <span className="w-100">Agree to Terms</span>
          </div>

          <button className="save-btn">Save</button>
        </form>
      </div>
    </main>
  );
}
