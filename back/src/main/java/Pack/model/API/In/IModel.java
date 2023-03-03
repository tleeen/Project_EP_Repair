package Pack.model.API.In;

import Pack.model.API.ObjectData.Application;
import Pack.model.API.Out.IRepUsers;
import Pack.model.API.Out.IRepApplications;

import Pack.model.API.ObjectData.User;

import java.util.ArrayList;

public interface IModel {
    void injectRepUsers(IRepUsers dbU);
    void injectRepApplications(IRepApplications dbA);
    boolean AuthUser(User user);
    boolean CheckUser(User user);
    void RegUser(User user);
    String GetRole(User user);
    void InsertApl(Application application, String login);
    void InsertRole(Integer id);
    void InsertCommentAdmin(Integer id, String com_a);
    String GetCommentAdmin(Integer id);
    ArrayList<Application> GetApl(String login);
    ArrayList<Application> GetAplAdmin();
    ArrayList<User> GetUsers();
    void DeleteApl(String delete);
    void DeleteUser(String delete);
}