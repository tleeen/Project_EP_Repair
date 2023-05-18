import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {addCommitAdmin, Application} from "../../../entities/application";
import {setIsAuth} from "../../authentication";

export function useRespondApplication(){

    const [valueText, setValueText] = useState("");

    const isIdAdmin = useSelector(state => state.idAdmin.idAdmin);

    const router = useNavigate();

    const dispatch = useDispatch();

    async function comment_admin() {
        let application = new Application();
        application.set({
            id: isIdAdmin,
            admin_comment: valueText,
        });
        let dat = await addCommitAdmin(application);
        setValueText('');
        router('/page_admin');

        if (dat.status === 404){
            dispatch(setIsAuth(''));
            router('/page_sign_in');
        }
    }
    return {valueText, setValueText, comment_admin}
}