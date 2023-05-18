package Pack.infrastructure.in.interconnector;

import Pack.application.out.message.UpdateMessage;
import jakarta.ejb.MessageDriven;

import jakarta.inject.Inject;
import jakarta.jms.JMSException;
import jakarta.jms.MessageListener;
import jakarta.jms.Message;
import jakarta.jms.TextMessage;


@MessageDriven(mappedName = "jms/EprQueue")
public class InterconnectorTimer implements MessageListener {

    @Inject
    private UpdateMessage massage;

    @Override
    public void onMessage(Message message) {
        TextMessage textMessage = (TextMessage)message;
        try {
            String text = textMessage.getText();
            massage.messege(text);
        } catch (JMSException e) {
            throw new RuntimeException(e);
        }
    }
}
