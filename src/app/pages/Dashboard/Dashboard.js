import React, { useState, useEffect } from "react";
import ButtonCard from "../../component/ButtonCard";
import wave from "../../assets/images/waving-hand.png";
import Accordion from "../../component/Accordion";
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
import TopList from "./TopicList";
import { DEFAULT_COLOR } from "../../misc/__colors__";
import { Link } from "react-router-dom";



const Dashboard = () => {
    const [showButtonCard, setShowButtonCard] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const AppLoading = useSelector((state) => state.AppLoadingReducer);
    const AddTopicResourceState = useSelector(
        (state) => state.AddTopicResourceReducer
    );
    const GetTopicState = useSelector((state) => state.GetTopicsReducer);
    const GetUserFromSlugState = useSelector((state) => state.GetUserFromSlug);
    const [topicList, setTopicList] = useState([]);

    useEffect(async () => {
        const slug = await GET_USER_SLUG();
        if (slug !== null || slug === "" || slug === "undefined") {
            dispatch(GetUserFromSlugDispatcher(slug));
        } else {
            navigate("/users/login");
        }
    }, []);

    useEffect(() => {
        if (GetTopicState.message.length > 0) {
            if (!GetTopicState.error) {
                setTopicList(GetTopicState.topics);
            }
        }
    }, [GetTopicState]);

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
                dispatch(GetTopicsDispatcher());
            }
        }
    }, [GetUserFromSlugState]);

    return AppLoading.loading ? (
        <div>
            <Loader width="50" height="50" />
        </div>
    ) : (
        <div className="">
            <div style={{ display: "flex", justifyContent: "space-between" }} className="my-5 mx-5 md:mx-10 md:my-10">
                <h1 className="text-5xl">
                    Owerri <span style={{ color: DEFAULT_COLOR }}>JobHunt</span>
                </h1>

                <div>
                    <div className="border-first-button scroll-to-section">
                        <Link to="/users/candidate/pricing" className="primary">Complete Payment Registeration</Link>
                    </div>
                </div>

            </div>
            <section
                className="flex  lg:flex-row  my-5 mx-5 md:mx-10 md:my-10  rounded-md shadow-md"
                style={{ backgroundColor: "#E8EEF3" }}
            >
                <section className="hidden lg:block  pt-44 ml-12">
                    <ul className="bg-white shadow-md rounded-sm pl-4 w-48">
                        <li className="py-2 text-blue-700">All topics</li>

                        <TopList topics={topicList} />
                    </ul>
                </section>

                <section>
                    <div className="flex flex-col lg:flex-row justify-center">
                        <div className="flex justify-center my-5">
                            <h1 className="mr-3  lg:pt-12 lg:text-2xl">
                                <span className="text-xl font-semibold mr-2 lg:text-4xl ">
                                    Hello
                                </span>
                                {GetUserFromSlugState.user.full_name}
                            </h1>
                            <img src={wave} alt="text" className="w-8 lg:mt-12 lg:w-14" />
                        </div>
                        {GetUserFromSlugState.user.is_super && (
                            <div className="lg:mb-10 mx-auto lg:mx-0">
                                <button
                                    onClick={() => setShowButtonCard((prev) => !prev)}
                                    className="py-2 lg:mt-16 lg:ml-14 text-white w-24  rounded-lg shadow-md mb-2 "
                                    style={{ backgroundColor: DEFAULT_COLOR }}
                                >
                                    {" "}
                                    + Create
                                </button>
                            </div>
                        )}

                        {showButtonCard && <ButtonCard />}
                        {/* <InputModal/> */}
                    </div>
                    {GetTopicState.loading ? (
                        <Loader width="50" height="50" />
                    ) : (
                        <Accordion topics={topicList} />
                    )}
                </section>
            </section>
        </div>
    );
};

export default Dashboard;
