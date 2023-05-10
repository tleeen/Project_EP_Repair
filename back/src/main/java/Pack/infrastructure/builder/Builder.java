package Pack.infrastructure.builder;

import Pack.application.out.IRepApplications;
import Pack.application.out.IRepUsers;
import Pack.application.services.application.api.IApplications;
import Pack.application.services.applicationAsync.api.ExecutableApplication;
import Pack.application.services.applicationAsync.api.IApplicAsync;
import Pack.application.services.applicationAsync.api.InterconnectableApplication;
import Pack.application.services.applicationAsync.api.UpdateApplication;
import Pack.application.services.user.api.IUser;
import Pack.application.services.userAsync.api.ExecutableUser;
import Pack.application.services.userAsync.api.IUsersAsync;
import Pack.application.services.userAsync.api.InterconnectableUser;
import Pack.application.services.userAsync.api.UpdateUser;

import jakarta.enterprise.inject.Default;
import jakarta.enterprise.inject.Produces;
import jakarta.inject.Inject;

public class Builder {

    @Inject @Default
    private IApplicAsync ApllicationAsync;

    @Inject @Default
    private ExecutableApplication executorA;

    @Inject @Default
    private UpdateApplication updaterA;

    @Inject @Default
    private InterconnectableApplication interconnectorA;

    @Produces @Built
    public IApplicAsync buildA() {
        ApllicationAsync.assignExecutor(executorA);
        ApllicationAsync.assignUpdate(updaterA);
        ApllicationAsync.assignInterconnector(interconnectorA);
        return ApllicationAsync;
    }

    @Inject @Default
    private IUsersAsync UserAsync;

    @Inject @Default
    private ExecutableUser executorU;

    @Inject @Default
    private UpdateUser updaterU;

    @Inject @Default
    private InterconnectableUser interconnectorU;

    @Produces @Built
    IUsersAsync buildU() {
        UserAsync.assignExecutor(executorU);
        UserAsync.assignUpdate(updaterU);
        UserAsync.assignInterconnector(interconnectorU);
        return UserAsync;
    }



    @Inject @Default
    private IUser modelUser;

    @Inject @Default
    private IApplications modelApplications;

    @Inject @Default
    private IRepUsers dbU;

    @Inject @Default
    private IRepApplications dbA;

    @Produces @Built
    public IUser buildModelUser() {
        modelUser.injectRepUsers(dbU);
        return modelUser;
    }

    @Produces @Built
    public IApplications buildModelApplications() {
        modelApplications.injectRepApplications(dbA);
        modelApplications.injectRepUsers(dbU);
        return modelApplications;
    }
}
