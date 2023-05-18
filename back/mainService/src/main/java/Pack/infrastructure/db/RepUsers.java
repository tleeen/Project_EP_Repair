package Pack.infrastructure.db;

import Pack.application.objectData.User;
import Pack.application.out.user.IRepUsers;
import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.PersistenceUnit;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Stateless
public class RepUsers implements IRepUsers {
    @PersistenceUnit(unitName = "local_pg_test_PersistenceUnit")
    private EntityManagerFactory entityManagerFactory;

    @Override
    public void signUpUser(String login, String password){

        EntityManager entityManager;
        try {
            entityManager = entityManagerFactory.createEntityManager();
        }
        catch (Exception e) {
            try {
                throw new Exception("Error while Entity Manager initializing: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }

        try {
            entityManager.joinTransaction();

            EUser user = new EUser();
            user.setLogin(login);
            user.setPassword(password);

            entityManager.persist(user);

        }
        catch (Exception e) {
            try {
                throw new Exception("Error while JPA operating: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
    }

    @Override
    public Boolean getUserRegistr(String login) {

        EntityManager entityManager;
        try {
            entityManager = entityManagerFactory.createEntityManager();
        }
        catch (Exception e) {
            try {
                throw new Exception("Error while Entity Manager initializing: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
        try {
            entityManager.joinTransaction();

            List<EUser> users = entityManager.createQuery("SELECT p FROM EUser p WHERE p.Login ='" + login + "'", EUser.class).getResultList();

            System.out.println(!users.isEmpty());

            return users.size() == 1;

        }
        catch (Exception e) {
            try {
                throw new Exception("Error while JPA operating: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
    }

    @Override
    public Boolean getUserAuth(String login, String password) {

        EntityManager entityManager;
        try {
            entityManager = entityManagerFactory.createEntityManager();
        }
        catch (Exception e) {
            try {
                throw new Exception("Error while Entity Manager initializing: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
        try {
            entityManager.joinTransaction();

            List<EUser> users = entityManager.createQuery("SELECT p FROM EUser p WHERE p.Login ='" + login + "' AND p.Password ='" + password + "'", EUser.class).getResultList();

            System.out.println(!users.isEmpty());

            return users.size() == 1;

        }
        catch (Exception e) {
            try {
                throw new Exception("Error while JPA operating: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
    }

    @Override
    public Integer GetId(String login) {

        EntityManager entityManager;
        try {
            entityManager = entityManagerFactory.createEntityManager();
        }
        catch (Exception e) {
            try {
                throw new Exception("Error while Entity Manager initializing: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
        try {
            entityManager.joinTransaction();

            List<EUser> users = entityManager.createQuery("SELECT p FROM EUser p WHERE p.Login ='" + login + "'", EUser.class).getResultList();


            return users.get(0).getID();

        }
        catch (Exception e) {
            try {
                throw new Exception("Error while JPA operating: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
    }

    @Override
    public String GetRole(String login) {

        EntityManager entityManager;
        try {
            entityManager = entityManagerFactory.createEntityManager();
        }
        catch (Exception e) {
            try {
                throw new Exception("Error while Entity Manager initializing: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
        try {
            entityManager.joinTransaction();

            List<EUser> users = entityManager.createQuery("SELECT p FROM EUser p WHERE p.Login ='" + login + "'", EUser.class).getResultList();

            return users.get(0).getRole();

        }
        catch (Exception e) {
            try {
                throw new Exception("Error while JPA operating: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
    }

    @Override
    public ArrayList<User> GetUsers() {

        EntityManager entityManager;
        try {
            entityManager = entityManagerFactory.createEntityManager();
        }
        catch (Exception e) {
            try {
                throw new Exception("Error while Entity Manager initializing: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }

        ArrayList<User> a = new ArrayList<>();

        try {
            entityManager.joinTransaction();

            List<EUser> USERS = entityManager.createQuery("SELECT p FROM EUser p", EUser.class).getResultList();


            for (EUser USER:
                    USERS) {
                User user = new User();
                user.setId(USER.getID());
                user.setLogin(USER.getLogin());
                user.setPass(USER.getPassword());
                user.setRole(USER.getRole());
                a.add(user);
            }

        }
        catch (Exception e) {
            try {
                throw new Exception("Error while JPA operating: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
        return a;
    }

    @Override
    public void DeleteUser(Integer id_user) {

        EntityManager entityManager;
        try {
            entityManager = entityManagerFactory.createEntityManager();
        }
        catch (Exception e) {
            try {
                throw new Exception("Error while Entity Manager initializing: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }

        try {
            entityManager.joinTransaction();

            entityManager.createQuery("DELETE FROM EUser p WHERE p.ID ='" + id_user + "'").executeUpdate();
            entityManager.createQuery("DELETE FROM EApplic p WHERE p.Id_user ='" + id_user + "'").executeUpdate();


        }
        catch (Exception e) {
            try {
                throw new Exception("Error while JPA operating: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
    }

    @Override
    public void InsertRole(Integer id) {

        EntityManager entityManager;
        try {
            entityManager = entityManagerFactory.createEntityManager();
        }
        catch (Exception e) {
            try {
                throw new Exception("Error while Entity Manager initializing: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }

        try {
            entityManager.joinTransaction();

            List<EUser> users = entityManager.createQuery("SELECT p FROM EUser p WHERE p.ID ='" + id + "'", EUser.class).getResultList();



            entityManager.joinTransaction();

            if(Objects.equals(users.get(0).getRole(), "user")){
                entityManager.createQuery("UPDATE EUser p SET p.Role ='" + "admin" + "' WHERE p.ID='" + id + "'").executeUpdate();
            }
            else{
                entityManager.createQuery("UPDATE EUser p SET p.Role ='" + "user" + "' WHERE p.ID='" + id + "'").executeUpdate();
            }
        }
        catch (Exception e) {
            try {
                throw new Exception("Error while JPA operating: " + e.getMessage());
            } catch (Exception ex) {
                throw new RuntimeException(ex);
            }
        }
    }
}
