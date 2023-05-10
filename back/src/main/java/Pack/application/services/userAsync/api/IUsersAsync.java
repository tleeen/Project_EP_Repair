package Pack.application.services.userAsync.api;

public interface IUsersAsync {
    void assignUpdate(UpdateUser updater);

    void assignInterconnector(InterconnectableUser interconnectable);
    void assignExecutor(ExecutableUser executor);
    void nextAsync();
    void info(String flag);
}
