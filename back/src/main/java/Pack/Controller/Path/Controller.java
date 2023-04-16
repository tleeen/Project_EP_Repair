package Pack.Controller.Path;

import Pack.Builder.Built;
import Pack.Controller.Interceptor.HashRequired;
import Pack.Controller.Token.TokenIssuer;
import Pack.Controller.Token.TokenKey;
import Pack.WebSocket.model.ApiAsync.IApplicAsync.IApplicAsync;
import Pack.WebSocket.model.ApiAsync.IApplicAsync.IApplicUpdate;
import Pack.WebSocket.model.ApiAsync.IUsersAsync.IUsersAsync;
import Pack.WebSocket.model.ApiAsync.IUsersAsync.IUsersUpdate;
import Pack.WebSocket.model.Websocket.ApplicSocket;
import Pack.WebSocket.model.Websocket.UsersSocket;
import Pack.model.API.ObjectData.Application;
import Pack.model.API.ObjectData.User;
import Pack.model.API.In.IModelUser;
import Pack.model.API.In.IModelApplications;

import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.Consumes;

import jakarta.ws.rs.core.HttpHeaders;


import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.Response;

import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;

import jakarta.inject.Inject;

import java.security.Key;


@Path("/")
public class Controller {
    @Inject
    private IApplicAsync modelApplicAsync;
    @Inject
    private IUsersAsync modelUserAsync;
    @Inject @Built
    IModelUser modelUser;

    @Inject @Built
    IModelApplications modelApplications;
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

                IUsersUpdate updater;
                //Counter.send(wsId,"" + value);
                updater = UsersSocket::sendAll;

                modelUserAsync.nextAndUpdate(updater);
            }
            resultJSON = jsonb.toJson(user);
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @POST
    @HashRequired
    @Path("/applications")
    @Consumes("application/json")
    @Produces("application/json")
    public Response add_ap(String userJSON, @Context HttpHeaders httpHeaders)
    {
        Jsonb jsonb = JsonbBuilder.create();
        Application application;
        String resultJSON;
        try {
            try {
                application = jsonb.fromJson(userJSON, Application.class);
            }
            catch (Exception e) {
                throw new Exception("Error while JSON transforming.");
            }

            String login = httpHeaders.getHeaderString("LOGIN");

            modelApplications.InsertApl(application, login);
            resultJSON = jsonb.toJson(application);

            IApplicUpdate updater;
            //Counter.send(wsId,"" + value);
            updater = ApplicSocket::sendAll;

            modelApplicAsync.nextAndUpdate(updater);

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
    @Path("/applications/user")
    @Consumes("application/json")
    @Produces("application/json")
    public Response tableAppUser(@Context HttpHeaders httpHeaders)
    {
        Jsonb jsonb = JsonbBuilder.create();
        String login;
        String resultJSON;
        try {

            login = httpHeaders.getHeaderString("LOGIN");

            resultJSON = jsonb.toJson(modelApplications.GetApl(login));

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @GET
    @HashRequired
    @Path("/applications/user/admin")
    @Consumes("application/json")
    @Produces("application/json")
    public Response tableAppAdmin()
    {
        Jsonb jsonb = JsonbBuilder.create();
        String resultJSON;
        try {

            resultJSON = jsonb.toJson(modelApplications.GetAplAdmin());

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
    @Path("/applications/user/application")
    @Consumes("application/json")
    @Produces("application/json")
    public Response deletApp(@Context HttpHeaders httpHeaders)
    {
        String delete;

        try {

            delete = httpHeaders.getHeaderString("ARR");

            modelApplications.DeleteApl(delete);

            IApplicUpdate updater;
            //Counter.send(wsId,"" + value);
            updater = ApplicSocket::sendAll;
            modelApplicAsync.nextAndUpdate(updater);

            return Response.status(Response.Status.OK).build();

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
    }

    @DELETE
    @HashRequired
    @Path("/users/admin/user")
    @Consumes("application/json")
    @Produces("application/json")
    public Response deletUser(@Context HttpHeaders httpHeaders)
    {
        String delete;

        IUsersUpdate updater;
        //Counter.send(wsId,"" + value);
        updater = UsersSocket::sendAll;
        modelUserAsync.nextAndUpdate(updater);

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
        IUsersUpdate updater;
        //Counter.send(wsId,"" + value);
        updater = UsersSocket::sendAll;
        modelUserAsync.nextAndUpdate(updater);

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

    @POST
    @HashRequired
    @Path("/applications/application/comm")
    @Consumes("application/json")
    @Produces("application/json")
    public Response add_comment_admin(String userJSON)
    {
        Jsonb jsonb = JsonbBuilder.create();
        Application application;
        String resultJSON;
        try {
            try {
                application = jsonb.fromJson(userJSON, Application.class);
            }
            catch (Exception e) {
                throw new Exception("Error while JSON transforming.");
            }

            modelApplications.InsertCommentAdmin(application.getId(), application.getAdmin_comment());
            resultJSON = jsonb.toJson(application);

            IApplicUpdate updater;
            //Counter.send(wsId,"" + value);
            updater = ApplicSocket::sendAll;

            modelApplicAsync.nextAndUpdate(updater);

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }

    @GET
    @HashRequired
    @Path("/applications/application/comm/user")
    @Consumes("application/json")
    @Produces("application/json")
    public Response get_comment_admin(@Context HttpHeaders httpHeaders)
    {
        Jsonb jsonb = JsonbBuilder.create();
        String resultJSON;
        String id;
        try {
            id = httpHeaders.getHeaderString("ID");
            resultJSON = jsonb.toJson(modelApplications.GetCommentAdmin(Integer.valueOf(id)));

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
        return Response.ok(resultJSON).build();
    }
}