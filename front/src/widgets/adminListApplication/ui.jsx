import React from "react";
import {useAdminListApplication} from "./model";
import {ListApplications} from "../../entities/application";
import {DeleteApplication} from "../../features/deleteApplication";
import {OpenRespondApplication} from "../../features/respondApplicatuion";

export const AdminListApplications = () => {
	const {applications, ValueInp} = useAdminListApplication();

	return (
		<div>
			<ListApplications applications={applications} check={"admin"} ValueInp={ValueInp}></ListApplications>
			<div className="container-buttons">
				<DeleteApplication></DeleteApplication>
				<OpenRespondApplication></OpenRespondApplication>
			</div>
		</div>
	)
};