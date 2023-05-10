package Pack.infrastructure.in.rest.resourse;

import Pack.application.objectData.Application;
import Pack.application.services.application.api.IApplications;
import Pack.application.services.applicationAsync.api.IApplicAsync;
import Pack.infrastructure.builder.Built;
import Pack.infrastructure.in.rest.interceptor.HashRequired;
import jakarta.inject.Inject;
import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.core.Response;


@Path("/")
public class ApplicationPath {

    @Inject @Built
    private IApplicAsync modelApplicAsync;

    @Inject @Built
    IApplications modelApplications;

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

            //IApplicUpdate updater;
            //Counter.send(wsId,"" + value);
            //updater = ApplicSocket::sendAll;

            //modelApplicAsync.nextAndUpdate(updater);

            modelApplicAsync.nextAsync();

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

            /*
            IApplicUpdate updater;
            //Counter.send(wsId,"" + value);
            updater = ApplicSocket::sendAll;
            modelApplicAsync.nextAndUpdate(updater);

             */
            modelApplicAsync.nextAsync();

            return Response.status(Response.Status.OK).build();

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e.getMessage()).build();
        }
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

 /*
            IApplicUpdate updater;
            //Counter.send(wsId,"" + value);
            updater = ApplicSocket::sendAll;
            modelApplicAsync.nextAndUpdate(updater);


             */
            modelApplicAsync.nextAsync();

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
