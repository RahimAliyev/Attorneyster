import { useState } from "react";
import "../Forms/index.css";
import FormInput from "../components/FormInput";
import { useNavigate } from 'react-router-dom'

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Adınız",
      type: "text",
      placeholder: "Adınız",
      errorMessage:
        "İstifadəçi adı 3-16 simvoldan ibarət olmalıdır və heç bir xüsusi simvol daxil olmamalıdır!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email Ünvanınız",
      errorMessage: "Keçərli e-poçt ünvanı olmalıdır!",
      label: "Email Ünvanı",
      required: true,
    },
    {
      id: 3,
      name: "Telefon nömrəniz",
      type: "Telefon nömrəniz",
      placeholder: "Əlaqə Nömrəsi",
      errorMessage: "Keçərli Nömrə olmalıdır!",
      label: "Əlaqə nömrəniz",
      required: true,
    },
    {
      id: 4,
      name: "Mövzu",
      type: "Telefon nömrəniz",
      placeholder: "Mövzu",
      
      label: "Mövzu",
      
      required: true,
    },
    {
      
      id: 5,
      name: "Sənin mesajın",
      type: "Sənin mesajın",
      placeholder: "Sənin mesajın",
      
      label: "Sənin mesajın",
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const navigate =useNavigate();
  function handleClick (){
    navigate("/")
  }
  const navigasion =useNavigate();
  function klik (){
    navigate("/")
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button onClick={handleClick}  className="buton">Görüş Təyin Edin</button>
      </form>
    </div>
  );
};

export default App;