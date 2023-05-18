package Pack.application.in.services.timer.impl;

import Pack.application.in.services.timer.api.ITimer;
import Pack.application.out.timer.InterconnectableTimer;

public class Timer implements ITimer {
    private InterconnectableTimer interconnector;

    @Override
    public void assignInterconnector(InterconnectableTimer interconnector) {this.interconnector = interconnector;}

    @Override
    public void message(){interconnector.message("15 minutes left until the end of the day");};
}
