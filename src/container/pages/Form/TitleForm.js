import React, { useContext} from "react";
import plusCircleIcon from "../../../assets/svg/plusCircle.svg";
import { GlobalState } from "../../../config/contextAPI";
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

//   function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//       </Modal>
//     </div>
//   );
// }

export default function TitleForm() {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const { state, dispatch } = useContext(GlobalState);
  const contentForms = state.contentForms;

  const createForm = () => {
    const newForm = {
      id: Date.now(),
      title: "",
      isDesc: false,
      desc: "",
      options: [],
      inputType: "text",
    };
    contentForms.unshift({ ...newForm });
    dispatch({ type: "CHANGE_CONTENTFORM", value: [...contentForms] });
  };

  const handleChange = (e) => {
    state.titleForm = {
      ...state.titleForm,
      [e.target.name]: e.target.value,
    };
    dispatch({ type: "CHANGE_TITLEFORM", value: state.titleForm });
  };

  return (
    <div
      style={{ borderTopWidth: "10px" }}
      className={`
      ${
        state.isDark
          ? "light-shadow bg-gray-100 text-gray-700"
          : "shadow bg-white"
      }
      bg-white px-8 border-t  rounded-lg border-purple-600`}
    >
      <div className="pt-4 pb-8 space-y-2">
        <input
          name="title"
          disabled={!state.isEdit}
          value={state.titleForm.title ? state.titleForm.title : ""}
          placeholder="Form Title"
          onChange={(e) => handleChange(e)}
          className={`${
            state.isDark
              ? "bg-gray-100 hover:border-gray-300 border-gray-100"
              : "bg-white hover:border-gray-300 border-white"
          } focus:border-b-2 focus:border-purple-700 w-full text-3xl py-3`}
        />
        <textarea
          disabled={!state.isEdit}
          name="desc"
          value={state.titleForm.desc ? state.titleForm.desc : ""}
          placeholder="Form Description"
          onChange={(e) => handleChange(e)}
          className={`${
            state.isDark
              ? "bg-gray-100 hover:border-gray-300 border-gray-100"
              : "bg-white hover:border-gray-300 border-white"
          } border-b focus:border-b-2 focus:border-purple-700 w-full py-2 h-auto resize-none`}
        ></textarea>
      </div>
      {state.isEdit && (
        <div className="border-t py-3 flex justify-end items-center space-x-3">
          <img
            src={plusCircleIcon}
            alt="plus"
            className="h-6 w-6 cursor-pointer"
            // createForm()
            onClick={() =>createForm()}
          />
        </div>
      )}
    </div>
  );
}
