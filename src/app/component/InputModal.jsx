import React, { useState, useEffect } from 'react';
import { Modal} from 'antd';
import DropDown from '../component/DropDown';
import Input from "../misc/Input";
import ErrorText from "../misc/ErrorText";
import { useDispatch, useSelector  } from "react-redux";
import AddTopicResourceDispatcher from "../store/dispatchers/Topic/AddTopicResource";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const InputModal = ({createAble}) => {
  
  const dispatch = useDispatch();
  const AddTopicResourceState = useSelector(state => state.AddTopicResourceReducer);
  const [visible, setVisible] = useState(false);
  const [ title, setTitle ] = useState("");
  const [ link, setLink ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ titleError, setTitleError ] = useState("");
  const [ descriptionError, setDescriptionError  ]= useState("");
  const [ linkError, setLinkError ] = useState("");


  useEffect( async ()=>{
    if (AddTopicResourceState.message.length > 0) {
      if(AddTopicResourceState.error)
        {toast.error(AddTopicResourceState.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        else {
          toast.success(AddTopicResourceState.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          handleCloseRequest();

        }
  }}, [ AddTopicResourceState ])

  const handleSubmitRequest = async (e) =>{
    e.preventDefault();

    title.length < 1?setTitleError(`Please enter ${createAble} title`):setTitleError("");
    

    description.length < 1?setDescriptionError(`Please enter ${createAble} description`):setDescriptionError("");

    link.length < 1?setLinkError(`Please enter ${createAble} address link`):setLinkError("");

    const currentTopic = await localStorage.getItem("CURRENT_TOPIC");
    if(createAble.toLowerCase() !== "topic"){
      if(currentTopic === null || currentTopic === "" ){
        toast.error("Please select a topic", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }else{
          link.length > 0 && title.length > 0 && description.length > 0 &&  dispatch(AddTopicResourceDispatcher({ title, address_link:link, description,resource:createAble.toLowerCase(),topic_id:currentTopic }));
      }
    }else{
      link.length > 0 && title.length > 0 && description.length > 0 &&  dispatch(AddTopicResourceDispatcher({ title, address_link:link, description,resource:createAble.toLowerCase(), }));
    }

  }


  const handleCloseRequest = async()=>{
    await localStorage.removeItem("CURRENT_TOPIC");
    setVisible(false);
  }
  return (
    <>
      <span  onClick={() => setVisible(true)}>
        {createAble}
      </span>
      <Modal
        title={`Create ${createAble}`}
        centered
        visible={visible}
        onOk={ handleSubmitRequest }
        onCancel={ handleCloseRequest }
        width={1000}
      >
            <Input label={`${createAble} Title`} value ={ title } onChange ={ (e)=>{ setTitle(e.target.value) } } />
            <ErrorText text={ titleError } />

            <Input label={`${createAble} Link`} value ={ link } onChange ={ (e)=>{ setLink(e.target.value) } } />
            <ErrorText text={ linkError } />

            <Input label={`${createAble} Description`} value ={ title } textArea={ true } onChange ={ (e)=>{ setDescription(e.target.value) } } />
            <ErrorText text={ descriptionError } />
            
             { createAble !== 'Topic' && <DropDown/>}

      </Modal>
    </>
  );
};

export default InputModal