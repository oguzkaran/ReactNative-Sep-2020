#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/stat.h>
#include "gpiodriver.h"

int openio(int iono)
{
    char path[64];

    sprintf(path, "/sys/class/gpio/gpio%d/value", iono);

    return open(path, O_WRONLY);
}


int closeio(int iono)
{
    return close(iono);
}

int activate(int fd)
{
    return write(fd, "1", 1);
}

int deactivate(int fd)
{
    return write(fd, "0", 1);
}

int exportio(int iono)
{
    int fd;    
    ssize_t result;
    char buf[8];
    size_t len;
    int status = 0;

    if ((fd = open("/sys/class/gpio/export", O_WRONLY)) == -1)
        return -1;

    sprintf(buf, "%d", iono);
    len = strlen(buf);

    if ((result = write(fd, buf, len)) == -1 || result != len) {
        status = -1;
        goto EXIT;
    }
EXIT:
    close(fd);

    return status;
}

int unexportio(int iono)
{
    int fd;    
    ssize_t result;
    char buf[8];
    size_t len;
    int status = 0;

    if ((fd = open("/sys/class/gpio/unexport", O_WRONLY)) == -1)
        return -1;

    sprintf(buf, "%d", iono);
    len = strlen(buf);

    if ((result = write(fd, buf, len)) == -1 || result != len) {
        status = -1;
        goto EXIT;
    }
EXIT:
    close(fd);

    return status;
}

int initio(int iono, const char *direction)
{
    int fd;    
    ssize_t result;
    char path[64];
    char buf[8];
    size_t len;
    int status = 0;

    sprintf(path, "/sys/class/gpio/gpio%d/direction", iono);
    if ((fd = open(path, O_WRONLY)) == -1)
        return -1;

    sprintf(buf, "%s", direction);
    len = strlen(buf);

    if ((result = write(fd, buf, len)) == -1 || result != len) {
        status = -1;
        goto EXIT;
    }
EXIT:
    close(fd);

    return status;        
}
