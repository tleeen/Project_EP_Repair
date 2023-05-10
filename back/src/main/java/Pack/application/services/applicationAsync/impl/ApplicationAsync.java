package Pack.application.services.applicationAsync.impl;


import Pack.application.services.applicationAsync.api.ExecutableApplication;
import Pack.application.services.applicationAsync.api.IApplicAsync;
import Pack.application.services.applicationAsync.api.InterconnectableApplication;
import Pack.application.services.applicationAsync.api.UpdateApplication;


public class ApplicationAsync implements IApplicAsync {

    private UpdateApplication updater;
    private ExecutableApplication executor;
    private InterconnectableApplication interconnector;

    @Override
    public void assignExecutor(ExecutableApplication executor) {
        this.executor = executor;
    }

    @Override
    public void assignUpdate(UpdateApplication updater) {this.updater = updater;}

    @Override
    public void assignInterconnector(InterconnectableApplication interconnector) {this.interconnector = interconnector;}

    @Override
    public void nextAsync() {executor.execute(() -> {updater.update("ws"); interconnector.info("ic");});}

    @Override
    public void info(String flag) {executor.execute(() -> updater.update(flag));}
}

/*@Startup
@Singleton
public class ApplicUpdate implements IApplicAsync {
  @Asynchronous
  @Override
  public void nextAndUpdate(IApplicUpdate updater) {
      updater.update();
  }
}*/
