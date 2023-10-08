import { useContext } from "react";
import ImputCreateStudents from "../components/ImputCreateStudents";
import fondoRegistro from "../../img/fondoCrearAlumnos.jpg";
import AppContext from "../../AppContext";
import "../../style/modal.css";

function CreateStudents({ getStudents }) {
  const { isModalOpenStudents, setIsModalOpenStudents } =
    useContext(AppContext);

  const closeModal = () => {
    setIsModalOpenStudents(false);
  };

  if (!isModalOpenStudents) return null;

  return (
    <section className="auth">
      <div className="wrapper">
        <div className="top">
          <button className="closeModal" onClick={closeModal}>
            X
          </button>
          <h2>
            REGISTRO <br />
            DE ALUMNOS
          </h2>
          <img
            className="fondo"
            src={fondoRegistro}
            alt="Formulario de registro de alumnos"
          />
        </div>
        <ImputCreateStudents getStudents={getStudents} />
      </div>
    </section>
  );
}

export default CreateStudents;
