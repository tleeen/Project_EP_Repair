package Pack.infrastructure.out.webSocket;

import Pack.application.out.applicationAsync.UpdateApplication;

public class ApplicationUpdater implements UpdateApplication {

    @Override
    public void update(String flag){ ApplicSocket.sendAll(flag);}
}
