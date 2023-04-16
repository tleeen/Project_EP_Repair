package Pack.WebSocket.model.Update;

import Pack.WebSocket.model.ApiAsync.IUsersAsync.IUsersAsync;
import Pack.WebSocket.model.ApiAsync.IUsersAsync.IUsersUpdate;

import jakarta.ejb.Singleton;
import jakarta.ejb.Startup;
import jakarta.ejb.Asynchronous;



@Startup 
@Singleton
public class UsersUpdate implements IUsersAsync {
  @Asynchronous
  @Override
  public void nextAndUpdate(IUsersUpdate updater) {
      updater.update();
  }
}
