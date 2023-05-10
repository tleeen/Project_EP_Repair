package Pack.infrastructure.out.webSocket;

import Pack.application.services.userAsync.api.UpdateUser;

public class UserUpdater implements UpdateUser {
    @Override
    public void update(String flag){UsersSocket.sendAll(flag);}
}
