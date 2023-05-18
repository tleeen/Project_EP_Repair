package Pack.application.in.services.application.impl;

import Pack.application.in.services.application.api.IApplications;
import Pack.application.out.application.IRepApplications;
import Pack.application.out.user.IRepUsers;

import java.util.ArrayList;

public class Application implements IApplications {
    IRepApplications dbA;
    IRepUsers dbU;
    @Override
    public void injectRepApplications(IRepApplications dbA) {
        this.dbA = dbA;
    }

    @Override
    public void injectRepUsers(IRepUsers dbU) {
        this.dbU = dbU;
    }

    @Override
    public void InsertApl(Pack.application.objectData.Application application, String login){
        dbA.InsertApplication(dbU.GetId(login), dbA.GetPoz(dbU.GetId(login)), application.getTopic(), application.getContact(), application.getComment());
    }

    @Override
    public void InsertCommentAdmin(Integer id, String com_a){dbA.InsertCommentAdmin(id, com_a);}

    @Override
    public String GetCommentAdmin(Integer id){return dbA.GetCommentAdmin(id);}

    @Override
    public ArrayList<Pack.application.objectData.Application> GetApl(String login){
        return dbA.GetApplication(dbU.GetId(login));
    }

    @Override
    public ArrayList<Pack.application.objectData.Application> GetAplAdmin(){
        return dbA.GetApplicationAdmin();
    }

    @Override
    public void DeleteApl(String delete){
        String[] a = delete.split(" ");
        for (String strings : a) {
            dbA.DeleteApplication(Integer.parseInt(strings));
        }
    }
}
