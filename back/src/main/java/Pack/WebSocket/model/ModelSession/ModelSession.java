package Pack.WebSocket.model.ModelSession;

import Pack.WebSocket.model.IModelSession.IModelSession;
import jakarta.websocket.Session;

import java.io.IOException;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;

public class ModelSession implements IModelSession {
    private final static ConcurrentLinkedQueue<Session> queue = new ConcurrentLinkedQueue<>();
    private final static ConcurrentHashMap<String,Session> mapIdSs = new ConcurrentHashMap<>();
    private final static ConcurrentHashMap<Session,String> mapSsId = new ConcurrentHashMap<>();

    public static void sendAll() {
        System.out.println(queue);
        for (Session sess : queue) {
            if (sess.isOpen()) {
                sess.getAsyncRemote().sendObject(true);
            }
        }
    }

    public static void send(String id, String message) {
        try {
            Session session = mapIdSs.get(id);
            if (id!=null) {
                session.getBasicRemote().sendText(message);
            }
        }
        catch (IOException ioe) {
            throw new RuntimeException(ioe);
        }
    }

    @Override
    public void connectionOpened(Session session) {
        queue.add(session);
    }

    @Override
    public void connectionClosed(Session session) {
        queue.remove(session);
        String message = mapSsId.remove(session);
        mapIdSs.remove(message);
    }

    @Override
    public void processMessage(Session session, String message) {
        mapIdSs.put(message, session);
        mapSsId.put(session, message);
    }
}
