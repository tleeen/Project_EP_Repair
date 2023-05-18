package Pack.application.in.services.user.impl;

import Pack.application.in.services.user.api.IUser;
import Pack.application.out.user.IRepUsers;

import java.util.ArrayList;

public class User implements IUser {
    IRepUsers dbU;

    @Override
    public void injectRepUsers(IRepUsers dbU) {
        this.dbU = dbU;
    }

    @Override
    public boolean AuthUser(Pack.application.objectData.User user){
        return dbU.getUserAuth(user.getLogin(), user.getPass());
    }

    @Override
    public boolean CheckUser(Pack.application.objectData.User user){
        return dbU.getUserRegistr(user.getLogin());
    }

    @Override
    public void RegUser(Pack.application.objectData.User user){
        dbU.signUpUser(user.getLogin(), user.getPass());
    }

    @Override
    public String GetRole(Pack.application.objectData.User user){return dbU.GetRole(user.getLogin());}

    @Override
    public void InsertRole(Integer id){dbU.InsertRole(id);}

    @Override
    public ArrayList<Pack.application.objectData.User> GetUsers(){
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
