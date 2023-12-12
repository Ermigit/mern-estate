public class PolymorphismExample {
    public void start() {
        try {
            System.out.print("Starting up ");
        }
        finally {
            System.out.print("Shutting down ");
        }}
    public static void main(String[] args) {
        new PolymorphismExample().start();
    }}
