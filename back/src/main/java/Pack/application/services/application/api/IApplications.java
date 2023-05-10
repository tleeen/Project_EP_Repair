package Pack.application.services.application.api;


import Pack.application.objectData.Application;
import Pack.application.out.IRepApplications;
import Pack.application.out.IRepUsers;

import java.util.ArrayList;

public interface IApplications {
    void injectRepApplications(IRepApplications dbA);
    void injectRepUsers(IRepUsers dbU);
    void InsertApl(Application application, String login);
    ArrayList<Application> GetApl(String login);
    ArrayList<Application> GetAplAdmin();
    void DeleteApl(String delete);
    void InsertCommentAdmin(Integer id, String com_a);
    String GetCommentAdmin(Integer id);
}
