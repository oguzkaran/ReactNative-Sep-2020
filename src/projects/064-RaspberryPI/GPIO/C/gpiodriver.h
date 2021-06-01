#ifndef GPIODRIVER_H_
#define GPIODRIVER_H_

int openio(int iono);
int closeio(int iono);
int activate(int fd);
int deactivate(int fd);
int exportio(int iono);
int unexportio(int iono);
int initio(int io, const char *direction);

#endif /* GPIODRIVER_H_ */
