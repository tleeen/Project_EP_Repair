package Pack.infrastructure.in.rest.resourse;

import Pack.application.objectData.User;
import Pack.application.services.user.api.IUser;
import Pack.application.services.userAsync.api.IUsersAsync;
import Pack.infrastructure.builder.Built;
import Pack.infrastructure.in.rest.interceptor.HashRequired;
import Pack.infrastructure.in.rest.token.TokenIssuer;
import Pack.infrastructure.in.rest.token.TokenKey;
import jakarta.inject.Inject;
import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.core.Response;

import java.security.Key;

@Path("/")
public class UserPath {
    @Inject @Built
    private IUsersAsync modelUserAsync;

    @Inject @Built
    IUser modelUser;

    @POST
    @Path("/users/user")
    @Consumes("application/json")
    @Produces("application/json")
    public Response auth(String userJSON)
    {
        Jsonb jsonb = JsonbBuilder.create();
        User user;
        String resultJSON;
        try {
            try {
                user = jsonb.fromJson(userJSON, User.class);
            }
            catch (Exception e) {
                throw new Exception("Error while JSON transforming.");
            }

            String role = modelUser.GetRole(user);

            if (modelUser.AuthUser(user)){
                TokenKey tokenKey = TokenKey.getInstance();
                Key key = tokenKey.getKey();
                TokenIssuer ti = new TokenIssuer(key);
                String jwt = ti.issueToken(user.getLogin(), role);
                user.setHash(jwt);
                user.setRole(role);
            }
            else {
                return Response.status(Response.Status.BAD_REQUEST).build();
            }
            resultJSON = jsonb.toJson(user);
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @POST
    @Path("/users")
    @Consumes("application/json")
    @Produces("application/json")
    public Response reg(String userJSON)
    {
        Jsonb jsonb = JsonbBuilder.create();
        User user;
        String resultJSON;
        try {
            try {
                user = jsonb.fromJson(userJSON, User.class);
            }
            catch (Exception e) {
                throw new Exception("Error while JSON transforming.");
            }

            if(modelUser.CheckUser(user)){
                return Response.status(Response.Status.BAD_REQUEST).build();
            }
            else {
                modelUser.RegUser(user);
                String role = modelUser.GetRole(user);
                TokenKey tokenKey = TokenKey.getInstance();
                Key key = tokenKey.getKey();
                TokenIssuer ti = new TokenIssuer(key);
                String jwt = ti.issueToken(user.getLogin(), role);
                user.setHash(jwt);
                user.setRole(role);

                //IUsersUpdate updater;
                //Counter.send(wsId,"" + value);
                //updater = UsersSocket::sendAll;

                //modelUserAsync.nextAndUpdate(updater);
                modelUserAsync.nextAsync();

            }
            resultJSON = jsonb.toJson(user);
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @POST
    @Path("/user/role")
    @Consumes("application/json")
    @Produces("application/json")
    public Response role(String userJSON)
    {
        Jsonb jsonb = JsonbBuilder.create();
        User user;
        String resultJSON;
        try {
            try {
                user = jsonb.fromJson(userJSON, User.class);
            }
            catch (Exception e) {
                throw new Exception("Error while JSON transforming.");
            }
            String role = modelUser.GetRole(user);
            user.setRole(role);
            resultJSON = jsonb.toJson(user);

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @GET
    @HashRequired
    @Path("/users/admin")
    @Consumes("application/json")
    @Produces("application/json")
    public Response tableUsers()
    {
        Jsonb jsonb = JsonbBuilder.create();
        String resultJSON;
        try {

            resultJSON = jsonb.toJson(modelUser.GetUsers());

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @DELETE
    @HashRequired
    @Path("/users/admin/user")
    @Consumes("application/json")
    @Produces("application/json")
    public Response deletUser(@Context HttpHeaders httpHeaders)
    {
        String delete;

        /*
        IUsersUpdate updater;
        //Counter.send(wsId,"" + value);
        updater = UsersSocket::sendAll;
        modelUserAsync.nextAndUpdate(updater);
         */

        modelUserAsync.nextAsync();

        try {

            delete = httpHeaders.getHeaderString("ARR");

            modelUser.DeleteUser(delete);
            return Response.status(Response.Status.OK).build();

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
    }

    @POST
    @HashRequired
    @Path("/users/user/role")
    @Consumes("application/json")
    @Produces("application/json")
    public Response update_role(String userJSON)
    {
               /*
        IUsersUpdate updater;
        //Counter.send(wsId,"" + value);
        updater = UsersSocket::sendAll;
        modelUserAsync.nextAndUpdate(updater);
         */
        modelUserAsync.nextAsync();


        Jsonb jsonb = JsonbBuilder.create();
        User user;
        String resultJSON;
        try {
            try {
                user = jsonb.fromJson(userJSON, User.class);
            }
            catch (Exception e) {
                throw new Exception("Error while JSON transforming.");
            }

            modelUser.InsertRole(user.getId());
            resultJSON = jsonb.toJson(user);

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }
}
