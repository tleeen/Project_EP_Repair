package Pack.application.in.services.timer.api;

import Pack.application.out.timer.InterconnectableTimer;

public interface ITimer {
    void assignInterconnector(InterconnectableTimer interconnectable);
    void message();
}
