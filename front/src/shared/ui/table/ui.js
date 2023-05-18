import React from 'react';
import {useTable} from "./model";

export const Table = ({applic, posts, firstwordh1, secondwordh1, classname}) => {

    const {value, checkElem, valueError} = useTable();

    return (
        <div className="main_2">
                <h1><span>{firstwordh1}</span> {secondwordh1}</h1>
                <table className={classname} align="center">
                    <tr>
                        {posts.map((post) =>
                            <th key={post.id}>{post.name}</th>)}
                    </tr>

                    {applic.map((applicat) =>
                        <tr className={value.includes(applicat.id) ? "back" : "applicat"} key={applicat.id} onClick={() => checkElem(applicat.id)}>
                            {applicat.appl.map((elem)=>
                                <th >{elem.name}</th>
                            )}
                        </tr>
                    )}

                </table>
                <br></br>
                <h5 className="massage" style= {{color: "#ea4c88"}}>{valueError}</h5>
            </div>
    );
};