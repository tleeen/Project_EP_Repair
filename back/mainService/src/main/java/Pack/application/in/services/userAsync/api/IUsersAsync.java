package Pack.application.in.services.userAsync.api;

import Pack.application.out.userAsync.ExecutableUser;
import Pack.application.out.userAsync.UpdateUser;

public interface IUsersAsync {
    void assignUpdate(UpdateUser updater);
    void assignExecutor(ExecutableUser executor);
    void nextAsync();
}
