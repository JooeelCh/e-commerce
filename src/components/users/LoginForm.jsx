import { FaUserCircle } from "react-icons/fa";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Bienvenido");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Usuario o contraseña incorrecto");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h1 className="text-3xl font-semibold text-center mb-5">Iniciar Sesion</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center w-1/5 h-110 gap-2 p-4 bg-white rounded-xl shadow">
        <FaUserCircle className="flex self-center text-5xl mb-10" />
        <input 
          value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo Electronico" className="flex self-center w-2/3 border mt-5 mb-2 px-2 py-1 rounded-lg"
        />
        <input
          type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña"className="flex self-center w-2/3 border px-2 py-1 mb-12 rounded-lg"
        />
        <button type="submit" className="flex justify-center self-center w-1/3 bg-blue-500 text-white text-lg py-1 rounded-md hover:bg-blue-600 transition duration-300">Continuar</button>
        <p className="text-md text-center mt-3">¿No tenés cuenta? <Link to="/register" className="text-blue-500 font-semibold hover:text-blue-600 transition">Registrate</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;
