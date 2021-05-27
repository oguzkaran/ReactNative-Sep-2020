#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include "gpiodriver.h"
#include "errorutil.h"

int main(int argc, char **argv)
{
    int iono;
    size_t n;
    size_t i;
    unsigned int seconds;
    char *pend;
    int fd;

    if (argc != 4)
        exit_failure("Wrong number of arguments\n");

    iono = (int)strtol(argv[1], &pend, 10);
    if (*pend != '\0')
        exit_failure("Invalid io number");

    n = (size_t)strtol(argv[2], &pend, 10);
    if (*pend != '\0')
        exit_failure("Invalid count");

    seconds = (unsigned int)strtol(argv[3], &pend, 10);
    if (*pend != '\0')
        exit_failure("Invalid count");

    if (exportio(iono) == -1)
        exit_sys("exportio");
        
    if (initio(iono, "out") == -1)
        exit_sys("initio");
    
    if ((fd = openio(iono)) == -1)
        exit_sys("openio");

    for (i = 0; i < n; ++i) {
        activate(fd);
        sleep(seconds);
        deactivate(fd);
        sleep(seconds);
    }
    
    closeio(iono);
    unexportio(iono);
    
    return 0;
}


