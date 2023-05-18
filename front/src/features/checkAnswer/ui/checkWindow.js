import {Button} from "../../../shared/ui";
import {useResponseUser} from "../model/checkWindow";

export const ResponseUser = () => {

    const {valueText, router} = useResponseUser()

    return (
        <div className="main_2" style={{marginTop: 200}}>
            <div>
                <h1><span>Administrator</span> response</h1>
            </div>
            <br></br>
            <h2 id="response_">{valueText}</h2>
            <Button func = {()=>router("/page_user")} name = "ok delete" text = "Back"></Button>
        </div>
    );
};