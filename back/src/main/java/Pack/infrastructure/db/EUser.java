package Pack.infrastructure.db;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "\"users_\"")
public class EUser implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "\"id\"")
    private Integer ID;
    @Column(name = "\"login\"")
    private String Login;
    @Column(name = "\"password\"")
    private String Password;
    @Column(name = "\"role\"")
    private String Role = "user";

    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public String getLogin() {
        return Login;
    }

    public void setLogin(String login) {
        Login = login;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getRole() {return Role;}

    public void setRole(String role) {Role = role;}
}
