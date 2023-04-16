
package Pack.WebSocket.model.Websocket;

import java.io.IOException;

import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.ConcurrentHashMap;


@ServerEndpoint("/userasync")
public class UsersSocket {

  
  private final static ConcurrentLinkedQueue<Session> queue = new ConcurrentLinkedQueue<>();
  private final static ConcurrentHashMap<String,Session> mapIdSs = new ConcurrentHashMap<>(); 
  private final static ConcurrentHashMap<Session,String> mapSsId = new ConcurrentHashMap<>(); 
  
  public static void sendAll() {
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
    
  @OnOpen
  public void connectionOpened(Session session) {
       queue.add(session); 
  }    
  
  @OnClose
  public void connectionClosed(Session session) {
      queue.remove(session);
      String message = mapSsId.remove(session);
      mapIdSs.remove(message);
  }
  
  @OnMessage
  public void processMessage(Session session, String message) {
      mapIdSs.put(message, session);
      mapSsId.put(session, message);
  }
      
}
