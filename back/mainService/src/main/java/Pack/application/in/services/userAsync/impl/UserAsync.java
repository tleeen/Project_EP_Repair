package Pack.application.in.services.userAsync.impl;

import Pack.application.in.services.userAsync.api.IUsersAsync;
import Pack.application.out.userAsync.ExecutableUser;
import Pack.application.out.userAsync.UpdateUser;


public class UserAsync implements IUsersAsync {

    private UpdateUser updater;
    private ExecutableUser executor;

    @Override
    public void assignExecutor(ExecutableUser executor) {
        this.executor = executor;
    }

    @Override
    public void assignUpdate(UpdateUser updater) {this.updater = updater;}

    @Override
    public void nextAsync() {executor.execute(() -> {updater.update("ws");});}

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
