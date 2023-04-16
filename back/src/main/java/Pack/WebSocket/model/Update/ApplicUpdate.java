package Pack.WebSocket.model.Update;

import Pack.WebSocket.model.ApiAsync.IApplicAsync.IApplicUpdate;
import Pack.WebSocket.model.ApiAsync.IApplicAsync.IApplicAsync;
import jakarta.ejb.Asynchronous;
import jakarta.ejb.Singleton;
import jakarta.ejb.Startup;


@Startup
@Singleton
public class ApplicUpdate implements IApplicAsync {
  @Asynchronous
  @Override
  public void nextAndUpdate(IApplicUpdate updater) {
      updater.update();
  }
}
