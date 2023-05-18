package Pack.application.in.services.user.api;


import Pack.application.objectData.User;
import Pack.application.out.user.IRepUsers;

import java.util.ArrayList;

public interface IUser {
    void injectRepUsers(IRepUsers dbU);
    boolean AuthUser(User user);
    boolean CheckUser(User user);
    void RegUser(User user);
    String GetRole(User user);
    void InsertRole(Integer id);
    ArrayList<User> GetUsers();
    void DeleteUser(String delete);
}
