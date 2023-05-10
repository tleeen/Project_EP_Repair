package Pack.application.objectData;

public class Application {
    private  int id;
    private int poz;
    private String topic;
    private String contact;
    private String comment;
    private int id_user;
    private String status;
    private String admin_comment;

    public Application() {
    }

    public int getPoz() {
        return poz;
    }

    public void setPoz(int poz) {
        this.poz = poz;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    public String getStatus() {return status;}

    public void setStatus(String status) {this.status = status;}

    public String getAdmin_comment() {
        return admin_comment;
    }

    public void setAdmin_comment(String admin_comment) {
        this.admin_comment = admin_comment;
    }
}
