package Pack.infrastructure.out.interconnector;

import Pack.application.services.userAsync.api.InterconnectableUser;
import jakarta.annotation.Resource;
import jakarta.jms.ConnectionFactory;
import jakarta.jms.JMSContext;
import jakarta.jms.JMSProducer;
import jakarta.jms.Queue;

public class InterconnectorUser implements InterconnectableUser {
    @Resource(mappedName = "jms/EprFactoryU")
    private ConnectionFactory connectionFactory;

    @Resource(mappedName = "jms/EprQueueU")
    private Queue queue;

    @Override
    public void info(String flag) {
        try {
            JMSContext context = connectionFactory.createContext();
            JMSProducer producer = context.createProducer();
            producer.send(queue, flag);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
