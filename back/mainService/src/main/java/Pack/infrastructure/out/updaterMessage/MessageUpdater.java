package Pack.infrastructure.out.updaterMessage;
import Pack.application.out.message.UpdateMessage;
import Pack.infrastructure.out.webSocket.MassageSocket;

public class MessageUpdater implements UpdateMessage {
    @Override
    public void messege(String flag) {
        MassageSocket.sendAll(flag);
    }
}
