import React, { useEffect } from "react";
import { GET_COMPANY_SLUG } from "../../../../misc/helpers/authTokenManager";
import BusinessPricing from "../../BuisnessPricing";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
    DELETE_COMPANY_SLUG,
} from "../../../../misc/helpers/authTokenManager";
import GetCompanyFromSlugDispatcher from "../../../../store/dispatchers/Auth/Company/GetUserFromSlug"
import Loader from "../../../../misc/Loader";






const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const GetCompanyFromSlug = useSelector(state => state.GetCompanyFromSlug);
    const AppLoadingData = useSelector(state => state.AppLoadingReducer);

    useEffect(async () => {

        const companySlug = await GET_COMPANY_SLUG();
        if (companySlug !== null || companySlug === "" || companySlug === "undefined") {
            dispatch(GetCompanyFromSlugDispatcher(companySlug));
        } else {
            console.log("Navigat in Frontend");
            navigate("/companies/login");
        }
    }, []);


    useEffect(async () => {
        if (GetCompanyFromSlug.message.length > 0) {
            if (GetCompanyFromSlug.error) {
                await DELETE_COMPANY_SLUG();
                toast.error("Authentication token expired", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.log('From Back')
                navigate("/companies/login");
            } else {
            }
        }
    }, [GetCompanyFromSlug]);


    return (
        AppLoadingData.loading ? <Loader /> : GetCompanyFromSlug.isActive ? <p>Dashboard</p> : <BusinessPricing />
    )
};

export default Dashboard;
