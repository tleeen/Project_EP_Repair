package Pack.application.in.services.applicationAsync.impl;


import Pack.application.out.applicationAsync.ExecutableApplication;
import Pack.application.in.services.applicationAsync.api.IApplicAsync;
import Pack.application.out.applicationAsync.UpdateApplication;


public class ApplicationAsync implements IApplicAsync {

    private UpdateApplication updater;
    private ExecutableApplication executor;

    @Override
    public void assignExecutor(ExecutableApplication executor) {
        this.executor = executor;
    }

    @Override
    public void assignUpdate(UpdateApplication updater) {this.updater = updater;}

    @Override
    public void nextAsync() {executor.execute(() -> {updater.update("ws");});}
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
