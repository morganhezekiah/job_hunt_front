import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../../misc/Button";
import Input from "../../../misc/Input";
import Wrapper from "./../Wrapper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ErrorText from "../../../misc/ErrorText";
import { useDispatch, useSelector } from "react-redux";
import RegisterCompanyDispatcher from "../../../store/dispatchers/Auth/Company/Register";
import { GET_USER_SLUG } from "../../../misc/helpers/authTokenManager";
import { DEFAULT_COLOR } from "../../../misc/__colors__";
import Select from "react-select";
import 'react-telephone-input/css/default.css'
import ReactTelInput from "react-telephone-input";







const COMPANY_INTEREST_OPTION = [
    { value: "technology", label: "Technology" },
    { value: "agriculture", label: "Agriculture" },
    { value: "education", label: "Education" },
];
const RegisterCompany = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const RegisterCompanyReducer = useSelector((state) => state.RegisterCompanyReducer);
    const AppLoading = useSelector((state) => state.AppLoadingReducer.loading);

    const [companyName, setCompanyName] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");
    const [companyMobileContact, setCompanyMobileContact] = useState("");
    const [companyInterest, setCompanyInterest] = useState([]);
    const [companyPassword, setCompanyPassword] = useState("");

    const [companyNameError, setCompanyNameError] = useState("");
    const [companyAddressError, setCompanyAddressError] = useState("");
    const [companyEmailError, setCompanyEmailError] = useState("");
    const [companyPasswordError, setCompanyPasswordError] = useState("");
    const [companyInterestError, setCompanyInterestError] = useState("");
    const [companyMobileContactError, setCompanyMobileContactError] = useState(
        ""
    );

    useEffect(() => {
        async function fetchData() {
            const token = await GET_USER_SLUG();
            token !== null && token.length > 1 && navigate("/users/dashboard");
        }
        fetchData();
    }, [navigate]);

    useEffect(() => {
        if (RegisterCompanyReducer.message.length > 0) {
            RegisterCompanyReducer.error
                ? toast.error(RegisterCompanyReducer.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                : toast.success(RegisterCompanyReducer.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            !RegisterCompanyReducer.error && navigate("/companies/login");
        }
    }, [RegisterCompanyReducer.error, RegisterCompanyReducer.message, navigate]);

    const handleUserRegisterRequest = async (e) => {
        e.preventDefault();

        companyName.length < 1
            ? setCompanyNameError("Please enter Company Name")
            : setCompanyNameError("");

        companyEmail.length < 1
            ? setCompanyEmailError("Please enter Company Email")
            : setCompanyEmailError("");

        companyAddress.length < 1
            ? setCompanyAddressError("Please enter Company Address")
            : setCompanyAddressError("");

        companyInterest.length < 1
            ? setCompanyInterestError("Please enter Company Interest")
            : setCompanyInterestError("");

        companyMobileContact.length < 1
            ? setCompanyMobileContactError("Please enter Company Mobile Contact")
            : setCompanyMobileContactError("");

        companyPassword.length < 1
            ? setCompanyPasswordError("Please enter Company Password")
            : setCompanyPasswordError("");

        companyAddress.length > 0 &&
            companyEmail.length > 0 &&
            companyName.length > 0 &&
            companyPassword.length > 0 &&
            companyMobileContact.length > 0 &&
            companyInterest.length > 0 &&


            dispatch(RegisterCompanyDispatcher({ company_name: companyName, company_address: companyAddress, company_area_of_interest: companyInterest, company_mobile_contact: companyMobileContact, company_email_address: companyEmail, company_password: companyPassword }));
    };

    return (
        <Wrapper title="REGISTER COMPANY NOW">
            <form onSubmit={handleUserRegisterRequest}>
                <Input
                    onChange={(e) => setCompanyName(e.target.value)}
                    label={"COMPANY NAME"}
                />
                <ErrorText text={companyNameError} />

                <Input
                    onChange={(e) => setCompanyEmail(e.target.value)}
                    label={"COMPANY EMAIL"}
                />
                <ErrorText text={companyEmailError} />

                <div className="mx-5 my-2">
                    <label
                        className="text-black  mt-1 text-xs"
                        style={{ fontSize: "16px" }}
                    >
                        Company Mobile Contact
                    </label>
                    <ReactTelInput
                        defaultCountry="ng"
                        onChange={(telNumber, selectedCountry) => setCompanyMobileContact(telNumber)}
                    />

                </div>
                <ErrorText text={companyMobileContactError} />


                <Input
                    onChange={(e) => setCompanyAddress(e.target.value)}
                    label={"COMPANY ADDRESSS"}
                />
                <ErrorText text={companyAddressError} />

                <div>
                    <label
                        className="text-black ml-5  mt-1 text-xs"
                        style={{ fontSize: "16px" }}
                    >
                        Company Interest
                    </label>
                    <div className="mx-2 my-0">
                        <Select
                            isMulti
                            onChange={(e) => {
                                setCompanyInterest(e);
                            }}
                            name="COMPANY INTEREST"
                            style={{ width: "100%", flex: "3", backgroundColor: "#E8EEF3" }}
                            options={COMPANY_INTEREST_OPTION}
                            className="basic-multi-select p-2 rounded-sm text-black outline-none"
                            getValue={() => { }}
                        />
                        <ErrorText text={companyInterestError} />
                    </div>
                </div>

                <Input
                    onChange={(e) => setCompanyPassword(e.target.value)}
                    label={"COMPANY PASSWORD"}
                    secured={true}
                />
                <ErrorText text={companyPasswordError} />

                <Button
                    title="REGISTER"
                    disabled={AppLoading}
                    onClick={handleUserRegisterRequest}
                />
            </form>

            <div style={{ padding: 4 }}>
                <Link
                    to="/companies/login"
                    style={{ fontSize: "13px", color: DEFAULT_COLOR }}
                >
                    I already have a registered company?
                </Link>
            </div>
        </Wrapper>
    );
};

export default RegisterCompany;
