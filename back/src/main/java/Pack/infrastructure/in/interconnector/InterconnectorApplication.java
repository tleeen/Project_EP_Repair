package Pack.infrastructure.in.interconnector;

import Pack.application.services.applicationAsync.api.IApplicAsync;
import Pack.infrastructure.builder.Built;
import jakarta.ejb.MessageDriven;

import jakarta.inject.Inject;
import jakarta.jms.JMSException;
import jakarta.jms.MessageListener;
import jakarta.jms.Message;
import jakarta.jms.TextMessage;

@MessageDriven(mappedName = "jms/EprQueueA")
public class InterconnectorApplication implements MessageListener {

    @Inject @Built
    private IApplicAsync applicAsync;

    @Override
    public void onMessage(Message message) {
        TextMessage textMessage = (TextMessage)message;
        try {
            String text = textMessage.getText();
            applicAsync.info(text);
        } catch (JMSException e) {
            throw new RuntimeException(e);
        }
    }
}
