package Pack.infrastructure.out.executor;

import Pack.application.out.applicationAsync.ExecutableApplication;
import jakarta.annotation.Resource;
import jakarta.enterprise.concurrent.ManagedExecutorService;


public class ExecutorApplication implements ExecutableApplication {
  
  @Resource
  private ManagedExecutorService mes;

  @Override
  public void execute(Runnable thread) {            
    mes.execute(thread);
  }  
      
}
