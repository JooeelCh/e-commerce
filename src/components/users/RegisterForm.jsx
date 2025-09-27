import { FaUserCircle } from "react-icons/fa";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const RegisterForm = () => {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      alert("Usuario registrado correctamente");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h1 className="text-3xl font-semibold text-center mb-5">Registrarse</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center w-1/4 h-110 gap-2 p-4 bg-white rounded-xl shadow">
        <FaUserCircle className="flex self-center text-5xl mb-10" />
        <div className="grid grid-cols-2 gap-2 mt-5 mb-2">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre" className="border px-2 py-1 rounded-md" />
          <input value={surname} onChange={e => setSurname(e.target.value)} placeholder="Apellido" className="border px-2 py-1 rounded-md" />
        </div>
        <input 
        value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo electronico" className="border mb-2 px-2 py-1 rounded-md" 
        />
        <input 
          type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" className="border px-2 py-1 mb-12 rounded-md" 
        />
        <button type="submit" className="flex justify-center self-center w-1/3 bg-blue-500 text-white text-lg py-1 rounded-md hover:bg-blue-600 transition duration-300">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;