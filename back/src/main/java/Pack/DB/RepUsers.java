package Pack.DB;

import Pack.model.API.ObjectData.User;
import Pack.model.API.Out.IRepUsers;

import jakarta.annotation.Resource;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.PersistenceUnit;

import jakarta.transaction.UserTransaction;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class RepUsers implements IRepUsers {
    @PersistenceUnit(unitName = "local_pg_test_PersistenceUnit")
    private EntityManagerFactory entityManagerFactory;

    @Resource
    private UserTransaction userTransaction;

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
            userTransaction.begin();
            entityManager.joinTransaction();

            EUser user = new EUser();
            user.setLogin(login);
            user.setPassword(password);

            entityManager.persist(user);

            userTransaction.commit();

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
            userTransaction.begin();
            entityManager.joinTransaction();

            List<EUser> users = entityManager.createQuery("SELECT p FROM EUser p WHERE p.Login ='" + login + "'", EUser.class).getResultList();

            userTransaction.commit();

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
            userTransaction.begin();
            entityManager.joinTransaction();

            List<EUser> users = entityManager.createQuery("SELECT p FROM EUser p WHERE p.Login ='" + login + "' AND p.Password ='" + password + "'", EUser.class).getResultList();

            userTransaction.commit();

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
            userTransaction.begin();
            entityManager.joinTransaction();

            List<EUser> users = entityManager.createQuery("SELECT p FROM EUser p WHERE p.Login ='" + login + "'", EUser.class).getResultList();

            userTransaction.commit();

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
            userTransaction.begin();
            entityManager.joinTransaction();

            List<EUser> users = entityManager.createQuery("SELECT p FROM EUser p WHERE p.Login ='" + login + "'", EUser.class).getResultList();

            userTransaction.commit();

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
            userTransaction.begin();
            entityManager.joinTransaction();

            List<EUser> USERS = entityManager.createQuery("SELECT p FROM EUser p", EUser.class).getResultList();

            userTransaction.commit();

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
            userTransaction.begin();
            entityManager.joinTransaction();

            entityManager.createQuery("DELETE FROM EUser p WHERE p.ID ='" + id_user + "'").executeUpdate();
            entityManager.createQuery("DELETE FROM EApplic p WHERE p.Id_user ='" + id_user + "'").executeUpdate();

            userTransaction.commit();

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
            userTransaction.begin();
            entityManager.joinTransaction();

            List<EUser> users = entityManager.createQuery("SELECT p FROM EUser p WHERE p.ID ='" + id + "'", EUser.class).getResultList();

            userTransaction.commit();


            userTransaction.begin();
            entityManager.joinTransaction();

            if(Objects.equals(users.get(0).getRole(), "user")){
                entityManager.createQuery("UPDATE EUser p SET p.Role ='" + "admin" + "' WHERE p.ID='" + id + "'").executeUpdate();
            }
            else{
                entityManager.createQuery("UPDATE EUser p SET p.Role ='" + "user" + "' WHERE p.ID='" + id + "'").executeUpdate();
            }
            userTransaction.commit();
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
