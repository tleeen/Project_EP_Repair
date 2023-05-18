package Pack.infrastructure.in;

import Pack.application.in.services.timer.api.ITimer;
import Pack.infrastructure.builder.Built;
import jakarta.ejb.Schedule;
import jakarta.ejb.Stateless;
import jakarta.inject.Inject;

@Stateless
public class Timer {

    @Inject @Built
    private ITimer Timer;

    @Schedule(second="0", minute="45", hour="17")
    public void Message(){Timer.message();}
}
