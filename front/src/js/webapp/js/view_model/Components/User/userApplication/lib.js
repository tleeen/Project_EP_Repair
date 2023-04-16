import {useState} from "react";
import {useNavigate} from "react-router";
//import {useDispatch} from "react-redux";
import {Application} from "../../../../model/appl_model";
import {useDispatcher} from "../../../Store/mobx/api";

export function useUserApplication(){

    const [valueInp, setValueInp] = useState("")

    const [valueBox, setValueBox] = useState("")

    const [valueCheck1, setValueCheck1] = useState(true)
    const [valueCheck2, setValueCheck2] = useState(false)
    const [valueCheck3, setValueCheck3] = useState(false)
    const [valueCheck4, setValueCheck4] = useState(false)

    function check1() {
        setValueCheck1(true);
        setValueCheck2(false);
        setValueCheck3(false);
        setValueCheck4(false)
    }
    function check2() {
        setValueCheck1(false);
        setValueCheck2(true);
        setValueCheck3(false);
        setValueCheck4(false)
    }
    function check3() {
        setValueCheck1(false);
        setValueCheck2(false);
        setValueCheck3(true);
        setValueCheck4(false)
    }
    function check4() {
        setValueCheck1(false);
        setValueCheck2(false);
        setValueCheck3(false);
        setValueCheck4(true)
    }

    const router = useNavigate();

    const dispatchD = useDispatcher("isAuth", "");

    /*const dispatch = useDispatch();

    const setIsAuthDef = () => {
        dispatch({type:"setIsAuth", payload: ""})
    }*/

    //const {isAuth, setIsAuth} = useContext(AuthContext)

    async function add_apl() {
        let inp_topic;
        if(valueCheck1 === true){
            inp_topic = 'Computer Maintenance';
        }
        else if (valueCheck2 === true){
            inp_topic = 'Network Engineering';
        }
        else if (valueCheck3 === true){
            inp_topic = 'Network security and data security';
        }
        else{
            inp_topic = 'Setup server deployment and management';
        }

        let inp_contact = valueInp;
        let inp_comment = valueBox;
        if (inp_topic !== "" && inp_contact !== "" && inp_comment !== "") {

            let application_ = {
                poz: 0,
                topic: inp_topic,
                contact: inp_contact,
                comment: inp_comment,
            };
            let application = new Application();

            application.set(application_)

            let dat = await application.add_aplic(application);

            if (dat.status === 200) {
                setValueInp("");
                setValueBox("");
            } else if (dat.status === 404) {
                //setIsAuth('');
                //setIsAuthDef();
                dispatchD();
                router('/page_sign_in');
            }

        } else {
            alert("Not all fields were filled in");
        }
    }

    return {valueCheck1, valueCheck2, valueCheck3, valueCheck4, check1, check2, check3, check4, valueInp, setValueInp, valueBox, setValueBox, add_apl}
}