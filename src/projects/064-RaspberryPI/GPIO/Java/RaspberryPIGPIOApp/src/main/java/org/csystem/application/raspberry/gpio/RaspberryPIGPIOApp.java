package org.csystem.application.raspberry.gpio;

import org.csystem.util.Console;
import org.csystem.util.pi.gpio.exception.GPIOException;
import org.csystem.util.pi.raspberry.raspian.gpio.driver.OutPinInfo;

import java.util.Random;

public final class RaspberryPIGPIOApp {
    private static void lightCallback(int ioNo, long milliseconds, int n, Random r)
    {
        try (var outPinInfo = new OutPinInfo(ioNo)) {
            outPinInfo.activate(r.nextBoolean());
            for (int i = 0; i < n - 1; ++i) {
                outPinInfo.activate(!outPinInfo.ioStatus());
                Thread.sleep(milliseconds);
                outPinInfo.activate(!outPinInfo.ioStatus());
                Thread.sleep(milliseconds);
            }
            outPinInfo.deactivate();
        }
        catch (GPIOException ex) {
            Console.Error.writeLine("GPIO Exception: %s, %s", ex.getMessage(), ex.getCause().getMessage());
        }
        catch (Throwable ex) {
            Console.Error.writeLine(ex.getCause().getMessage());
        }
    }

    private RaspberryPIGPIOApp()
    {
    }

    public static void run(String [] args)
    {
        if (args.length != 5) {
            Console.Error.writeLine("Wrong number of arguments");
            System.exit(-1);
        }

        try {
            var r = new Random();

            new Thread(() -> lightCallback(Integer.parseInt(args[2]), Long.parseLong(args[1]), Integer.parseInt(args[0]), r)).start();
            new Thread(() -> lightCallback(Integer.parseInt(args[3]), Long.parseLong(args[1]), Integer.parseInt(args[0]), r)).start();
            new Thread(() -> lightCallback(Integer.parseInt(args[4]), Long.parseLong(args[1]), Integer.parseInt(args[0]), r)).start();
        }
        catch (NumberFormatException ex) {
            Console.Error.writeLine("Invalid io number");
        }
    }
}
