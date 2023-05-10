package Pack.application.services.applicationAsync.api;

public interface IApplicAsync {
    void assignUpdate(UpdateApplication updater);
    void assignInterconnector(InterconnectableApplication interconnectable);
    void assignExecutor(ExecutableApplication executor);
    void nextAsync();
    void info(String flag);
}
