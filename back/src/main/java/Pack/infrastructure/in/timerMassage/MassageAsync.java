package Pack.infrastructure.in.timerMassage;

import Pack.infrastructure.out.webSocket.MassageSocket;
import jakarta.ejb.Schedule;
import jakarta.ejb.Stateless;

@Stateless
public class MassageAsync {

    @Schedule(second="0", minute="45", hour="17")
    public void execute() {
        MassageSocket.sendAll("15 minutes left until the end of the day");
    }
}
