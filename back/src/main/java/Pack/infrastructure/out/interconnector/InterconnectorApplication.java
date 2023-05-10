package Pack.infrastructure.out.interconnector;

import Pack.application.services.applicationAsync.api.InterconnectableApplication;
import jakarta.annotation.Resource;
import jakarta.jms.ConnectionFactory;
import jakarta.jms.JMSContext;
import jakarta.jms.JMSProducer;
import jakarta.jms.Queue;


public class InterconnectorApplication implements InterconnectableApplication {
    @Resource(mappedName = "jms/EprFactoryA")
    private ConnectionFactory connectionFactory;

    @Resource(mappedName = "jms/EprQueueA")
    private Queue queue;

    @Override
    public void info(String flag) {
        System.out.println("1111");
        try {
            JMSContext context = connectionFactory.createContext();
            JMSProducer producer = context.createProducer();
            producer.send(queue, flag);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
