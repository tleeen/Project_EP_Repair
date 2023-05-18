package Pack.infrastructure.in.rest.token;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;

public class TokenKey {
        private static volatile TokenKey instance;
        private final Key key;

        private TokenKey(){
                String sr = "wQujxIzQZWLO7DPqXKU2xCJn0zQHs3Lia7ld55IPwrVjdxzPo2zs79sxxplAFm7vQJihZVlzVoHGBq4uXx3isFagozUDqfyDnXsjfRFqO9uU5D8zvaB3f2QUp5Kpf5Vy0PqNMnSJCrAmPybLVT4g4nkfU5NT9XtmmnVgFKKx7G089trBwjRXSIM7ld08e4O97vfCheIAQ3uU78AjJZjB1VXy9PygWja5Xt0JZyeLgZ2ZsY51k8zHAiBC6Omi9Gl5";
                byte[] keyBytes = sr.getBytes();
                this.key = new SecretKeySpec(keyBytes, "HmacSHA256");
        }

        public static TokenKey getInstance(){
                if (instance == null){
                        instance = new TokenKey();
                }
                return instance;
        }

        public Key getKey() {
                return this.key;
        }
}