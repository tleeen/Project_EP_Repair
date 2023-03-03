package Pack.DB;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

import jakarta.persistence.GenerationType;


import java.io.Serializable;

@Entity
@Table(name = "\"applic\"")
public class EApplic implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"id_user\"")
    private Integer ID;
    @Column(name = "\"poz\"")
    private Integer Poz;
    @Column(name = "\"topic\"")
    private String Topic;
    @Column(name = "\"contact\"")
    private String Contact;
    @Column(name = "\"comment\"")
    private String Comment;
    @Column(name = "\"id\"")
    private Integer Id_user;
    @Column(name = "\"status\"")
    private String Status = "waiting";
    @Column(name = "\"admin_comment\"")
    private String Admin_comment;


    public Integer getPoz() {
        return Poz;
    }

    public void setPoz(Integer poz) {
        Poz = poz;
    }

    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public String getTopic() {
        return Topic;
    }

    public void setTopic(String topic) {
        Topic = topic;
    }

    public String getContact() {
        return Contact;
    }

    public void setContact(String contact) {
        Contact = contact;
    }

    public String getComment() {
        return Comment;
    }

    public void setComment(String comment) {
        Comment = comment;
    }

    public Integer getId_user() {
        return Id_user;
    }

    public void setId_user(Integer id_user) {
        Id_user = id_user;
    }

    public String getStatus() {return Status;}

    public void setStatus(String status) {Status = status;}

    public String getAdmin_comment() {
        return Admin_comment;
    }

    public void setAdmin_comment(String admin_comment) {
        Admin_comment = admin_comment;
    }
}
