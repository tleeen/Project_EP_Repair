package Pack.infrastructure.out.executor;



import Pack.application.out.userAsync.ExecutableUser;
import jakarta.annotation.Resource;
import jakarta.enterprise.concurrent.ManagedExecutorService;


public class ExecutorUser implements ExecutableUser {
  
  @Resource
  private ManagedExecutorService mes;
  

  @Override
  public void execute(Runnable thread) {            
    mes.execute(thread);
  }  
      
}
