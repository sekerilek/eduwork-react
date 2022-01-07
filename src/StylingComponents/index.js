import CreateBody from "./CreateBody";
import CreateContact from "./CreateContact";
import CreateCover from "./CreateCover";
import CreateNavbar from "./CreateNavbar";

const Styling = () => {
  return (
    <div>
      <CreateNavbar />
      <CreateCover />
      <CreateBody />
      <CreateContact />
    </div>
  );
};
export default Styling;
