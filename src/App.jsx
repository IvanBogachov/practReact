import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import MyComponent from "./components/MyComponent/MyComponent";
import SearchBar from "./components/SearchBar/SearchBar";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher";
import Select from "./components/Select/Select";
import Checkbox from "./components/Checkbox/Checkbox";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState({
    login: "",
    password: ""
  });
  const [lang, setLang] = useState("uk");
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  

  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };

  const handleChangeChecbox = (evt) => {
    setHasAccepted(evt.target.checked);
  };

  return (
    <div>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm values={values} handleChange={handleChange} />
      <MyComponent />
      <SearchBar inputValue={inputValue} handleChange={handleChange} />
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <p>
        <b>Selected size:</b> {coffeeSize}
      </p>
      <Select value={coffeeSize} handleSizeChange={handleSizeChange} />
      <Checkbox
        hasAccepted={hasAccepted}
        handleChangeChecbox={handleChangeChecbox}
      />
    </div>
  );
}

export default App;
