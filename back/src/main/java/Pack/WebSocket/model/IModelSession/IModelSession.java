package Pack.WebSocket.model.IModelSession;

import jakarta.websocket.Session;

import java.util.concurrent.ConcurrentLinkedQueue;

public interface IModelSession {
    void connectionOpened(Session session);
    void connectionClosed(Session session);
    void processMessage(Session session, String message);
}
