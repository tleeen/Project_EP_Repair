import {ListApplications} from "../../entities/application";
import {useUserListApplication} from "./model";
import React from "react";
import {DeleteApplication} from "../../features/deleteApplication";
import {OpenCheckWindow} from "../../features/checkAnswer";

export const UserListApplications = () => {

	const {applications, ValueInp} = useUserListApplication();

	return (
		<div>
		<ListApplications applications={applications} check={"user"} ValueInp={ValueInp}></ListApplications>
		<div className="container-buttons">
			<DeleteApplication></DeleteApplication>
			<OpenCheckWindow></OpenCheckWindow>
		</div>
		</div>
	)
};