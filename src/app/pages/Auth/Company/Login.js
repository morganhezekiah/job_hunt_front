import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../misc/Button";
import Input from "../../../misc/Input";
import Wrapper from "./../Wrapper";
import { Link } from "react-router-dom";
import ErrorText from "../../../misc/ErrorText";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import LoginCompanyDispatcher, {
    resetLoginCompanyStoreState,
} from "../../../store/dispatchers/Auth/Company/Login";
import { GET_USER_SLUG } from "../../../misc/helpers/authTokenManager";
import { DEFAULT_COLOR } from "../../../misc/__colors__";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const AppLoading = useSelector((state) => state.AppLoadingReducer.loading);
    const LoginCompanyReducer = useSelector((state) => state.LoginCompanyReducer);
    const inputRef = useRef();


    const [companyEmail, setCompanyEmail] = useState("");
    const [companyPassword, setCompanyPassword] = useState("");
    const [companyEmailError, setCompanyEmailError] = useState("");
    const [companyPasswordError, setCompanyPasswordError] = useState("");
    const [seePassword, setSeePassword] = useState(false);

    useEffect(() => {
        console.log(inputRef.current);
    }, []);




    useEffect(() => {
        const fetchUserToken = async () => {
            const token = await GET_USER_SLUG();
            token !== null && token.length > 1 && navigate("/users/dashboard");
        }

        fetchUserToken()
    }, [navigate])

    useEffect(() => {
        if (LoginCompanyReducer.message.length > 0) {
            LoginCompanyReducer.error
                ? toast.error(LoginCompanyReducer.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                : toast.success(LoginCompanyReducer.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            if (!LoginCompanyReducer.error) {
                dispatch(resetLoginCompanyStoreState());
                navigate("/companies/dashboard");
            }
        }
    }, [LoginCompanyReducer]);

    const handleCompanyLogin = async (e) => {
        e.preventDefault();

        companyEmail.length < 1 ? setCompanyEmailError("Please enter Company Email") : setCompanyEmailError("");
        

        companyPassword.length < 1 ? setCompanyPasswordError("Please enter Company Password") : setCompanyPasswordError("");

        companyPassword.length > 0 && companyEmail.length > 0 && dispatch(LoginCompanyDispatcher({ company_email: companyEmail, company_password: companyPassword }));
    };

    return (
        <Wrapper title="LOGIN TO COMPANY ACCOUNT">
            <form onSubmit={handleCompanyLogin}>
                <Input
                    value={companyEmail}
                    onChange={(e) => setCompanyEmail(e.target.value)}
                    label={"Email"}
                    ref={inputRef}
                />
                <ErrorText text={companyEmailError} />
                <Input
                    value={companyPassword}
                    secured={!seePassword}
                    seePasswordRequest={() => setSeePassword(!seePassword)}
                    onChange={(e) => setCompanyPassword(e.target.value)}
                    label={"Password"}
                />
                <ErrorText text={companyPasswordError} />
                <Button
                    disabled={AppLoading}
                    onClick={handleCompanyLogin}
                    title="Login"
                />
            </form>

            <div style={{ padding: 4 }}>
                <Link
                    to="/companies/register"
                    style={{ fontSize: "13px", color: DEFAULT_COLOR }}
                >
                    I dont have a Company account?
                </Link>

                <Link
                    to="/users/forgot-password"
                    style={{ fontSize: "13px", color: DEFAULT_COLOR, float: "right" }}
                >
                    I forgot my password?
                </Link>
            </div>
        </Wrapper>
    );
};

export default Login;
