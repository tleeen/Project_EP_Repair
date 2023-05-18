import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {getCommitAdmin} from "../../../entities/application";
import {setIsAuth} from "../../authentication";

export function useResponseUser(){

    const isIdUser = useSelector(state => state.idUser.idUser);

    const [valueText, setValueText] = useState("");

    const router = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {comment_admin(); return}, [isIdUser]);

    async function comment_admin() {
        let dat = await getCommitAdmin(isIdUser);
        setValueText(dat.res);
        if (dat.status === 404){
            dispatch(setIsAuth(''));
            router('/page_sign_in');
        }
    }
    return {valueText, router}
}