import React from 'react';
import Button from "../button/ui";
import {useTable} from "./lib";

const Table = ({ error, applic, posts, firstwordh1, secondwordh1, classname, namebt1, namebt2, func1, func2, onChange}) => {

    const {value, checkElem} = useTable();

    return (
        <div className="main_2">
            <div>
                <h1><span>{firstwordh1}</span> {secondwordh1}</h1>
                <table className={classname} align="center">
                    <tr>
                        {posts.map((post) =>
                            <th key={post.id}>{post.name}</th>)}
                    </tr>

                    {applic.map((applicat) =>
                        <tr className={value.includes(applicat.id) ? "back" : "applicat"} key={applicat.id} onChange={onChange(value)} onClick={() => checkElem(applicat.id)}>
                            {applicat.appl.map((elem)=>
                                <th >{elem.name}</th>
                            )}
                        </tr>
                    )}

                </table>
                <br></br>
                <h5 className="massage" style= {{color: "#ea4c88"}}>{error}</h5>
                <div className="container-buttons">
                    <Button func = {()=>func1()} name = " delete" text = {namebt1}></Button>
                    <Button func = {()=>func2()} name = " delete" text = {namebt2}></Button>
                </div>
            </div>
        </div>
    );
};

/*{applic.map((appl) =>
    <tr className="applicat">
        <th className="aaa">{appl.id}</th>
        <th>{appl.nomer}</th>
        <th>{appl.topic}</th>
        <th>{appl.contact}</th>
        <th>{appl.comment}</th>
        <th>{appl.status}</th>
    </tr>
)}

{applic.map((appl) =>
                        <tr className={value.includes(appl.id) ? "back" : "applicat"} key={appl.id} onChange={onChange(value)} onClick={() => checkElem(appl.id)}>
                            <th className="aaa">{appl.id}</th>
                            <th>{appl.nomer}</th>
                            <th>{appl.topic}</th>
                            <th>{appl.contact}</th>
                            <th>{appl.comment}</th>
                            <th>{appl.status}</th>
                        </tr>
                    )}
*/
export default Table;