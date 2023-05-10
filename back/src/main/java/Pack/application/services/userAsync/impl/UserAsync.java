package Pack.application.services.userAsync.impl;

import Pack.application.services.userAsync.api.ExecutableUser;
import Pack.application.services.userAsync.api.InterconnectableUser;
import Pack.application.services.userAsync.api.UpdateUser;
import Pack.application.services.userAsync.api.IUsersAsync;


public class UserAsync implements IUsersAsync {

    private UpdateUser updater;
    private ExecutableUser executor;
    private InterconnectableUser interconnector;

    @Override
    public void assignExecutor(ExecutableUser executor) {
        this.executor = executor;
    }

    @Override
    public void assignInterconnector(InterconnectableUser interconnector) {this.interconnector = interconnector;}

    @Override
    public void assignUpdate(UpdateUser updater) {this.updater = updater;}

    @Override
    public void nextAsync() {executor.execute(() -> {updater.update("ws"); interconnector.info("ic");});}

    @Override
    public void info(String flag) {executor.execute(() -> updater.update(flag));}
}

/*@Startup
@Singleton
public class UsersUpdate implements IUsersAsync {
  @Asynchronous
  @Override
  public void nextAndUpdate(IUsersUpdate updater) {
      updater.update();
  }
}*/
