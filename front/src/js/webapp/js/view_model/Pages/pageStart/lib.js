import {useNavigate} from "react-router";

export function usePageStart(){

    const router = useNavigate();

    return {router}
}