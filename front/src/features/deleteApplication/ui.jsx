import {Button} from "../../shared/ui";
import React from "react";
import {useDeleteApplication} from "./model";

export const DeleteApplication = () => {

	const {deleteApplications} = useDeleteApplication();

	return (
		<Button func = {()=>deleteApplications()} name = " delete" text = {"Delete"}></Button>
	);
};