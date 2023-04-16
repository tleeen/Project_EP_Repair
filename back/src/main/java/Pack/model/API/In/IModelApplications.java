package Pack.model.API.In;

import Pack.model.API.ObjectData.Application;
import Pack.model.API.Out.IRepApplications;
import Pack.model.API.Out.IRepUsers;

import java.util.ArrayList;

public interface IModelApplications {
    void injectRepApplications(IRepApplications dbA);
    void injectRepUsers(IRepUsers dbU);
    void InsertApl(Application application, String login);
    ArrayList<Application> GetApl(String login);
    ArrayList<Application> GetAplAdmin();
    void DeleteApl(String delete);
    void InsertCommentAdmin(Integer id, String com_a);
    String GetCommentAdmin(Integer id);
}
