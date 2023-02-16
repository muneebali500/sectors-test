import React, { useState, useEffect, createContext, useContext } from "react";
import sectorsData from "../data.json";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [name, setName] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [sectors, setSectors] = useState([...sectorsData]);

  //////////////// Getting all the fields data from LocalStorage at initial render
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("data"));

    if (localData) {
      setName(localData.name);
      setIsTermsChecked(localData.isTermsChecked);
      setSectors(localData.sectors);
    }
  }, []);

  ////////////// function checks the sectors items
  function handleChecked(optionSelected) {
    function checkedValue(data) {
      for (const item of data) {
        if (item.category === optionSelected) {
          item.checked = item.checked ? false : true;
          setSectors([...data]);
        }

        if (item.subCategory) {
          checkedValue(item.subCategory);
        }
      }

      setSectors([...data]);
    }

    checkedValue(sectors);
  }

  ///////// FUNCTION VALIDATES DATA AND SUBMITS IT INTO LOCAL STORAGE
  function handleSubmit(e) {
    e.preventDefault();

    function checkIfAnyChecked(data) {
      for (let item of data) {
        if (item.checked) {
          return true;
        }
        if (item.subCategory) {
          if (checkIfAnyChecked(item.subCategory)) {
            return true;
          }
        }
      }
      return false;
    }

    const bool = checkIfAnyChecked(sectors);

    if (!bool) {
      return alert("Please fill in all the fields");
    }

    const data = {
      name,
      sectors,
      isTermsChecked,
    };

    localStorage.setItem("data", JSON.stringify(data));
  }

  return (
    <AuthContext.Provider
      value={{
        name,
        setName,
        isTermsChecked,
        setIsTermsChecked,
        sectors,
        setSectors,
        handleChecked,
        handleSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(AuthContext);
}

export { AuthProvider, useGlobalContext };
