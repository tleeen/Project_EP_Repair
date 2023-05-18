package Pack.infrastructure.builder;

import Pack.application.in.services.timer.api.ITimer;
import Pack.application.out.timer.InterconnectableTimer;
import jakarta.enterprise.inject.Default;
import jakarta.enterprise.inject.Produces;
import jakarta.inject.Inject;

public class Builder {

    @Inject @Default
    private ITimer Timer;

    @Inject @Default
    private InterconnectableTimer interconnector;

    @Produces @Built
    public ITimer build() {
        Timer.assignInterconnector(interconnector);
        return Timer;
    }
}
