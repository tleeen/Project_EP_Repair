package Pack.Controller.Interceptor;

import Pack.Controller.Token.TokenKey;
import Pack.Controller.Token.TokenValidator;
import jakarta.ws.rs.NotFoundException;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.ext.Provider;
import jakarta.ws.rs.container.ContainerRequestFilter;

import java.io.IOException;
import java.security.Key;
import java.util.Objects;

@Provider
@HashRequired
public class Interceptor implements ContainerRequestFilter {
    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {
        String token = requestContext.getHeaderString("TOKEN");
        String login = requestContext.getHeaderString("LOGIN");
        String role = requestContext.getHeaderString("ROLE");

        TokenKey tokenKey = TokenKey.getInstance();
        Key key = tokenKey.getKey();
        TokenValidator tv = new TokenValidator(key);
        try {
            String[] elems = tv.validate(token);
            if (!Objects.equals(elems[0], login) && (!Objects.equals(elems[1], role))){
                throw new NotFoundException();
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
