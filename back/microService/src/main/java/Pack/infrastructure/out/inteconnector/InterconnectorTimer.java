package Pack.infrastructure.out.inteconnector;

import Pack.application.out.timer.InterconnectableTimer;
import jakarta.annotation.Resource;
import jakarta.jms.ConnectionFactory;
import jakarta.jms.JMSContext;
import jakarta.jms.JMSProducer;
import jakarta.jms.Queue;

public class InterconnectorTimer implements InterconnectableTimer {

    @Resource(mappedName = "jms/EprFactory")
    private ConnectionFactory connectionFactory;

    @Resource(mappedName = "jms/EprQueue")
    private Queue queue;

    @Override
    public void message(String flag) {
        try {
            JMSContext context = connectionFactory.createContext();
            JMSProducer producer = context.createProducer();
            producer.send(queue, flag);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
