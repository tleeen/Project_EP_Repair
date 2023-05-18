import React from "react";
import {ListUsers} from "../../entities/user";
import {DeleteUser} from "../../features/deleteUser";
import {UpdateRole} from "../../features/updateRole";
import {useAdminLIstUsers} from "./model";

export const AdminListUsers = () => {
	const {users, valueInp} = useAdminLIstUsers();

	return (
		<div>
			<ListUsers users={users} ValueInp={valueInp}></ListUsers>
			<div className="container-buttons">
				<DeleteUser></DeleteUser>
				<UpdateRole></UpdateRole>
			</div>
		</div>
	)
};