package Pack.model.Models;

import Pack.model.API.In.IModelUser;
import Pack.model.API.ObjectData.User;
import Pack.model.API.Out.IRepUsers;

import java.util.ArrayList;

public class ModelUser implements IModelUser {
    IRepUsers dbU;

    @Override
    public void injectRepUsers(IRepUsers dbU) {
        this.dbU = dbU;
    }

    @Override
    public boolean AuthUser(User user){
        return dbU.getUserAuth(user.getLogin(), user.getPass());
    }

    @Override
    public boolean CheckUser(User user){
        return dbU.getUserRegistr(user.getLogin());
    }

    @Override
    public void RegUser(User user){
        dbU.signUpUser(user.getLogin(), user.getPass());
    }

    @Override
    public String GetRole(User user){return dbU.GetRole(user.getLogin());}

    @Override
    public void InsertRole(Integer id){dbU.InsertRole(id);}

    @Override
    public ArrayList<User> GetUsers(){
        return dbU.GetUsers();
    }

    @Override
    public void DeleteUser(String delete){
        String[] a = delete.split(" ");
        for (String strings : a) {
            dbU.DeleteUser(Integer.parseInt(strings));
        }
    }
}
