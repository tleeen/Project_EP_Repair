package Pack.Builder;

import Pack.model.API.In.IModelApplications;
import Pack.model.API.In.IModelUser;
import Pack.model.API.Out.IRepApplications;
import Pack.model.API.Out.IRepUsers;

import jakarta.inject.Inject;

import jakarta.enterprise.inject.Produces;
import jakarta.enterprise.inject.Default;

public class Builder {
    @Inject @Default
    private IModelUser modelUser;

    @Inject @Default
    private IModelApplications modelApplications;

    @Inject @Default
    private IRepUsers dbU;

    @Inject @Default
    private IRepApplications dbA;

    @Produces @Built
    public IModelUser buildModelUser() {
        modelUser.injectRepUsers(dbU);
        return modelUser;
    }

    @Produces @Built
    public IModelApplications buildModelApplications() {
        modelApplications.injectRepApplications(dbA);
        modelApplications.injectRepUsers(dbU);
        return modelApplications;
    }
}
