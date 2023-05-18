package Pack.application.out.application;

import Pack.application.objectData.Application;

import java.util.ArrayList;

public interface IRepApplications {
    public void InsertApplication(Integer id_user, Integer applic_poz, String applic_topic, String applic_contavt, String applic_comment);
    public Integer GetPoz(Integer id_user);
    public void DeleteApplication(Integer id_application);
    public ArrayList<Application> GetApplication(Integer id_user);
    public ArrayList<Application> GetApplicationAdmin();
    public void InsertCommentAdmin(Integer id, String com_a);
    public String GetCommentAdmin(Integer id);
}
