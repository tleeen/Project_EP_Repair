package Pack.infrastructure.builder;

import Pack.application.out.application.IRepApplications;
import Pack.application.out.user.IRepUsers;
import Pack.application.in.services.application.api.IApplications;
import Pack.application.out.applicationAsync.ExecutableApplication;
import Pack.application.in.services.applicationAsync.api.IApplicAsync;
import Pack.application.out.applicationAsync.UpdateApplication;
import Pack.application.in.services.user.api.IUser;
import Pack.application.out.userAsync.ExecutableUser;
import Pack.application.in.services.userAsync.api.IUsersAsync;
import Pack.application.out.userAsync.UpdateUser;

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

    @Produces @Built
    public IApplicAsync buildA() {
        ApllicationAsync.assignExecutor(executorA);
        ApllicationAsync.assignUpdate(updaterA);
        return ApllicationAsync;
    }

    @Inject @Default
    private IUsersAsync UserAsync;

    @Inject @Default
    private ExecutableUser executorU;

    @Inject @Default
    private UpdateUser updaterU;

    @Produces @Built
    IUsersAsync buildU() {
        UserAsync.assignExecutor(executorU);
        UserAsync.assignUpdate(updaterU);
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
