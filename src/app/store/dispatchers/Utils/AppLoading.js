import { APP_NOT_LOADING } from "../../Actions/Utils/AppLoading"
import { APP_LOADING } from "../../Actions/Utils/AppLoading"




const AppLoadingDispatcher = (state)=>((dispatch)=>{state ? dispatch({type: APP_LOADING}) :dispatch({ type: APP_NOT_LOADING});}
);


export default AppLoadingDispatcher;