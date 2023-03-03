package Pack.Builder;

import Pack.model.API.Out.IRepApplications;
import Pack.model.API.Out.IRepUsers;

import Pack.model.API.In.IModel;

import jakarta.inject.Inject;

import jakarta.enterprise.inject.Produces;
import jakarta.enterprise.inject.Default;

public class Builder {
    @Inject @Default
    private IModel model;

    @Inject @Default
    private IRepUsers dbU;

    @Inject @Default
    private IRepApplications dbA;

    @Produces @Built
    public IModel buildModel() {
        model.injectRepUsers(dbU);
        model.injectRepApplications(dbA);
        return model;
    }
}
