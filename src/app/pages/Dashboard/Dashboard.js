import React, { useState, useEffect } from "react";
import GetTopicsDispatcher from "../../store/dispatchers/Topic/GetTopic";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GetUserFromSlugDispatcher from "../../store/dispatchers/Auth/GetUserFromSlug";
import {
  GET_USER_SLUG,
  DELETE_USER_SLUG,
} from "../../misc/helpers/authTokenManager";
import { toast } from "react-toastify";
import Loader from "../../misc/Loader";
import WhenUserHasntPaid from "./WhenUserHasntPaid";
import WhenUserHasPaid from "./WhenUserHasPaid";


const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AppLoading = useSelector((state) => state.AppLoadingReducer);
  const AddTopicResourceState = useSelector(
    (state) => state.AddTopicResourceReducer
  );
  const GetUserFromSlugState = useSelector((state) => state.GetUserFromSlug);

  useEffect(async () => {
    const slug = await GET_USER_SLUG();
    if (slug !== null || slug === "" || slug === "undefined") {
      dispatch(GetUserFromSlugDispatcher(slug));
    } else {
      navigate("/users/login");
    }
  }, []);

//   useEffect(() => {
//     if (GetTopicState.message.length > 0) {
//       if (!GetTopicState.error) {
//         setTopicList(GetTopicState.topics);
//       }
//     }
//   }, [GetTopicState]);

  useEffect(async () => {
    if (AddTopicResourceState.message.length > 0) {
      if (!AddTopicResourceState.error) {
        dispatch(GetTopicsDispatcher());
      }
    }
  }, [AddTopicResourceState]);

  useEffect(async () => {
    if (GetUserFromSlugState.message.length > 0) {
      if (GetUserFromSlugState.error) {
        await DELETE_USER_SLUG();
        toast.error("Authentication token expired", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/users/login");
      } else {
        console.log(GetUserFromSlugState.user.payment.is_paid);
        dispatch(GetTopicsDispatcher());
      }
    }
  }, [GetUserFromSlugState]);

  return AppLoading.loading ? (
    <div>
      <Loader width="50" height="50" />
    </div>
  ) : GetUserFromSlugState.user.payment && GetUserFromSlugState.user.payment.is_paid ? (
    <WhenUserHasPaid />
  ) : (
    <WhenUserHasntPaid />
  );
};

export default Dashboard;
