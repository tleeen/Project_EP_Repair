package Pack.model.API.In;


import Pack.model.API.Out.IRepUsers;

import Pack.model.API.ObjectData.User;

import java.util.ArrayList;

public interface IModelUser {
    void injectRepUsers(IRepUsers dbU);
    boolean AuthUser(User user);
    boolean CheckUser(User user);
    void RegUser(User user);
    String GetRole(User user);
    void InsertRole(Integer id);
    ArrayList<User> GetUsers();
    void DeleteUser(String delete);
}
