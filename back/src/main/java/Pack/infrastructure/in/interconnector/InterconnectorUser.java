package Pack.infrastructure.in.interconnector;

import Pack.application.services.userAsync.api.IUsersAsync;
import Pack.infrastructure.builder.Built;
import jakarta.ejb.MessageDriven;
import jakarta.inject.Inject;
import jakarta.jms.JMSException;
import jakarta.jms.Message;
import jakarta.jms.MessageListener;
import jakarta.jms.TextMessage;

@MessageDriven(mappedName = "jms/EprQueueU")
public class InterconnectorUser implements MessageListener {

    @Inject
    @Built
    private IUsersAsync applicUser;

    @Override
    public void onMessage(Message message) {
        TextMessage textMessage = (TextMessage)message;
        try {
            String text = textMessage.getText();
            applicUser.info(text);
        } catch (JMSException e) {
            throw new RuntimeException(e);
        }
    }
}
