package Pack.application.in.services.applicationAsync.api;

import Pack.application.out.applicationAsync.ExecutableApplication;
import Pack.application.out.applicationAsync.UpdateApplication;

public interface IApplicAsync {
    void assignUpdate(UpdateApplication updater);
    void assignExecutor(ExecutableApplication executor);
    void nextAsync();
}
