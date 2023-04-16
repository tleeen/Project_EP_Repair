package Pack.model.API.Out;

import Pack.model.API.ObjectData.User;

import java.util.ArrayList;

public interface IRepUsers {
    public void signUpUser(String login, String password);
    public Boolean getUserRegistr(String login);
    public Boolean getUserAuth(String login, String password);
    public Integer GetId(String login);
    public String GetRole(String login);
    public ArrayList<User> GetUsers();
    public void DeleteUser(Integer id_user);
    public void InsertRole(Integer id);
}
